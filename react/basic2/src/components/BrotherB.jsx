
import { Consumer } from '../provider';
import { PropTypes } from 'prop-types';
export default function BrotherB() {

  return (
    <Consumer >
        {
            (value) => {
                return (
                    <div>
                        <h4>BrotherB--{value}</h4>
                    </div>
                )
            }
        }
      
    </Consumer>
    
  )
}
BrotherB.propTypes = {
    message: PropTypes.string.isRequired,
  };
