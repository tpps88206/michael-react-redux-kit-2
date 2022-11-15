// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/DrawerContent/Navigation/index.js
import React from 'react';

import { Box, Typography } from '@mui/material';

import { menuItems } from '../constants/menu.constant';
import MainDrawerContentNavigationGroup from './MainDrawerContentNavigationGroup';

const MainDrawerContentNavigation = () => {
  const navGroups = menuItems.items.map(item => {
    switch (item.type) {
      case 'group':
        return <MainDrawerContentNavigationGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default MainDrawerContentNavigation;
