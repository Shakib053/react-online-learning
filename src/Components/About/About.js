import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [Teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);
    console.log(Teachers);
    return (
        <div>
            <h1>Welcome To  <span className="text-warning">Hajee Mohammod Mohsin </span> Academy</h1>
            <h5 className="my-5">Welcome to Hajee Mohammod Mohsin Academy collection of world-class online learning opportunities. The Hajee Mohammod Mohsin Online Learning portal provides a gateway for the public to access Educamp’s extensive learning content.</h5>

            <h2 className="text-success my-3"><b>Some of Our Instructors</b></h2>
            <div className="row-cols-12 g-4">
                {
                    Teachers.map(teacher => <Teacher teacher={teacher}></Teacher>)
                }
            </div>

            <div className="bg-info d-flex p-5 mx-4 justify-content-around">
                <h5>Students : <span className="text-dark">2245</span></h5>
                <h5>Courses : <span className="text-dark">145</span></h5>
                <h5>Ratings : <span className="text-dark">2752</span></h5>
                <h5>Projects : <span className="text-dark">1724</span></h5>

            </div>
        </div>
    );
};

export default About;