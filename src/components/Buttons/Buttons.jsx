import Button from '@mui/material/Button';
import PropTypes from 'prop-types'

const Buttons = ({className, value, onClick }) => {
  return (

        <Button variant='contained' id={value} sx={{backgroundColor: '#5b92c9', fontSize: '1.25rem'}} className={className} onClick={onClick}>
          {value}
        </Button>
      );
    };  
    
  Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,

}

export default Buttons