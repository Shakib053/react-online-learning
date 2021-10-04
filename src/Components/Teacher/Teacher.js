import React from 'react';

const Teacher = (props) => {
    const { name, designation, experience, age, img } = props.teacher;
    return (
        <div className="m-3 p-3 bg-light col border border-dark d-flex  align-items-center">
            <div className="w-50" >
                <img src={img} className="img-fluid" style={{ height: "200px", width: "300px" }} alt="" />
            </div>
            <div>
                <h3>Name : {name}</h3>
                <h4>Age : {age}</h4>
                <h5>Designation : {designation}</h5>
                <p>Experience : {experience}</p>
            </div>
        </div>
    );
};

export default Teacher;