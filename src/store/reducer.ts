import User from '../interfaces/User.Interface';
import { UserActionTypes } from '../interfaces/Action.interface';
import {GET_USERS, GET_MORE_USERS} from './actions'

interface InitState {
	users: User[],
	page: number
}

const initState: InitState = {
	users: [],
	page: 1
}

const RootReducer = (state: InitState = initState, action: UserActionTypes) => {
  switch (action.type) {
    case GET_USERS:
			return {
				users: [...state.users, ...action.users],
				page: 1
			}
		case GET_MORE_USERS:
			console.log("pong", action)
			return {
				users: [...state.users, ...action.users],
				page: state.page + 1
			}
		default:
			return state
  }
}

export default RootReducer;

export type ReducerState = ReturnType<typeof RootReducer>
