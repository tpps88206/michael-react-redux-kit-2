// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/DrawerContent/Navigation/NavGroup.js

import React from 'react';

import { Box, List, Typography } from '@mui/material';

import MainDrawerContentNavigationItem from './MainDrawerContentNavigationItem';

const MainDrawerContentNavigationGroup = ({ item }) => {
  const navCollapse = item.children?.map(menuItem => {
    switch (menuItem.type) {
      case 'collapse':
        return (
          <Typography key={menuItem.id} variant="caption" color="error" sx={{ p: 2.5 }}>
            collapse - only available in paid version
          </Typography>
        );
      case 'item':
        return <MainDrawerContentNavigationItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.title}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: 1.5, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
};

export default MainDrawerContentNavigationGroup;
