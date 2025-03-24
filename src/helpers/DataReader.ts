export const fetchJsonData = async (location: string) => {
  const response = await fetch(location);
  return await response.json();
};
