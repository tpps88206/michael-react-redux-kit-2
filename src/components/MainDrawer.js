// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/index.js

import React, { useMemo } from 'react';

import styled from 'styled-components';

import { Box, Drawer } from '@mui/material';

import MainDrawerContent from './MainDrawerContent';
import MainDrawerHeader from './MainDrawerHeader';

const DrawerWrapper = styled(Drawer)`
  width: 260px;
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;
  overflow-x: hidden;
  box-shadow: none;

  & .MuiDrawer-paper {
    width: 260px;
    overflow-x: hidden;
    box-shadow: none;
  }
`;

const MainDrawer = () => {
  const drawerHeader = useMemo(() => <MainDrawerHeader />, []);
  const drawerContent = useMemo(() => <MainDrawerContent />, []);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="drawer">
      <DrawerWrapper variant="permanent" open={true}>
        {drawerHeader}
        {drawerContent}
      </DrawerWrapper>
    </Box>
  );
};

export default MainDrawer;
