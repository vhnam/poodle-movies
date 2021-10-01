const getImage = (imageID: string) =>
  `https://image.tmdb.org/t/p/original/${imageID}?api_key=${process.env.REACT_APP_API_KEY}`;

export default getImage;
