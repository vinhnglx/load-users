import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import User from '../interfaces/User.Interface';


interface PropsInterface {
	user: User,
}

const UserCard: React.FC<PropsInterface> = ({ user }) => {
  return (
    <TouchableOpacity
			style={{
        padding: 20,
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1
      }}
		>
     <View style={{flexDirection: "row"}}>
      <View style={{flex: 2}}>
        <Text>
          {user.name.title}
        </Text>
        <Text>
          {user.name.first} {user.name.last}
        </Text>
      </View>

      <View style={{flex: 1}}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: user.picture.thumbnail}}
        />
      </View>
     </View>
		</TouchableOpacity>
  )
}

export default UserCard