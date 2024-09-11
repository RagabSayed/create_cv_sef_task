import {React, useState} from "react";
import '../../App.css';
import './CvDesign.css';
import { SlCloudUpload } from "react-icons/sl";
import CVSummery from "./CVSummary.js";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function Experience() {
    const navigate = useNavigate();
    const [cvExperience, setCvExperience] = useState([{ 
        expID: 1,
        expCompanyName: "",
        expPosition: "",
        expFrom: "",
        expTo: "",
        expDescription: "",
        expCompanyLogo: ""
    }]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const exprinceList = cvCreated.cvExperience? cvCreated.cvExperience: cvExperience;
    const id = cvCreated.length;

    return(
        <section >
        <div className="cv-bg row">
            <div className="col-lg-6 p-lg-5">
            <lable className="form-label mb-3">Experience</lable>
                {exprinceList.map((oneExprince, oneIndex) => (
                <div key={oneIndex} className="mt-3">
                    <form className="form-body form-bord">
                        <div className="experience-body px-3">
                            <div className="experienceInput mt-3">
                                <lable className="form-label">Company Name</lable>
                                <input type="text" className="form-input form-control" value={oneExprince.expCompanyName}  onChange = { (e, index = oneIndex) => {
                                e.preventDefault();
                                const list = [...cvExperience];
                                list.map((x, y) => y == index? x.expCompanyName = e.target.value: x)
                                setCvExperience(list);
                                const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                            </div>
                            <div className="experienceInput mt-3">
                                <lable className="form-label">Position</lable>
                                <input type="text" className="form-input form-control" value={oneExprince.expPosition}  onChange = { (e, index = oneIndex) => {
                                    e.preventDefault();
                                    const list = [...cvExperience];
                                    list.map((x, y) => y == index? x.expPosition = e.target.value: x)
                                    setCvExperience(list);
                                    const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                    localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                                }}/>
                            </div>
                            <div className="form-row1 row mt-3">
                                <div className="col-sm-12 col-lg-6">
                                    <label className="form-label">From</label>
                                    <input className="form-input form-control" type="date" value={oneExprince.expFrom}  onChange = { (e, index = oneIndex) => {
                                        e.preventDefault();
                                        const list = [...cvExperience];
                                        list.map((x, y) => y == index? x.expFrom = e.target.value: x)
                                        setCvExperience(list);
                                        const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                                    }}/>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <label className="form-label">To</label>
                                    <input className="form-input form-control" type="date" value={oneExprince.expTo}  onChange = { (e, index = oneIndex) => {
                                        e.preventDefault();
                                        const list = [...cvExperience];
                                        list.map((x, y) => y == index? x.expTo = e.target.value: x)
                                        setCvExperience(list);
                                        const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                                    }}/>
                                </div>
                            </div>
                            <div className="row mt-3 px-2">
                                <div className="col-sm-12 col-lg-5">
                                    <label className="form-label" for="personalPhoto">Company Logo</label>
                                    <div id="experince-photo">
                                        <img src={oneExprince.expCompanyLogo} width="100%" height="100%" alt="" />
                                        <div className="befor-add-photo">
                                            <SlCloudUpload className="cloud-upload-skill"/>
                                            <p className="text-add-photo">Drag &amp; drop files or <label><input type="file" id="expCompanyLogo" accept="image/*"  
                                            onChange = { (e, index = oneIndex) => {
                                            e.preventDefault();
                                            const inputFil = document.getElementById('expCompanyLogo');
                                            const file = inputFil.files[0];
                                            const fr = new FileReader();
                                            fr.readAsDataURL(file);
                                            fr.addEventListener('load', () => {
                                                const url = fr.result;
                                                const list = [...cvExperience];
                                                list.map((x, y) => y == index? x.expCompanyLogo = url: x)
                                                setCvExperience(list);
                                                const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                                            })
                                        }}></input><span>Browse</span></label></p>
                                            <p className="support-format">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-7 mb-4" >
                                    <label className="form-label">Descreption</label>
                                    <textarea className="form-input form-control" type="text" rows="7" value={oneExprince.expDescription}  onChange = { (e, index = oneIndex) => {
                                        e.preventDefault();
                                        const list = [...cvExperience];
                                        list.map((x, y) => y == index? x.expDescription = e.target.value: x)
                                        setCvExperience(list);
                                        const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                                    }}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="d-flex justify-content-end mt-3">
                        {exprinceList.length > 1 && (
                            <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                                e.preventDefault();
                                const list = [...exprinceList];
                                list.splice(oneIndex, 1);
                                setCvExperience(list);
                                const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        {exprinceList.length - 1 == oneIndex && (
                            <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                                e.preventDefault();
                                const newID = [exprinceList.length - 1].expID + 1;
                                const list = [...exprinceList];
                                list.push({
                                            expID: newID,
                                            expCompanyName:"",
                                            expPosition:"",
                                            expFrom:"",
                                            expTo:"",
                                            expDescription:"",
                                            expCompanyLogo:""
                                        });
                                setCvExperience(list);
                                const cvCreatedEdite = {...cvCreated, cvExperience : list.map(ex => ex)};
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
                    navigate('/skills');
                    }}>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" onClick={ (e)=> {
                    e.preventDefault();
                    navigate('/education');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activExpr: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                    }}>CONTAINUE</button>
            </div>
        </section>
    )
}

export default Experience;
