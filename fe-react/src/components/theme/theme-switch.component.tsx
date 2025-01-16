import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { RootState } from '../../store/store';
import { toggleTheme } from '../../store/app/app.slice';
import Switch from '../switch/switch.component';

const ThemeSwitch: FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  // Apply the theme to the root element
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const handleToggle = (): Action => dispatch(toggleTheme());
  return (
    <Switch
      isOn={theme === 'dark'}
      handleToggle={handleToggle}
      onColor="var(--primary-color)"
      offColor="var(--off-color)"
    />
  );
};

export default ThemeSwitch;
