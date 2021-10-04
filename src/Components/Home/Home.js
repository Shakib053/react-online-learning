import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import banner from '../../banner.jpg';
import {
    Link
} from "react-router-dom";

const Home = () => {
    const [Courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    const newCourses = Courses.slice(0, 4);
    return (
        <div className="d-flex justify-content-center row">

            <img src={banner} className="w-100 my-4" alt="" srcset="" />
            <h3>Discover Our Popular Courses</h3>
            {
                newCourses.map(course => <Course course={course}></Course>)
            }

            <Link to='/services'>See More Courses</Link>
        </div>
    );
};

export default Home;