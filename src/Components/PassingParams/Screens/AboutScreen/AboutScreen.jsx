import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = ({route}) => {
  const navigation = useNavigation()

  const { itemId, otherParam } = route.params;
  return (
    <View>
      <Text>AboutScreen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title='Go to Details again' onPress={() => navigation.push('About',  {
              itemId: Math.floor(Math.random() * 100),
            })}>
        
      </Button>
      <Button title='go back' onPress={() => navigation.goBack()}>Go back</Button> 
      <Button title='Go to Home' onPress={() => navigation.popTo('Home')}></Button>
      <Button title='Go back to first screen in stack' onPress={() => navigation.popToTop()}></Button>
    </View>
  )
}

export default AboutScreen