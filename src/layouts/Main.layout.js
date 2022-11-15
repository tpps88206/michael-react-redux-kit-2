// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/index.js

import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';

import MainDrawer from '../components/MainDrawer';
import MainHeader from '../components/MainHeader';
const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <MainHeader />
      <MainDrawer />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
