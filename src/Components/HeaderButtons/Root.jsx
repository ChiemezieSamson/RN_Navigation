import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Root = ({route}) => {
  const navigation = useNavigation()
  const [count, setCount] = React.useState(0);
  

  // Use an effect to monitor the update to params
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      alert('New post: ' + route.params?.post);
    }

  }, [route.params?.post]);

  React.useEffect(() => {
    console.log("me");
    
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button title='Update count' onPress={() => setCount((c) => c + 1)}/>
      ),
    });
  }, [navigation]);
  
  return (
    <View className={`bg-red-300 flex-1 items-center justify-center`}>
      <Button title='Go to Details' onPress={() => navigation.navigate('About',  {
            itemId: 86,
            otherParam: 'anything you want here',
          })}>
      </Button>
      <Button title='Create post' onPress={() => navigation.navigate('CreatePost')}>
      </Button>
      <Button title='My Profile' onPress={() => navigation.navigate('Profile')}>
      </Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Text>Count: {count}</Text>
    </View>
  )
}

export default Root