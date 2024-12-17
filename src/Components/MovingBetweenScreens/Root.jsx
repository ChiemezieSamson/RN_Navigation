import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Root = ({props, extraData}) => {
  const navigation = useNavigation()
  
  return (
    <View className={`bg-red-300 flex-1 items-center justify-center`}>
      <Text>Root</Text>
      <Button title='Go to Details' onPress={() => navigation.navigate('About')}>
        
      </Button>
    </View>
  )
}

export default Root