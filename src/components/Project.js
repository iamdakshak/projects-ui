import React from 'react';
import classes from './Project.module.css';

const Project = (props) => (
    <div className={classes.card}>
        <h1>{props.projectName}</h1>
        <p><b>Client: </b>{props.clients}</p>
        <div className="startDate">
            <b>Start Date</b>
            <p>{props.startDate}</p>
        </div>
        <div className="endDate">
            <b>End Date</b>
            <p>{props.endDate}</p>
        </div>
        <div className={props.team}>
            <p><b>Team</b></p>
        </div>
    </div>
);

export default Project;