import { Space, Spin } from 'antd';
import React from 'react';

export const LoadSpinner = () => {
  return (
    <>
      <Space
        size="middle"
        style={{ position: 'fixed', zIndex: '9999', top: '40%', left: '48%' }}
      >
        <Spin size="large" />
      </Space>
    </>
  );
};

export default LoadSpinner;
