import { FC, useState } from 'react';
import { ReactComponent as Logo } from './assets/react.svg';
import IconText from './components/icon/icon-text.component';

const App: FC = () => {
  const [state, setState] = useState(true);
  return (
    <div>
      <h1>We are all Jedi!</h1>
      <IconText Icon={Logo} isActive={state} />
      <button onClick={() => setState(!state)} type="button">Activate/Deactivate</button>
    </div>
  );
};
export default App;
