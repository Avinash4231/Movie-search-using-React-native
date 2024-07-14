import React, {useEffect, useState} from 'react';
import Card from './Card';
import {getRandomImage} from '../services/api';

const MovieCard = ({movie}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getRandomImage();
      setImageUrl(url);
    };

    fetchImage();
  }, []);

  return <Card imageUrl={imageUrl} title={movie.title} />;
};

export default MovieCard;
