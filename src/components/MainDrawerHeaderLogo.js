// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/components/Logo/index.js

import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonBase, Typography } from '@mui/material';

const MainDrawerHeaderLogo = ({ sx, to }) => (
  <ButtonBase disableRipple component={Link} to={to} sx={sx}>
    <Typography variant="h2">Logo</Typography>
  </ButtonBase>
);

export default MainDrawerHeaderLogo;
