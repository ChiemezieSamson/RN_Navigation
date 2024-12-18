import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = ({route}) => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title=" Update the title"
        onPress={() =>
          navigation.setOptions({ title: 'Updated!' })
        }
      ></Button>
    </View>
  )
}

export default ProfileScreen