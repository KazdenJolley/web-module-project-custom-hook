import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [dark, setDark] = useLocalStorage('dark');
  return [ dark, setDark ];
}
export default useDarkMode;