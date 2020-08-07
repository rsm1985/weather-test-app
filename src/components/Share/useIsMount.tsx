import { useRef, useEffect } from 'react';

// skip applying an effect upon the initial render
export const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};