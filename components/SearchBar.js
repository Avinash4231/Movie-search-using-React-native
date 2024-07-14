import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {SearchBar as RNESearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchBar = ({value, onChangeText, onSubmit, loading}) => {
  return (
    <View>
      <RNESearchBar
        placeholder="Search..."
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmit}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        searchIcon={<Icon name="search" size={24} color="#000" />} 
        clearIcon={{size: 24}}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 15,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 30,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    color: '#424242',
  },
  loading: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
});

export default SearchBar;
