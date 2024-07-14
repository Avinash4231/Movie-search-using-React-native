import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({imageUrl, title, children}) => {
  return (
    <View style={styles.card}>
      {imageUrl ? (
        <Image source={{uri: imageUrl}} style={styles.image} />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
