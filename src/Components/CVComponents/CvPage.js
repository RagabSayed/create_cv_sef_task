import {React, useState} from "react";
import '../../App.css';
import './CvDesign.css';
import {NavLink, Outlet} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function CvPage() {
    const location = useLocation();
    const locPath = location.pathname;
    const activCompon = JSON.parse(localStorage.getItem("activCompon"));
    const mainActiv = locPath == '/maininformation'? true: activCompon.activMain;
    const aboutActiv = locPath == '/about'? true: activCompon.activAbout;
    const skillActiv = locPath == '/skills'? true: activCompon.activSkill;
    const experActiv = locPath == '/experience'? true: activCompon.activExpr;
    const educActiv = locPath == '/education'? true: activCompon.activEduc;
    const honerActiv = locPath == '/honersandawards'? true: activCompon.activHonr;
    const hobyActiv = locPath == '/hobbiesandinterests'? true: activCompon.activHoby;
    const linkActiv = locPath == '/links'? true: activCompon.activLink;
    return(
        <section>
            <div className="cvTitle">
                <h2>Customize Your CV</h2>
                <p>Here you can create your CV by answering question and getting it<br/>ready for download or applying to jobs throgh the platform.</p>
            </div>
            <div className="cv-nav-group pt-5 pb-1 mb-5">
                <nav className="cv-nav mx-4">
                    <div className="cv-nav-content" style ={{display:(locPath=='/experience'||locPath=='/education'||locPath=='/honersandawards'
                    ||locPath=='/hobbiesandinterests'||locPath=='/links')? 'none': 'flex'}}>
                        <NavLink className="cv-nav-item me-4" to="maininformation">
                        <span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: mainActiv? '#E4A11B': '#16151580'}}>1</span>main Information</NavLink>
                    </div>
                    <div className="cv-nav-content" style={{display:(locPath=='/education'||locPath=='/honersandawards'||locPath=='/hobbiesandinterests'
                    ||locPath=='/links')? 'none': 'flex'}}>
                        <NavLink className="cv-nav-item me-4" to="about"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: aboutActiv? '#E4A11B': '#16151580'}}>2</span>about</NavLink>
                    </div>
                    <div className="cv-nav-content" style={{display:(locPath=='/honersandawards'||locPath=='/hobbiesandinterests'||locPath=='/links')? 'none': 'flex'}}>
                        <NavLink className="cv-nav-item me-4" to="skills"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: skillActiv? '#E4A11B': '#16151580'}}>3</span>skills</NavLink>
                    </div>
                    <div className="cv-nav-content">
                        <NavLink className="cv-nav-item me-4" to="experience"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: experActiv? '#E4A11B': '#16151580'}}>4</span>experience</NavLink>
                    </div>
                    <div className="cv-nav-content">
                        <NavLink className="cv-nav-item me-4" to="education"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: educActiv? '#E4A11B': '#16151580'}}>5</span>education</NavLink>
                    </div>
                    <div className="cv-nav-content" style={{display:(locPath=='/experience'||locPath=='/education'||locPath=='/honersandawards'
                    ||locPath=='/hobbiesandinterests'||locPath=='/links')? 'flex': 'none'}}>
                        <NavLink className="cv-nav-item me-4" to="honersandawards"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: honerActiv? '#E4A11B': '#16151580'}}>6</span>honers and awards</NavLink>
                    </div>
                    <div className="cv-nav-content" style={{display:(locPath=='/education'||locPath=='/honersandawards'||locPath=='/hobbiesandinterests'
                    ||locPath=='/links')? 'flex': 'none'}}>
                        <NavLink className="cv-nav-item me-4" to="hobbiesandinterests"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: hobyActiv? '#E4A11B': '#16151580'}}>7</span>hobbies and interests</NavLink>
                    </div>
                    <div className="cv-nav-content" style={{display:(locPath=='/honersandawards'||locPath=='/hobbiesandinterests'||locPath=='/links')? 'flex': 'none'}}>
                        <NavLink className="cv-nav-item me-4" to="links"><span className="btn btn-outline-warning me-4 text-light fs-2 fw-bold btn-tab" style={
                            {backgroundColor: linkActiv? '#E4A11B': '#16151580'}}>8</span>links</NavLink>
                    </div>
                </nav>
                <Outlet/>
            </div>
    </section>
    )
}

export default CvPage;