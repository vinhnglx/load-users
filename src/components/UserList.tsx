import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import User from '../interfaces/User.Interface';
import { ReducerState } from '../store/reducer';
import UserCard from './UserCard';

interface PropsInterface {
	users: User[],
  page: number
}

const UserList: React.FC<PropsInterface> = ({users, page}) => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={{flexDirection: "column"}}>
        {
          users.map((item, key) => {
            return (<UserCard key={key} user={item} />)
          })
        }
      </View>
    </View>
  )
}

const mapStateToProps = (state: ReducerState) => {
	return {
		users: state.users,
    page: state.page
	}
}

export default connect(mapStateToProps)(UserList);