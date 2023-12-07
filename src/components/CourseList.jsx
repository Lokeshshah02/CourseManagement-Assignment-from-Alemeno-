import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesSuccess } from '../redux/action';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        // Fetch courses here and dispatch the action
        // Example:
        const response = await fetch('/api/courses');
        const data = await response.json();
        dispatch(fetchCoursesSuccess(data));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    // Call the fetchCourses function
    fetchCoursesData();
  }, [dispatch]);

  // Memoize the courses array to avoid unnecessary re-rendering
  const memoizedCourses = useMemo(() => courses, [courses]);

  return (
    <div>
      <h2>Course Listing</h2>
      <ul>
        {memoizedCourses.map(course => (
          <li key={course.id}>
            {course.name} - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
