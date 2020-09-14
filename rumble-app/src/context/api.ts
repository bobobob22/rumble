import { apiUrl } from 'settings';

export const loadMoviesApi = async function (): Promise<any> {
  try {
    const data = await fetch(`${apiUrl}/all`);
    const responseData = await data.json();
    return responseData;
  } catch (error) {
    return error;
  }
};

export const updateMoviesData = async function (movieId: string, userChoice: string): Promise<any> {
  try {
    const data = await fetch(`${apiUrl}/reccomendations/${movieId}/${userChoice}`, {
      method: 'PUT',
    });
    const responseData = await data.json();
    return responseData;
  } catch (error) {
    return error;
  }
};
