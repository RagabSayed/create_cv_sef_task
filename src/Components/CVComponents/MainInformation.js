import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import { SlCloudUpload } from "react-icons/sl";
import CVSummery from "./CVSummary.js";
import {cvData} from "./CvData.js";
import {useNavigate} from "react-router-dom";

function MainInformation() {
    const navigate = useNavigate();
    const [cvFirstName, setCvFirstName] = useState("") ;
    const [cvLastName, setCvLastName] = useState("");
    const [cvProfession, setCvProfession] = useState("");
    const [cvCountry, setCvCountry] = useState("");
    const [cvCity, setCvCity] = useState("");
    const [cvMobileNumber, setCvMobileNumber] = useState("");
    const [cvEmail, setCvEmail] = useState(""); 
    const [cvPersonalPhoto, setCvPersonalPhoto] = useState("");
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    // const [cvCreatedEdit, setCvCreatedEdit] = useState([cvCreated]);
    const cvID = cvCreated.length;
    const id = cvCreated.length;
    return(
        <section>
        <div className="cv-bg row">
            <div className="col-lg-6 p-lg-5">
                <form className="form-body" autocomplete="off">
                    <div className="form-row1 row mt-lg-3">
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label" for="firstName">First Name</label>
                            <input className="form-input form-control" type="text" name="cvFirstName" value={cvCreated.cvFirstName} onChange = {useMemo(() => (f) => {
                                f.preventDefault()
                                setCvFirstName(f.target.value);
                                const cvCreatedEdite = {...cvCreated, cvFirstName : f.target.value}
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite))},[cvFirstName])}/>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label" for="lastName">Last Name</label>
                            <input className="form-input form-control" type="text" name="cvLastName" value={cvCreated.cvLastName} onChange={useMemo(() => (l)=> {
                                l.preventDefault();
                                const xx = JSON.parse(localStorage.getItem("cvCreated"));
                                setCvLastName(l.target.value);
                                const cvCreatedEdite = {...xx, cvLastName : l.target.value};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvLastName])}/>
                        </div>
                    </div>
                    <div className="form-row1 row mt-3">
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label" for="cvProfession">Profession</label>
                            <input className="form-input form-control" type="text" name="cvProfession" value={cvCreated.cvProfession} onChange={useMemo(() => (pr)=> {
                            pr.preventDefault();
                            const xx = JSON.parse(localStorage.getItem("cvCreated"));
                            setCvProfession(pr.target.value)
                            const cvCreatedEdite = {...xx, cvProfession : pr.target.value};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvProfession])}/>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <label className="form-label" for="cvCountry">Country</label>
                            <input className="form-input form-control" type="text" name="cvCountry" value={cvCreated.cvCountry} onChange={useMemo(() => (co)=> {
                            co.preventDefault();
                            const xx = JSON.parse(localStorage.getItem("cvCreated"));
                            setCvCountry(co.target.value)
                            const cvCreatedEdite = {...xx, cvCountry : co.target.value};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvCountry])}/>
                        </div>
                    </div>
                    <div className="form-row1 row mt-3">
                        <div className="col-sm-12 col-lg-4">
                            <label className="form-label" for="cvCity">City</label>
                            <input className="form-input form-control" type="text" name="cvCity" value={cvCreated.cvCity} onChange={useMemo(() => (ci)=> {
                            ci.preventDefault();
                            const xx = JSON.parse(localStorage.getItem("cvCreated"));
                            setCvCity(ci.target.value)
                            const cvCreatedEdite = {...xx, cvCity : ci.target.value};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvCity])}/>
                        </div>
                        <div className="col-sm-12 col-lg-8">
                            <label className="form-label" for="cvMobileNumber">Mobile Number</label>
                            <input className="form-input form-control" type="text" name="cvMobileNumber" value={cvCreated.cvMobileNumber} onChange={useMemo(() => (m)=> {
                            m.preventDefault();
                            const xx = JSON.parse(localStorage.getItem("cvCreated"));
                            setCvMobileNumber(m.target.value)
                            const cvCreatedEdite = {...xx, cvMobileNumber : m.target.value};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvMobileNumber])}/>
                        </div>
                    </div>
                    <div className="form-row1 row mt-3">
                        <div className="col-sm-12">
                            <label className="form-label" for="email">Email</label>
                            <input className="form-input form-control" type="email" name="email" value={cvCreated.cvEmail} onChange={useMemo(() => (em)=> {
                            em.preventDefault();
                            const xx = JSON.parse(localStorage.getItem("cvCreated"));
                            setCvEmail(em.target.value)
                            const cvCreatedEdite = {...xx, cvEmail : em.target.value};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));},[cvEmail])}/>
                        </div>
                    </div>
                    <div className="row mt-3 d-flex align-items-center">
                        <div className="col-sm-12">
                            <label className="form-label" for="personalPhoto">Personal Photo</label>
                            <div className="personal-photo">
                                <img src={cvCreated.cvPersonalPhoto} width="250" height="250" alt="" className="mx-auto" 
                                    style={{display: cvPersonalPhoto?  'block': 'none'}}/> 
                                <div className="befor-add-photo" style={{display: cvPersonalPhoto? 'none': 'block'}}>
                                    <SlCloudUpload className="cloud-upload"/>
                                    <p className="text-add-photo">Drag &amp; drop files or <label><input type="file" id="personalAddPhoto" accept="image/*" onChange={useMemo(() => (em)=> {
                                    em.preventDefault();
                                    const inputFil = document.getElementById('personalAddPhoto');
                                    const file = inputFil.files[0];
                                    const fr = new FileReader();
                                    fr.readAsDataURL(file);
                                    fr.addEventListener('load', () => {
                                        const url = fr.result;
                                         setCvPersonalPhoto(url)
                                         const xx = JSON.parse(localStorage.getItem("cvCreated"));
                                        const cvCreatedEdite = {...xx, cvPersonalPhoto : url};
                                        localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite))
                                    })
                                    ;},[cvPersonalPhoto])}
                                    ></input><span>Browse</span></label></p>
                                    <p className="support-format">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <CVSummery/>
            </div>
        </div>
            <div className="actionBtn pt-4">
                <button className="non-activ-btn btn btn-secondary me-3 btn-lg" disabbled>BACK</button>
                <button className="activ-btn btn btn-warning btn-lg" to='about' onClick={useMemo(() => (e)=> {
                    e.preventDefault();
                    navigate('/about');
                    const activComponent = JSON.parse(localStorage.getItem("activCompon"));
                    const yyy = {...activComponent, activMain: true}
                    localStorage.setItem("activCompon", JSON.stringify(yyy));
                },[])}>CONTAINUE</button>
            </div>
        </section>
    )
}
export default MainInformation ;

