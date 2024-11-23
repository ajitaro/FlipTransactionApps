import {useRef, useState} from 'react';
import Axios from 'axios';

export const apiInstance = Axios.create({
  baseURL: 'https://recruitment-test.flip.id/frontend-test',
  timeout: 60000,
});

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const controller = useRef(new AbortController()).current;

  const callAPI = async () => {
    apiInstance
      .request({signal: controller.signal})
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        console.error(
          'error fetching API !!!',
          err?.response?.data?.message || err.message,
        );
      });
  };

  const fetchData = (resetState = true) => {
    if (resetState) {
      setResponse(undefined);
    }
    callAPI();
  };

  return {response, fetchData};
};
