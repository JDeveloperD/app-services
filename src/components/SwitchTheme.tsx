import { useAppCtx } from '../context/AppCtx';
import Button from './Button';

const SwitchTheme = () => {
  const { toggleTheme } = useAppCtx();
  return <Button onClick={toggleTheme}> cambiar</Button>;
};

export default SwitchTheme;
