import React from 'react';

import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: <FontAwesomeIcon icon={icon({ name: 'table-columns', style: 'solid' })} />,
      breadcrumbs: false,
    },
  ],
};

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: <FontAwesomeIcon icon={icon({ name: 'right-to-bracket', style: 'solid' })} />,
      target: true,
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: <FontAwesomeIcon icon={icon({ name: 'id-card', style: 'solid' })} />,
      target: true,
    },
  ],
};

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: <FontAwesomeIcon icon={icon({ name: 'file', style: 'solid' })} />,
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis-react/',
      icon: <FontAwesomeIcon icon={icon({ name: 'book', style: 'solid' })} />,
      external: true,
      target: true,
    },
  ],
};

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: <FontAwesomeIcon icon={icon({ name: 'file-word', style: 'solid' })} />,
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: <FontAwesomeIcon icon={icon({ name: 'palette', style: 'solid' })} />,
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: <FontAwesomeIcon icon={icon({ name: 'ghost', style: 'solid' })} />,
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: <FontAwesomeIcon icon={icon({ name: 'icons', style: 'solid' })} />,
      breadcrumbs: false,
    },
  ],
};

export const menuItems = {
  items: [dashboard, pages, utilities, support],
};
