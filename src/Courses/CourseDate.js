import React from 'react';

import './CourseDate.css';

function CourseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='course-date'>
      <div className='course-date__month'>{month}</div>
      <div className='course-date__year'>{year}</div>
      <div className='course-date__day'>{day}</div>
    </div>
  );
};

export default CourseDate;