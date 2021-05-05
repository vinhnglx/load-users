import User from '../interfaces/User.Interface';

interface GetUsersAction {
	type: string,
  users: User[]
}

interface GetMoreUsersAction {
  type: string,
  users: User[]
}

export type UserActionTypes = GetUsersAction & GetMoreUsersAction