import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  // Fetch detailed course data using the id (dummy data for now)
  const course = { id, name: 'Course 1', instructor: 'Instructor 1', description: 'Sample Description', enrollmentStatus: 'Open', duration: '4 weeks', schedule: 'MWF 9:00 AM - 11:00 AM', location: 'Room 101', prerequisites: 'None', syllabus: 'Sample Syllabus' };

  return (
    <div>
      <h2>Course Details</h2>
      <p>{course.name}</p>
      <p>{course.instructor}</p>
      <p>{course.description}</p>
      <p>{course.enrollmentStatus}</p>
      <p>{course.duration}</p>
      <p>{course.schedule}</p>
      <p>{course.location}</p>
      <p>{course.prerequisites}</p>
      <details>
        <summary>Syllabus</summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetails;
