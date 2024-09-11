import {React, useRef} from "react";
import '../../App.css';
import './CvDesign.css';
import {cvData} from "./CvData.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function CVSummery() {
    const navigate = useNavigate();
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const savedSkills = cvCreated.cvSkills? cvCreated.cvSkills: [];
    const savedExperience = cvCreated.cvExperience? cvCreated.cvExperience: [];
    const savedEducation = cvCreated.cvEducation? cvCreated.cvEducation: [];
    const savedHonorAndAwards = cvCreated.cvHonorAndAwards? cvCreated.cvHonorAndAwards: [];
    const savedHobbies = cvCreated.cvHobbies? cvCreated.cvHobbies: [];
    const savedLinks = cvCreated.cvLinks? cvCreated.cvLinks: [];
    const id = cvCreated.length;
    const pdfRef = useRef();
    const location = useLocation();
    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save(`${cvCreated.cvFirstName}-CV.pdf`);
        })
        const activComponent = JSON.parse(localStorage.getItem("activCompon"));
        const yyy = {...activComponent, activLink: true}
        localStorage.setItem("activCompon", JSON.stringify(yyy));
    }
    // console.log(cvCreated[0].cvFirstName)
        return(
            <section className="my-5">
                <div className="formCv row mx-lg-4" ref={pdfRef} >
                    <div className="cvProfile col-lg-4 px-3 py-5">
                        <img className="cvImg" src = {cvCreated.cvPersonalPhoto} alt=""/>
                        <div className="cvName">
                            <h3><span className="xxx">{cvCreated.cvFirstName}</span>
                            <span>&nbsp;</span>
                            <span>{cvCreated.cvLastName}</span></h3>
                            <p>{cvCreated.cvProfession}</p>
                        </div>
                        <div className="cvInput my-2"></div>
                        <div className="cvInput my-2">{cvCreated.cvMobileNumber}</div>
                        <div className="cvInput my-2">{cvCreated.cvEmail}</div>
                        <div className="cvInput my-2"> 
                            <span className="cvinput-sp">{cvCreated.cvCity}</span>
                            <span className="cvinput-sp">{cvCreated.cvCity?',':""}</span>
                            <span className="cvinput-sp">{cvCreated.cvCountry}</span>
                        </div>
                        <div className="cvSkills">
                            <h4>Skills</h4>
                            <ul>
                                {savedSkills.map(sk => <li>{sk.skill}</li>)}
                            </ul>
                        </div>
                        <div className="hon-award">
                            <h4>Honor & Award</h4>
                            {savedHonorAndAwards.map(award => (
                            <div className="row">
                                <p className="p-desc tex-ali1 col-lg-8">{award.cvAwardName}</p>
                                <p className="p-desc tex-ali col-lg-4">{award.cvAeardYear}</p>
                                <p className="">{award.cvAwardDesc}</p>
                            </div>
                            ))}
                        </div>
                        <div className="hob-inter">
                            <h4>Hobbies &Interest</h4>
                            <ul>
                                {savedHobbies.map(hoby => <li>{hoby.hoby}</li>)}
                            </ul>
                        </div>
                        <div className="formIcon">
                            <h4>Links and credentials</h4>
                            <ul>
                                {savedLinks.map(link => <li><a className="text-light" href= {`${link.linkURL}`}>{link.websiteName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="cvInformation col-lg-8 p-5">
                        <div className="abour-data">
                            <h4>About</h4>
                            <p className="line"></p>
                            <p className="cvText">{cvCreated.cvAbout}</p>
                        </div>
                        <div className="educ-data">
                            <h4>Education</h4>
                            <p className="line"></p>
                            {savedEducation.map(ed => (
                            <div className="row educ-date">
                                <div className="col-lg-3">
                                    <span>{ed.eduFrom}</span>
                                    <span>{ed.eduTo? " - ": ""}</span>
                                    <span>{ed.eduTo}</span>
                                </div>
                                <div className="col-lg-9 educ-detail">
                                    <h6 className="fw-bold">{ed.eduOrganizationName}</h6>
                                    <strong>{ed.eduDegree}</strong>
                                    <p className="cvText">{ed.eduDescription}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="exp-data">
                            <h4>Experience</h4>
                            <p className="line"></p>
                            {savedExperience.map(ex => (
                            <div className="row">
                                <div className="col-lg-3 ex-img">
                                    <img src= {ex.expCompanyLogo} alt="" width="100%"/>
                                </div>
                                <div className="col-lg-9 exp-detail">
                                    <h5 className="fw-bold">{ex.expCompanyName}</h5>
                                    <div>
                                        <span>{ex.expPosition}</span>
                                        <span>{ex.expFrom? " | ": ""}</span>
                                        <span>{ex.expFrom}</span>
                                        <span>{ex.expTo? " - ": ""}</span>
                                        <span>{ex.expTo}</span>
                                    </div>
                                    <p className="cvText">{ex.expDescription}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="summery-btn mt-4 row justify-content-between" style = {{display: location.pathname == '/links'? 'flex': 'none'}}>
                    <div className="col-6 col-lg-3">
                        <button className="non-activ-btn btn btn-secondary me-3 btn-lg" onClick={ (e)=> {
                        e.preventDefault();
                        navigate('/hobbiesandinterests');
                        }}>BACK</button>
                    </div>
                    <div className="col-6 col-lg-3">
                         <button className="activ-btn btn btn-warning btn-lg" onClick={downloadPDF}>DOWNLAOD</button>
                    </div>
               
                </div>
            </section>
        )
    // })}
}

export default CVSummery ;