export interface UserInfo {
  title: string,
  first: string,
  last: string
}

export interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}

export default interface User {
  name: UserInfo,
  picture: Picture
}