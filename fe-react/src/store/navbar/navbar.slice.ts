import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IconTextProperties } from '../../components/navbar/navbar.component';
import { navItems } from '../../constants';

// Initial State
interface NavbarState {
  items: IconTextProperties[];
}

const initialState: NavbarState = {
  items: navItems
};

// Create Slice
const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IconTextProperties[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<IconTextProperties>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setActiveItem: (state, action: PayloadAction<number>) => {
      // const activeItem = state.items.find(item => item === action.payload);
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    }
  }
});

// Export Actions
export const { setItems, addItem, removeItem, setActiveItem } =
  navbarSlice.actions;

// Export Reducer
export default navbarSlice.reducer;
