import {
  useAuth0,
} from '@auth0/auth0-react';
import axios from 'axios';
import {
  useCallback,
} from 'react';

const baseUrl = `http://localhost:3000/api/scores`;

const useScores2 = () => { // 👈 1
  const {
    getAccessTokenSilently,
  } = useAuth0(); // 👈 2

  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently(); // 👈 3
    const {
      data,
    } = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },// 👈 4
    });

    return data.items;
  }, [getAccessTokenSilently]);

  const getById = useCallback(async (id) => {
    const token = await getAccessTokenSilently(); // 👈 3
    const {
      data,
    } = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, // 👈 4
    });
    return data;
  }, [getAccessTokenSilently]);

  const save = useCallback(async (transaction) => {
    const token = await getAccessTokenSilently(); // 👈 3
    const {
      id,
      ...values
    } = transaction;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: `${baseUrl}/${id ?? ''}`,
      data: values,
      headers: {
        Authorization: `Bearer ${token}`,
      }, // 👈 4
    });
  }, [getAccessTokenSilently]);

  const deleteById = useCallback(async (id) => {
    const token = await getAccessTokenSilently(); // 👈 3
    await axios.delete(`${baseUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, // 👈 4
    });
  }, [getAccessTokenSilently]);

  return {
    getAll,
    getById,
    save,
    deleteById,
  }; // 👈 5
};

export default useScores2;
