// actions.js
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_ENROLLED_COURSES_SUCCESS = 'FETCH_ENROLLED_COURSES_SUCCESS';

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchEnrolledCoursesSuccess = (enrolledCourses) => ({
  type: FETCH_ENROLLED_COURSES_SUCCESS,
  payload: enrolledCourses,
});
