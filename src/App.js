import React, { useState } from 'react';
import './App.css';
import Course from './Courses/Course';
import CourseForm from './NewCourse/CourseForm';
import  "./NewCourse/NewCourse.css"

function App() {

  const courses = [
    {
      name: "Java Programing",
      description: "Java Course",
      fees: 1000,
      date: new Date (2023 ,9 ,11)
    },

    {
      name: "Python Programing",
      description: "Python Course",
      fees: 2000,
      date: new Date (2023 ,9 ,10)
    }
  ];

  const [courseArray , setCourseArray] = useState(courses);

  const courseHandler = (course) => {
    setCourseArray([...courseArray , course]);
  };

  return (
    <div>
      <div className='new-course'>
        <CourseForm onCourse={courseHandler} />
      </div>
      <Course details={courseArray} />
    </div>
  );
}

export default App;
