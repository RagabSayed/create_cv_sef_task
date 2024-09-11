
import {React, useState} from "react";
import '../../App.css';
import './CvDesign.css';
import CVSummery from "./CVSummary.js";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function HonersAndAwards() {
    const navigate = useNavigate();
    const [cvHonorAndAwards, setCvHonorAndAwards] = useState([{ 
        awID: 1,
        cvAwardName:"",
        cvAeardYear:"",
        cvAwardDesc:""
    }]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const honorAndAwardsList = cvCreated.cvHonorAndAwards? cvCreated.cvHonorAndAwards: cvHonorAndAwards;
    const id = cvCreated.length;
    
    return(
        <section id="aboutForm">
        <div className="cv-bg row">
            <div className="col-lg-6 p-lg-5">
            <lable className="form-label mb-3">Honers & Awards</lable>
            {honorAndAwardsList.map((oneHonAwrd, oneIndex) => (
            <div key={oneIndex} className="mt-3">
                <form className="form-body form-bord">
                    <div  className="form-row1 row mt-3 mx-3">
                        <div className="col-sm-12 col-lg-8">
                            <label className="form-label">Award Name</label>
                            <input className="form-input form-control" type="text" value={oneHonAwrd.cvAwardName} onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvHonorAndAwards];
                                list.map((x, y) => y == index? x.cvAwardName = e.target.value: x)
                                setCvHonorAndAwards(list);
                                const cvCreatedEdite = {...cvCreated, cvHonorAndAwards : list.map(awrd => awrd)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <label className="form-label">Year</label>
                            <input className="form-input form-control" type="number" value={oneHonAwrd.cvAeardYear} onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvHonorAndAwards];
                                list.map((x, y) => y == index? x.cvAeardYear = e.target.value: x)
                                setCvHonorAndAwards(list);
                                const cvCreatedEdite = {...cvCreated, cvHonorAndAwards : list.map(awrd => awrd)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        </div>
                    </div>
                    <div className="mx-3 mt-3 mb-4">
                        <label className="form-label">Descreption</label>
                        <textarea className="form-input form-control" type="text" rows="3" value={oneHonAwrd.cvAwardDesc} onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvHonorAndAwards];
                                list.map((x, y) => y == index? x.cvAwardDesc = e.target.value: x)
                                setCvHonorAndAwards(list);
                                const cvCreatedEdite = {...cvCreated, cvHonorAndAwards : list.map(awrd => awrd)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}></textarea>
                    </div>
                </form>
                <div className="d-flex justify-content-end mt-3">
                {honorAndAwardsList.length > 1 && (
                    <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                        e.preventDefault();
                        const list = [...honorAndAwardsList];
                        list.splice(oneIndex, 1);
                        setCvHonorAndAwards(list);
                        const cvCreatedEdite = {...cvCreated, cvHonorAndAwards : list.map(awrd => awrd)};
                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                    }}/>
                )}
                {honorAndAwardsList.length - 1 == oneIndex && (
                    <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                        e.preventDefault();
                        const newID = [honorAndAwardsList.length - 1].awID + 1;
                        const list = [...honorAndAwardsList];
                        list.push({
                                    awID: newID,
                                    cvAwardName:"",
                                    cvAeardYear:"",
                                    cvAwardDesc:""
                                });
                        setCvHonorAndAwards(list);
                        const cvCreatedEdite = {...cvCreated, cvHonorAndAwards : list.map(awrd => awrd)};
                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                    }}/>
                )}
                </div>
            </div>
            ))}
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <CVSummery />
            </div>
        </div>
            <div className="actionBtn pt-4">
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={(e)=> {
                    e.preventDefault();
                    navigate('/education');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/hobbiesandinterests');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activHonr: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
            </div>
        </section>
    )
}

export default HonersAndAwards;
