import React, { useState } from 'react';
import "./CourseForm.css";

const CourseForm = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredFees, setEnteredFees] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onCourse = props.onCourse;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const feesChangeHandler = (event) => {
    setEnteredFees(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();

    const courseData = {
      name: enteredName,
      description: enteredDescription,
      fees: enteredFees,
      date: new Date(enteredDate)
    };
    onCourse(courseData);
  };

  return (
    <form onSubmit={submithandler}>

      <div className='new-course__controls'>

        <div className='new-course__control'>
          <label>Name</label>
          <input type='text' onChange={nameChangeHandler} />
        </div>

        <div className='new-course__control'>
          <label>Description</label>
          <input type='text' onChange={descriptionChangeHandler} />
        </div>

        <div className='new-course__control'>
          <label>Fees</label>
          <input type='number' onChange={feesChangeHandler} />
        </div>

        <div className='new-course__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' onChange={dateChangeHandler} />
        </div>

      </div>

      <div className='new-course__actions'>
        <button type="submit">Add Course</button>
      </div>

    </form>
  );
};

export default CourseForm;