
import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import CVSummery from "./CVSummary.js";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function HobbiesAndInterests() {
    const navigate = useNavigate();
    const [cvHobbies, setCvHobbies] = useState([{ hoby: ""}]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const hobbiesList = cvCreated.cvHobbies? cvCreated.cvHobbies: cvHobbies;
    const id = cvCreated.length;
    return(
        <section id="hobbiesForm">
        <div className="cv-bg row">
            <div  className="col-lg-6 p-lg-5">
            <label className="form-label mb-3">Hobbies And Interests</label>
                <form className="form-body">
                {hobbiesList.map((oneHoby, oneIndex) => (
                    <div key={oneIndex} className="mt-3 row">
                        <div className="col-9">
                            <input type="text" className="form-input form-control" value={oneHoby.hoby}  onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvHobbies];
                                list.map((x, y) => y == index? x.hoby = e.target.value: x)
                                setCvHobbies(list);
                                const cvCreatedEdite = {...cvCreated, cvHobbies : list.map(hob => hob)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        </div>
                        <div className="col-3">
                        {hobbiesList.length> 1 && (
                            <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                                e.preventDefault();
                                const list = [...hobbiesList];
                                list.splice(oneIndex, 1);
                                setCvHobbies(list);
                                const cvCreatedEdite = {...cvCreated, cvHobbies : list.map(hob => hob)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        {hobbiesList.length - 1 == oneIndex && (
                            <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                                e.preventDefault();
                                const list = [...hobbiesList];
                                list.push({hoby: ""});
                                setCvHobbies(list);
                                const cvCreatedEdite = {...cvCreated, cvHobbies : list.map(hob => hob)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        </div>
                    </div>
                    ))}
                </form>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <CVSummery />
            </div>
        </div>
            <div className="actionBtn pt-4">
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/honersandawards');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/links');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activHoby: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
            </div>
        </section>
    )
}

export default HobbiesAndInterests;
