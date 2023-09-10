import "./CourseDetail.css";
import { React, useState } from "react";
import Card from "../UI/Card";
import CourseDate from "./CourseDate";


function CourseDetail(props) {

    const [fees, setFees] = useState(props.fees);
    const [date, setDate] = useState(props.date);
    const [name, setName] = useState(props.name);
    const [description, setDescription] = useState(props.description);

    return (
        <Card className="course-detail">
                <CourseDate date={date} />
            <div className="course-name">
                <div>{name}</div>
                <div className="course-description">{description}</div>
            </div>
            <div className="course-fees">
                <div>Rs. {fees}</div>
            </div>
        </Card>
    );
}

export default CourseDetail;
