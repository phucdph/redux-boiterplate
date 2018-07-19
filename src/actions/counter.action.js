import { INCREMENT, DECREMENT } from '../constants/counter.constant';

const increment = () => dispatch =>
    dispatch({ type: INCREMENT });


const decrement = () => dispatch =>
    dispatch({ type: DECREMENT });


export { increment, decrement }