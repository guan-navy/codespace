
import PropTypes from 'prop-types';
export default function BrotherA(props) {
    const msg ='来自子组件A的数据'
    const handler = ()=>{
        props.cb(msg)
    }
  return (
    <div>
      <button onClick={handler}>BrotherA</button>
    </div>
  )
}
BrotherA.propTypes = {
    cb: PropTypes.func.isRequired,
  };
