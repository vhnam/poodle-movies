const getDuration = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = Math.floor(runtime / 60);
  return `${hours}h ${minutes}min`;
};

export default getDuration;
