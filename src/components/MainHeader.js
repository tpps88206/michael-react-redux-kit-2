// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Header/index.js

import React from 'react';

import { AppBar, Box, Toolbar } from '@mui/material';

import MainHeaderAvatar from './MainHeaderAvatar';

const MainHeader = () => {
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid #FFFFFF`,
    },
  };

  return (
    <AppBar {...appBar}>
      <Toolbar>
        <Box sx={{ width: '100%', ml: 1 }} />
        <MainHeaderAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
