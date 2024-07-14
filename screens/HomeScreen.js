import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import {searchMovies} from '../services/api';

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        onSubmit={handleSearch}
        loading={loading}
      />
      <FlatList
        data={movies}
        keyExtractor={item => item.key}
        renderItem={({item}) => <MovieCard movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
