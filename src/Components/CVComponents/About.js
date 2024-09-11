import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import CVSummery from "./CVSummary.js";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const [cvAbout, setCvAbout] = useState("");
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const id = cvCreated.length;
    return(
        <section>
        <div className="cv-bg row">
            <div className="col-lg-6 p-lg-5">
            <form className="form-body">
                <div className="col-sm-12">
                    <label className="form-label" for="articleContent">About</label>
                    <textarea className="form-input form-control" type="text" rows="15" id="articleContent" name="cvAbout" value={cvCreated.cvAbout} 
                    onChange = {useMemo(() => (e) => {e.preventDefault();
                        setCvAbout(e.target.value);
                        const cvCreatedEdite = {...cvCreated, cvAbout : e.target.value};
                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvAbout])}></textarea>
                </div>
            </form>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <CVSummery/>
            </div>
        </div>
            <div className="actionBtn pt-4">
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/maininformation');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/skills');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activAbout: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
            </div>
        </section>
    )
}

export default About;

