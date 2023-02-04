import Channel from '@pages/Channel';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useSWR from 'swr';

const Workspace = () => {
  const { data: userData, mutate: revalidateUser } = useSWR(
    '/api/users',
    fetcher
  );
  const onLogOut = useCallback(() => {
    axios
      .post('/api/users/logout')
      .then(() => {
        revalidateUser();
      })
      .catch(error => {
        console.dir(error);
        toast.error(error.response?.data, { position: 'bottom-center' });
      });
  }, []);

  if (!userData) {
    return <Navigate replace to="/login" />;
  } else {
    console.log(userData);
  }

  return (
    <>
      <button onClick={onLogOut}>로그아웃</button>
      {/* <Channel /> */}
      {/* <ToastContainer position="bottom-center" /> */}
    </>
  );
};

export default Workspace;
