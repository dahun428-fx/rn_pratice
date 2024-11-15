import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Empty() {
  const text = '야호! 할일이 없습니다.';
  // const imageSrc = require('./assets/images/circle.png');
  // const imageSrc = 'https://via.placeholder.com/150';
  const imageSrc = require('./assets/images/young_and_happy.png');
  return (
    <View style={styles.block}>
      <Image
        // source={{uri: imageSrc}}
        source={imageSrc}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 300,
    height: 200,
    // backgroundColor: 'gray',
  },
});
