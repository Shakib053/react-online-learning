import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="d-flex justify-content-center row">
            <h3>Our Most Popular Courses</h3>
            {
                Courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Services;