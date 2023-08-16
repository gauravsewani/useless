export const SET_START_TIME = "SET_START_TIME";
export const UPDATE_ELAPSED_TIME = "UPDATE_ELAPSED_TIME";
export const ADD_IS_SCROLLED = "ADD_IS_SCROLLED";

export const setStartTime = (startTime) => {
  return {
    type: SET_START_TIME,
    payload: startTime,
  };
};

export const updateElapsedTime = (elapsedTime) => {
  let percentage = (elapsedTime / 2000) * 100;
  if (percentage > 100) {
    percentage = 100;
  }
  percentage = Math.trunc(percentage); // truncate the percentage value
  percentage = Math.round(percentage); // round the truncated value to the nearest integer
  return {
    type: UPDATE_ELAPSED_TIME,
    payload: {
      elapsedTime,
      percentage,
    },
  };
};

export const addIsScrolled = (isScrolled) => {
  return {
    type: ADD_IS_SCROLLED,
    payload: isScrolled,
  };
};
