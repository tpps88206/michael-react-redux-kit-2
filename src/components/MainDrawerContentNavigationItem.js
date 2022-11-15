// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Drawer/DrawerContent/Navigation/NavItem.js

import React, { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { activeItem } from '../stores/slices/menu.store';

const MainDrawerContentNavigationItem = ({ item, level }) => {
  const dispatch = useDispatch();
  const { openItem } = useSelector(state => state.menu);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = id => {
    dispatch(activeItem({ openItem: [id] }));
  };

  const isSelected = openItem.findIndex(id => id === item.id) > -1;

  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex(id => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, []);

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: `${level * 28}px`,
        py: 1,
        ...{
          '&:hover': {
            bgcolor: 'primary.lighter',
          },
          '&.Mui-selected': {
            bgcolor: 'primary.lighter',
            borderRight: `2px solid #555555`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: 'primary.lighter',
            },
          },
        },
      }}
    >
      {item.icon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
          }}
        >
          {item.icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
            {item.title}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default MainDrawerContentNavigationItem;
