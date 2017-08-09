import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../actions/actionsTypes';

export default function counter(state = 0, action) {
  const time = new Date();
  switch (action.type) {
    case INCREMENT_COUNTER:
      fetch('http://localhost:3000/test1').then((response) => {
        if (response.ok) {
          return response.json();
        }
        return { status: response.status };
      }).then((response) => {
        console.log(time, response[0].proId);
      });
      // debugger;
      // console.log("----------------------console test!!!--------------------");
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
