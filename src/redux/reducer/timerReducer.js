import {
  SET_START_TIME,
  UPDATE_ELAPSED_TIME,
  ADD_IS_SCROLLED,
} from "../actions/timerActions";

const initialState = {
  startTime: 0,
  elapsedTime: 0,
  percentage: 0,
  isScrolled: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };
    case UPDATE_ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: action.payload.elapsedTime,
        percentage: action.payload.percentage,
      };
    case ADD_IS_SCROLLED:
      return {
        ...state,
        isScrolled: action.payload,
      };
    default:
      return state;
  }
};

export default timerReducer;
