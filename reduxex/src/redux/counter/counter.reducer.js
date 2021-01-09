import { INCR, DECR } from "./counter.actiontypes";

let initialstate = {
  counterNumber: 100,
};

function counterReducer(state = initialstate, action) {
  console.log("inside Reducer");
  let { type } = action;
  switch (type) {
    case INCR:
      return {
        counterNumber: state.counterNumber + 1,
      };
    case DECR:
      return {
        counterNumber: state.counterNumber - 1,
      };
    default:
      return state;
  }
}
export default counterReducer;

/*

reducer is pure function?

what is pure function?
 - mamatha will tell tomrrow?

*/

/*
Reducer - create new store/update existing store  based action type

*/
