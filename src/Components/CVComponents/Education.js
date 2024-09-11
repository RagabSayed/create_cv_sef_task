import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import CVSummery from "./CVSummary.js";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function Education() {
    const navigate = useNavigate();
    const [cvEducation, setCvEducation] = useState([{ 
        eduID: 1,
        eduOrganizationName:"",
        eduDegree:"",
        eduFrom:"",
        eduTo:"",
        eduDescription:""
    }]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const educationList = cvCreated.cvEducation? cvCreated.cvEducation: cvEducation;
    const id = cvCreated.length;
    return(
        <section>
        <div className="cv-bg row">
            <div className="col-lg-6 p-lg-5">
            <lable className="form-label mb-3">Education</lable>
            {educationList.map((oneEducation, oneIndex) => (
            <div key={oneIndex} className="mt-3">
                <form className="form-body form-bord">
                    <div className="mt-3 mx-3">
                        <lable className="form-label">Organisation Name</lable>
                        <input type="text" className="form-input form-control" value={oneEducation.eduOrganizationName} onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvEducation];
                            list.map((x, y) => y == index? x.eduOrganizationName = e.target.value: x)
                            setCvEducation(list);
                            const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                    </div>
                    <div className="mt-3 mx-3">
                        <lable className="form-label">Degree</lable>
                        <input type="text" className="form-input form-control" value={oneEducation.eduDegree} onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvEducation];
                            list.map((x, y) => y == index? x.eduDegree = e.target.value: x)
                            setCvEducation(list);
                            const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                    </div>
                    <div className="form-row1 row mt-3 mx-3">
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label">From</label>
                            <input className="form-input form-control" type="number" value={oneEducation.eduFrom} onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvEducation];
                            list.map((x, y) => y == index? x.eduFrom = e.target.value: x)
                            setCvEducation(list);
                            const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label">To</label>
                            <input className="form-input form-control" type="number" value={oneEducation.eduTo} onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvEducation];
                            list.map((x, y) => y == index? x.eduTo = e.target.value: x)
                            setCvEducation(list);
                            const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                        </div>
                    </div>
                    <div className="mt-3 mx-3 mb-4">
                        <label className="form-label">Descreption</label>
                        <textarea className="form-input form-control" type="text" rows="5" value={oneEducation.eduDescription} onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvEducation];
                            list.map((x, y) => y == index? x.eduDescription = e.target.value: x)
                            setCvEducation(list);
                            const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}></textarea>
                    </div>
                </form>
                <div className="d-flex justify-content-end mt-3">
                {educationList.length > 1 && (
                    <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                        e.preventDefault();
                        const list = [...educationList];
                        list.splice(oneIndex, 1);
                        setCvEducation(list);
                        const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                    }}/>
                )}
                {educationList.length - 1 == oneIndex && (
                    <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                        e.preventDefault();
                        const newID = [educationList.length - 1].eduID + 1;
                        const list = [...educationList];
                        list.push({
                                    eduID: newID,
                                    eduOrganizationName:"",
                                    eduDegree:"",
                                    eduFrom:"",
                                    eduTo:"",
                                    eduDescription:""
                                });
                        setCvEducation(list);
                        const cvCreatedEdite = {...cvCreated, cvEducation : list.map(ed => ed)};
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
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/experience');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/honersandawards');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activEduc: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
            </div>
        </section>
    )
}

export default Education;
