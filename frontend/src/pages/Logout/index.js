import React, { useState, useEffect, Fragment } from 'react';
import { Button } from 'antd';
import API from '../../services/API';
const Logout = () => {

  const localStorageToken = localStorage.getItem('myToken');

  const onFinish = async (state) => {
    const res = API.logoutApi('/accounts/logout/', localStorageToken);
    localStorage.clear()
  }
  return (
    <div>
      <h1>Are you sure you want to logout?</h1>
      {/* <input type='button' value='Logout' onClick={onFinish} /> */}
      <Button type="danger" onClick={onFinish} >Primary Button</Button>

    </div>
  );
};

export default Logout;