import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Increment from './Increment';
import Decrement from './Decrement';
import Reset from './Reset';

function App() {
const number = useSelector(state => state.num)
  return (
    <div className="container">
      <div className="counter">{number}</div>
      <div className="buttons">
        <Increment />
        <Decrement />
        <Reset />
      </div>
    </div>
  );
}

export default App;
