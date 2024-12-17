import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handlePostSubmit = () => {
    // Trim whitespace and validate post
    const trimmedPost = postText.trim();
    
    if (trimmedPost.length === 0) {
      // Optional: Show an alert or toast for empty post
      return;
    }

    if (trimmedPost.length > MAX_CHARS) {
      // Optional: Show an error about character limit
      return;
    }

    // Navigate back and pass the post data
    navigation.navigate('Home', {post: trimmedPost});
  };

  const handleTextChange = (text) => {
    setPostText(text);
    setCharCount(text.length);
  };

  return (
    <>

    <TextInput
      multiline
      placeholder="What's on your mind?"
      placeholderTextColor="#888"
      style={{ height: 200, padding: 10, backgroundColor: 'white' }}
      value={postText}
      onChangeText={handleTextChange}
      maxLength={MAX_CHARS}
      textAlignVertical="top"
    />
      <TouchableOpacity 
        style={[
          styles.submitButton, 
          (postText.trim().length === 0 || charCount > MAX_CHARS) 
            && styles.submitButtonDisabled
        ]}
        onPress={handlePostSubmit}
        disabled={postText.trim().length === 0 || charCount > MAX_CHARS}
      >
        <Text style={styles.submitButtonText}>Post</Text>
      </TouchableOpacity>
          
    </>
  );
};

const styles = StyleSheet.create({
 submitButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  submitButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default CreatePostScreen;











