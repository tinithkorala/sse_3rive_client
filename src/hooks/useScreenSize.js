import { useMediaQuery } from '@mui/material';

const useScreenSize = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const isLarge = useMediaQuery('(min-width:961px)');

  return { isMobile, isTablet, isLarge };
};

export default useScreenSize;