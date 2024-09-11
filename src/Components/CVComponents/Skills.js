import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import CVSummery from "./CVSummary.js"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function Skills() {
    const navigate = useNavigate();
    const [cvSkills, setCvSkills] = useState([{ skill: ""}]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const SkillsList = cvCreated.cvSkills? cvCreated.cvSkills: cvSkills;
    const id = cvCreated.length;

    return(
        <section id="skillsForm">
        <div className="cv-bg row">
            <div  className="col-lg-6 p-lg-5">
            <form className="form-body">
                <div className="skillsInput mt-3 row">
                    <label className="form-label">Skills</label>
                    {SkillsList.map((oneSkill, oneIndex) => (
                    <div key={oneIndex} className="skillsInput mt-3 row">
                        <div className="col-lg-10 col-9">
                            <input type="text" className="form-input form-control" value={oneSkill.skill}  onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvSkills];
                                list.map((x, y) => y == index? x.skill = e.target.value: x)
                                setCvSkills(list);
                                const cvCreatedEdite = {...cvCreated, cvSkills : list.map(sk => sk)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        </div>
                        <div className="col-3 col-lg-2">
                        {SkillsList.length> 1 && (
                            <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                                e.preventDefault();
                                const list = [...SkillsList];
                                list.splice(oneIndex, 1);
                                setCvSkills(list);
                                const cvCreatedEdite = {...cvCreated, cvSkills : list.map(sk => sk)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        {SkillsList.length - 1 == oneIndex && (
                            <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                                e.preventDefault();
                                const list = [...SkillsList];
                                list.push({skill: ""});
                                setCvSkills(list);
                                const cvCreatedEdite = {...cvCreated, cvSkills : list.map(sk => sk)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        </div>
                    </div>
                    ))}
                </div>
            </form>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <CVSummery />
            </div>
        </div>
            <div className="actionBtn pt-4">
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/about');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/experience');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activSkill: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
                </div>
        </section>
    )
}

export default Skills;
