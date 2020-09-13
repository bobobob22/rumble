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
