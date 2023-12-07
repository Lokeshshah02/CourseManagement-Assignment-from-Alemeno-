import courseModel from "../models/courseModel";

const fetchCourses = async () => {
  try {
    const response = await fetch('/api/courses');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error; // Propagate the error
  }
};

const fetchEnrolledCourses = async () => {
  try {
    const response = await fetch('/api/enrolled-courses');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    throw error;
  }
};

const fetchCourseById = async (id) => {
  try {
    const response = await fetch(`/api/course/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    throw error;
  }
};

export { fetchCourses, fetchEnrolledCourses, fetchCourseById };
