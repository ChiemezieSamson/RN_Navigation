import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button title='Go to Details again' onPress={() => navigation.push('About')}>
        
      </Button>
      <Button title='go back' onPress={() => navigation.goBack()}>Go back</Button> 
      <Button title='Go to Home' onPress={() => navigation.popTo('Home')}></Button>
      <Button title='Go back to first screen in stack' onPress={() => navigation.popToTop()}></Button>
    </View>
  )
}

export default AboutScreen