import React from 'react';
import Card from '../UI/Card';
import "./Course.css";
import CourseDetail from "./CourseDetail";

function Course(props) {

    let courses = props.details;

    return (
        <Card className="courses">
                     
          {courses.map((course) => (
            <CourseDetail
              name={course.name}
              description={course.description}
              fees={course.fees}
              date={course.date}
            />
          ))}
        </Card>
      );
    }

export default Course;