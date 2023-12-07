import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchEnrolledCoursesSuccess } from '../redux/actions';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.enrolledCourses);

  useEffect(() => {
    // Fetch enrolled courses here and dispatch the action
    // Example: fetchEnrolledCourses().then(data => dispatch(fetchEnrolledCoursesSuccess(data)));
  }, [dispatch]);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            {course.name} - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
