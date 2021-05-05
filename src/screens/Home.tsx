import axios from 'axios';
import React, { useEffect } from "react";
import { Button, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import UserList from '../components/UserList';
import User from '../interfaces/User.Interface';
import { GET_MORE_USERS, GET_USERS } from '../store/actions';
import { ReducerState } from '../store/reducer';

interface PropsInterface {
	getUsers: (users: User[]) => {
    type: string;
    users: User[]
  },
  getMoreUsers: (users: User[]) => {
    type: string;
    users: User[]
  },
  users: User[],
  page: number
}

const Home: React.FC<PropsInterface> = ({getUsers, getMoreUsers, users, page}) => {
  useEffect(() => {
    axios.get('https://randomuser.me/api?results=3').then((response) => {
      getUsers(response.data.results)
    })
  }, [])

  return (<ScrollView>
    <UserList />
    <Button
      title="load more"
      onPress={() => axios.get(`https://randomuser.me/api?results=3&page=${page+1}`).then((response) => {
        getMoreUsers(response.data.results)
      })}
    />
  </ScrollView>)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		getUsers: (users: User[]) => dispatch({ type: GET_USERS, users: users }),
    getMoreUsers: (users: User[]) => dispatch({ type: GET_MORE_USERS, users: users }),
	}
}

const mapStateToProps = (state: ReducerState) => {
	return {
		users: state.users,
    page: state.page
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);