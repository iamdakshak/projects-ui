import React, { Component } from 'react';
import classes from './Project.module.css';
import projectDetails from './ProjectDetails';

class Project extends Component{
    render(){
        const projItems = projectDetails.map((item, index) => {
            const {projectName, clients, startDate, endDate, team} = item;
            return(
                <div className={classes.card} key={index}>
                    <h1>{projectName}</h1>
                    <p><b>Client: </b>{clients}</p>
                    <div className="startDate">
                        <b>Start Date</b>
                        <p>{startDate}</p>
                    </div>
                    <div className="endDate">
                        <b>End Date</b>
                        <p>{endDate}</p>
                    </div>
                    <div className={team}>
                        <p><b>Team</b></p>
                    </div>
                </div>
            );
        })
        return (
            <div className={classes.container}>{projItems}</div>
        );
    }
}

export default Project;