import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SnackbarCloseIcon = ({ key_, onCloseSnackbar }) => {
  return (
    <IconButton onClick={() => onCloseSnackbar(key_)}>
      <CloseIcon sx={{ color: '#fff', width: 20, height: 20 }} />
    </IconButton>
  );
};

SnackbarCloseIcon.propTypes = {
  key_: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onCloseSnackbar: PropTypes.func.isRequired,
};

export default SnackbarCloseIcon;