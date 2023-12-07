// reducers.js
import { FETCH_COURSES_SUCCESS, FETCH_ENROLLED_COURSES_SUCCESS } from './action';

const initialState = {
  courses: [],
  enrolledCourses: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    case FETCH_ENROLLED_COURSES_SUCCESS:
      return {
        ...state,
        enrolledCourses: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
