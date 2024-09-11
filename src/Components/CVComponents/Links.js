
import {React, useState, useMemo} from "react";
import '../../App.css';
import './CvDesign.css';
import CVSummery from "./CVSummary.js"
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import {cvData} from "./CvData.js";

function Links() {
    const [cvLinks, setCvLinks] = useState([{ 
        linkID: 1,
        linkURL:"",
        websiteName:""
    }]);
    const cvCreated = localStorage.getItem("cvCreated")? JSON.parse(localStorage.getItem("cvCreated")):cvData;
    const linksList = cvCreated.cvLinks? cvCreated.cvLinks: cvLinks;
    const id = cvCreated.length;
    return(
        <section id="skillsForm" className="row cv-bg">
            <div  className="col-lg-6 p-lg-5">
            <lable className="form-label mb-3">Links</lable>
            <form className="form-body">
            {linksList.map((oneLink, oneIndex) => (
                <div key={oneIndex} className="form-row1 row mt-3">
                    <div className="col-sm-12 col-lg-4">
                        <label className="form-label">WebSite</label>
                        <input className="form-input form-control" type="text" value={oneLink.websiteName}  onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvLinks];
                            list.map((x, y) => y == index? x.websiteName = e.target.value: x)
                            setCvLinks(list);
                            const cvCreatedEdite = {...cvCreated, cvLinks : list.map(link => link)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <label className="form-label">URL</label>
                        <input className="form-input form-control" type="text" value={oneLink.linkURL}  onChange = { (e, index = oneIndex) => {
                            e.preventDefault();
                            const list = [...cvLinks];
                            list.map((x, y) => y == index? x.linkURL = e.target.value: x)
                            setCvLinks(list);
                            const cvCreatedEdite = {...cvCreated, cvLinks : list.map(link => link)};
                            localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                        }}/>
                    </div>
                    <div id="linksI"  className="col-sm-12 ms-auto col-lg-2 mt-4 pt-1">
                        {linksList.length> 1 && (
                            <RiDeleteBin5Line className="icon" onClick = {(e) =>{
                                e.preventDefault();
                                const list = [...linksList];
                                list.splice(oneIndex, 1);
                                setCvLinks(list);
                                const cvCreatedEdite = {...cvCreated, cvLinks : list.map(link => link)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                        {linksList.length - 1 == oneIndex && (
                            <IoIosAddCircleOutline className="icon ms-3" onClick = {(e) => {
                                e.preventDefault();
                                const list = [...linksList];
                                const newID = [linksList.length - 1].linkID + 1;
                                list.push({
                                    linkID: newID,
                                    linkURL:"",
                                    websiteName:""
                                });
                                setCvLinks(list);
                                const cvCreatedEdite = {...cvCreated, cvLinks : list.map(link => link)};
                                localStorage.setItem("cvCreated", JSON.stringify(cvCreatedEdite));
                            }}/>
                        )}
                    </div>
                </div>
            ))}
            </form>
            </div>
            <div className="col-lg-6">
                <CVSummery />
            </div>
        </section>
    )
}

export default Links;
