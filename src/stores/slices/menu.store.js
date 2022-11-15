// https://github.com/codedthemes/mantis-free-react-admin-template/blob/main/src/store/reducers/menu.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openItem: ['dashboard'],
};

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },
  },
});

export const { activeItem } = slice.actions;

export default slice.reducer;
