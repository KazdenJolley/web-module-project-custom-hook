import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
  const [dark, setDark] = useLocalStorage('dark', initialValue);
  return [ dark, setDark ];
}
export default useDarkMode;