import React from 'react';
import classes from './Dashboard.module.css'
import profile from '../../assets/profile.jpg'

const Dashboard = () => (
    <React.Fragment>
        <nav className={classes.navbar}>
            <header><h1>DAKSHAK</h1></header>
            <div className={classes.nameID}>
                <img src={profile} alt="Profile" className={[classes.header, classes.headerImg].join(' ')} />
                <h3>Dakshak Nagrale</h3>
                <p>Founder & CEO</p>
            </div>
            <div className={classes.button}>
                <p><a href="#">Add Project</a></p>
            </div>
            <ul>
                <li className={classes.menu}>MENU</li>
                {/*<li><a className={classes.navLink} href="#dashboard">Dashboard</a></li>*/}
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">My Projects</a></li>
                <li><a href="#">My Team</a></li>
                <li><a href="#">Notifications</a></li>
                <li><a href="#">Settings</a></li>
                <li className={classes.last}><a href="#">Logout</a></li>
            </ul>
        </nav>
    </React.Fragment>
);


export default Dashboard;