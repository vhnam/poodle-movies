import { slice } from 'ramda';

import { Media } from '../../types';

const shuffle = (array: Media[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getSimilarMedia = (media: Media[]) => {
  const shuffledMedia = shuffle(media);
  return slice(0, 4, shuffledMedia);
};

export default getSimilarMedia;
