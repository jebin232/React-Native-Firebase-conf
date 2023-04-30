import React from 'react';
import {  View } from 'react-native';
import Fetch from './Fetch';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,}}>
        <Fetch/>
    </View>
  )
}
export default HelloWorldApp;