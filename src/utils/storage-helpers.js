export const setLocalCollection = (data) => window.localStorage?.setItem('poke-collection', JSON.stringify(data));

export const getLocalCollection = () => {
  const serializedCollection = window.localStorage?.getItem('poke-collection');

  return JSON.parse(serializedCollection) || null;
};
