import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({

  name: 'search',
  initialState: '',
  reducers: {
    setSearch: (state, action) => {
      state = action.payload;
      return state;
    },

    clearSearch: (state) => {
      state = '';
      return state;
    }
  }
}


);
export default  searchSlice.reducer;

export const { setSearch, clearSearch } = searchSlice.actions;
