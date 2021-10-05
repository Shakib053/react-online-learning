import React from 'react';
import img1 from './tourism.jpg';
import img2 from './bootcamp.jpg';
const Events = () => {
    return (
        <div>
            <h1>Upcoming Events</h1>
            <div className="my-5 d-flex border border-dark align-items-center">
                <img src={img1} className="w-50 border-3 border border-secondary" alt="" srcset="" />
                <div className="px-5">
                    <h3>Annual Online Programming Contest</h3>
                    <h6>Date : 12/12/2021</h6>
                    <h6>Time : 17:50</h6>
                    <small>Duration : <span className="text-warning"><strong>3 Hours</strong></span></small>
                    <p>A programming competition generally involves the host presenting a set of logical or mathematical problems, also known as puzzles, to the contestants (who can vary in number from tens to several thousands), and contestants are required to write computer programs capable of solving each problem. Judging is based mostly upon number of problems solved and time spent for writing successful solutions, but may also include other factors.</p>
                </div>
            </div>


            <div className="my-5 d-flex border border-dark align-items-center">
                <img src={img2} className="w-100 border-3 border border-secondary" alt="" srcset="" />
                <div className="px-5">
                    <h3>Performance Analysis through Coding bootcamp</h3>
                    <h6>Date 23/11/2021: </h6>
                    <h6>Time : 17:50</h6>
                    <small>Duration : <span className="text-warning"> <strong>3 Days</strong></span></small>
                    <p>Coding bootcamps offer intensive training programs — which stack up competitively against bachelor's degrees — for professionals who want to break into the technology sector. To help students determine the best coding bootcamps for positive career outcomes, Switchup gathered data from Burning Glass Technologies, a software analytics company. Bootcamps were ranked by the percentage of alumni employed in their field of study within a year of graduating.</p>
                </div>
            </div>
        </div>
    );
};

export default Events;