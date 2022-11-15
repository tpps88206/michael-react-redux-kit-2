// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/layout/MainLayout/Header/HeaderContent/Profile/index.js

import React, { useRef, useState } from 'react';

import { Avatar, Box, ButtonBase, Stack, Typography } from '@mui/material';

import avatarImage from '../assets/avatar.png';

const MainHeaderAvatar = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const iconBackColorOpen = 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'secondary.lighter' },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={avatarImage} sx={{ width: 32, height: 32 }} />
          <Typography variant="subtitle1">John Doe</Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default MainHeaderAvatar;
