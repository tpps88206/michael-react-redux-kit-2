// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/DrawerContent/index.js

import React from 'react';

import styled from 'styled-components';

import MainDrawerContentNavigation from './MainDrawerContentNavigation';

const MainDrawerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDrawerContent = () => (
  <MainDrawerContentWrapper>
    <MainDrawerContentNavigation />
  </MainDrawerContentWrapper>
);

export default MainDrawerContent;
