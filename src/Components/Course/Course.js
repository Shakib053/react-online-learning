import React from 'react';

const Course = (props) => {
    const { name, instructor, rating, review, img, type } = props.course;
    return (
        <div className="m-3 p-3 bg-light col border border-dark d-flex align-items-center">
            <div className="w-50" >
                <img src={img} className="" style={{ height: "200px", width: "250px" }} alt="" />
            </div>
            <div className="p-2">
                <h4>Course Name : <strong>{name} </strong></h4>
                <h6>Course Instructor : <b>{instructor}</b> </h6>
                <p>Rating : <span className="text-primary"> {rating}</span></p>
                <p>Reviewed By : <span className="text-warning "> <strong>{review}</strong></span></p>
                <h5>Course Fee : <span className="text-primary"><strong>{type}</strong></span></h5>
            </div>

        </div>
    );
};

export default Course;