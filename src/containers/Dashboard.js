import React from 'react';
import classes from './Dashboard.module.css'
import profile from '../assets/profile.jpg'

const Dashboard = () => (
    <React.Fragment>
        <nav className={classes.navbar}>
            <header><h1>DAKSHAK</h1></header>
            <div className={classes.nameID}>
                <img src={profile} className={[classes.header, classes.headerImg].join(' ')} />
                <h3>Dakshak Nagrale</h3>
                <p>Founder & CEO</p>
            </div>
            <div className={classes.button}>
                <p><a href="#">Add Project</a></p>
            </div>
            <ul>
                <li className={classes.menu}>MENU</li>
                {/*<li><a className={classes.navLink} href="#dashboard">Dashboard</a></li>*/}
                <li>Dashboard</li>
                <li>My Projects</li>
                <li>My Team</li>
                <li>Notifications</li>
                <li>Settings</li>
                <li className={classes.last}>Logout</li>
            </ul>
        </nav>
    </React.Fragment>
);


export default Dashboard;