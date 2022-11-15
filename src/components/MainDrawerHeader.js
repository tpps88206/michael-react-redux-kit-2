// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/DrawerHeader/index.js

import React from 'react';

import styled from 'styled-components';

import { Box, Stack } from '@mui/material';

import MainDrawerHeaderLogo from './MainDrawerHeaderLogo';

const MainDrawerHeaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;
`;

const MainDrawerHeader = () => {
  return (
    <MainDrawerHeaderWrapper>
      <Stack direction="row" spacing={1} alignItems="center">
        <MainDrawerHeaderLogo />
      </Stack>
    </MainDrawerHeaderWrapper>
  );
};

export default MainDrawerHeader;
