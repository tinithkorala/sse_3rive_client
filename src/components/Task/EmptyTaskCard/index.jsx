import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export const emptyContentMessage = {
  default: {
    heading: 'No Tasks Available',
    description: 'There is currently no tasks to display. Please create a new task.',
  },
};

const EmptyTaskCard = ({message = emptyContentMessage?.default}) => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#656565',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
        m: 4,
      }}
    >
      <TravelExploreIcon fontSize='large' />
      <Typography variant='h6'>
        {message?.heading}
      </Typography>
      <Typography>
        {message?.description}
      </Typography>
    </Box>
  );
};

export default EmptyTaskCard;

EmptyTaskCard.propTypes = {
  message: PropTypes.object.isRequired,
};