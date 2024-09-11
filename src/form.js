
// import { WiCloudUp } from "react-icons/wi";
// import { LiaLinkedinIn } from "react-icons/lia";
// import { FaGithub } from "react-icons/fa";
// import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { IoAdd } from "react-icons/io5";
// const[User, setUser]= useState(
//     {
//       first:"",
//       last:"",
//       profession:"",
//       counntry:"",
//       city:"",
//       mobileNumber:"",
//       email:"",
//       personalPhoto:"",
//       about:"",
//       skills:"",
//       hobbis:"",
//       companyName:"",
//       position:"",
//       from:"",
//       to:"",
//       description:"",
//       awardsName:"",
//       year:"",
//       awardsDesc:"",
//       url:"",
//       websiteName:""
//     })useStauseState
// <div className="cvForm">
//       <div id="overlayCv"></div>
      
//       <div className="headerContinue">
//         <h3 >1</h3>
//         <p id="h1Con">MAIN INFORMATION </p>
//         <h3>2</h3>
//         <p>SUMMARY</p>
//         <h3>3</h3>
//         <p>SKILLS</p>
//         <h3>4</h3>
//         <p>EXPERIENCE</p>
//         <h3>5</h3>
//         <p>EDUCATION</p>
//       </div>
//       <div className="form">
//         <div className="formInput">
//           <div id="formName">
//               <form>
//                 <lable>First Name</lable>
//                 <input type="text" placeholder="First Name" value={User.first} onChange={(e) => setUser({ ...User, first: e.target.value })} />
//               </form>
//               <form>
//                 <lable>Last Name</lable>
//                 <input type="text" placeholder="Last Name" value={User.last} onChange={(e) => setUser({ ...User, last: e.target.value })} />
//               </form>
//           </div>
//             <div id="formName">
//               <form>
//                 <lable>Profession</lable>
//                 <input type="text" placeholder="Profession" value={User.profession} onChange={(e) => setUser({ ...User, profession: e.target.value })} />
//               </form>
//               <form>
//                 <lable>Counntry</lable>
//                 <input type="text" placeholder="Counntry" value={User.counntry} onChange={(e) => setUser({ ...User, counntry: e.target.value })} />
//               </form>
//             </div>
//             <div id="formNum">
//               <form id="City">
//                 <lable>City</lable>
//                 <input type="text" placeholder="City" value={User.city} onChange={(e) => setUser({ ...User, city: e.target.value })} />
//               </form>
//               <form id="mobilNum">
//                 <lable>Mobile Number</lable>
//                 <input type="text" placeholder="Mobile Number" value={User.mobileNumber} onChange={(e) => setUser({ ...User, mobileNumber: e.target.value })} />
//               </form>
//             </div>
//             <div id="formEmail">
//               <form id="email">
//                 <lable>Email</lable>
//                 <input type="text" placeholder="Email" value={User.email} onChange={(e) => setUser({ ...User, Email: e.target.value })} />
//               </form>
//             </div>
//             <div className="ImageDrop">
//               <p>personalPhoto</p>
//               <div className="actionImage">
//                 <WiCloudUp id="cloudIcon" />
//                 <b> Drag & drop files or</b>
//                 <p> Supported formates: JPEG. PNG. GIF. MP4. PDF. PSD. AI. Word. PPT</p>
//               </div>
//             </div>
//             <div className="actionBtn">
//             <button className="form-back">BACK</button>
//             <button className="form-continue">CONTAINUE</button>
//             </div>
//         </div>
//         <div className="formCv">
//           <div className="cvProfile">
//             <div className="cvImg"></div>
//             <div className="cvName">
//               <h3>{User.first} {User.last}</h3>
//               <p>{User.profession}</p>
//             </div>
//             <p className="cvInput"></p>
//             <p className="cvInput">{User.mobileNumber}</p>
//             <p className="cvInput">{User.email}</p>
//             <p className="cvInput">{User.city},{User.counntry}</p>
//             <div className="cvSkills">
//               <h4>Skills</h4>
//               <p>{User.skills}</p>
//               <h4>Honor & Award</h4>
//               <p></p>
//               <h4>Hobbies &Interest</h4>
//               <p>{User.hobbis}</p>
//             </div>

//             <div className="formIcon">
//               <h4>Links and credentials</h4>
//               <a href=""><LiaLinkedinIn id="linkedIn"/></a> <span>LinkedIn</span>
//               <a href=""><FaGithub /></a><span>GitHub</span>
//               <a href=""><HiMiniArrowTopRightOnSquare /></a><span>WebSite</span>
//             </div>
//           </div>
//           <div className="cvInformation">
//             <h3>About</h3>
//             <p className="line"></p>
//             <p className="cvText">{User.about}</p>
//             <h3>Education</h3>
//             <p className="line"></p>
//             <p className="cvText"></p>
//             <h3>Experience</h3>
//             <p className="line"></p>
//             <h4>{User.companyName}</h4>
//             <b> {User.position} ,{User.from}, {User.to}</b>
//             <p className="cvText">{User.description}</p>
//           </div>

//         </div>

//       </div>
//       <div className="formAbout">
        
//         <form>
//           <lable>About</lable>
//           <input type="text" value={User.About} onChange={(e) => setUser({ ...User, about: e.target.value })}></input>
//         </form>
//         <button className="form-back">BACK</button>
//         <button className="form-continue">CONTAINUE</button>
//       </div>
//       <div className="formSkills">
//         <form>
//           <lable>Skills</lable>
//           <input type="text" value={User.skills} onChange={(e) => setUser({ ...User, skills: e.target.value })}></input>
//           {/* <RiDeleteBin6Line id="delete" /><IoAdd /> */}
//           <input type="text" value={User.skills} onChange={(e) => setUser({ ...User, skills: e.target.value })}></input>
//           {/* <RiDeleteBin6Line id="delete" /><IoAdd id="add"/> */}
//           <input type="text" value={User.skills} onChange={(e) => setUser({ ...User, skills: e.target.value })}></input>
//           {/* <RiDeleteBin6Line id="delete"/><IoAdd id="add"/> */}
//           <input type="text" value={User.skills} onChange={(e) => setUser({ ...User, skills: e.target.value })}></input>
//           {/* <RiDeleteBin6Line id="delete"/><IoAdd id="add"/> */}
//         </form>
//         <button className="form-back">BACK</button>
//         <button className="form-continue">CONTAINUE</button>
//       </div>
//         <div className="formExperience">
//           <h4>Experience</h4>
//           <div id="formExperience">
//             <form>
//               <lable>Company Name</lable>
//               <input type="text" value={User.companyName} onChange={(e) => setUser({ ...User, companyName: e.target.value })} />
//               <lable>position</lable>
//               <input type="text" value={User.position} onChange={(e) => setUser({ ...User, position: e.target.value })} />

//             </form>
//             <div id="fromTo">
//               <form>
//                 <lable>From</lable>
//                 <input type="text" value={User.from} onChange={(e) => setUser({ ...User, from: e.target.value })} />

//               </form>
//               <form>
//                 <lable>To</lable>
//                 <input type="text" value={User.to} onChange={(e) => setUser({ ...User, to: e.target.value })} />
//               </form>
//             </div>
//             <div className="companyLD">
//               <div className="companyLogo">
//                 <h4>Logo</h4>
//                 <div className="actionImage2">
//                   <WiCloudUp id="cloudIcon2" />
//                   <b> Drag & drop files or</b>
//                   <p> Supported formates: JPEG. PNG. GIF. MP4. PDF. PSD. AI. Word. PPT</p>
//                 </div>
//               </div>
//               <div className="companyDecs">
//                 <h4>Description</h4>
//                 <input type="text" value={User.description} onChange={(e) => setUser({ ...User, description: e.target.value })}></input>
//               </div>
//             </div>
//             <div>
//               <button className="form-back">BACK</button>
//               <button className="form-continue">CONTAINUE</button>
//               </div>
//           </div>
//         </div>
//         <div className="formAwards">
//           <p>Honors & Awards</p>
//           <div id="formAwards"> 
//             <div id="awardsName">
//               <form id="nameA">
//                 <lable>Awards name</lable>
//                 <input type="text" value={User.awardsName} onChange={(e) => setUser({ ...User, awardsName: e.target.value })} />

//               </form>
//               <form id="yearA">
//                 <lable>Year</lable>
//                 <input type="text" value={User.year} onChange={(e) => setUser({ ...User, year: e.target.value })} />
//               </form>
//             </div>
//             <form id="descA">
//               <lable>Description</lable>
//               <input type="text" value={User.awardsDesc} onChange={(e) => setUser({ ...User, awardsDesc: e.target.value })}></input>
//             </form>
//           </div>
//         </div>
//         <div className="formExperience">
//           <h4>Education</h4>
//           <div id="formExperience">
//             <form>
//               <lable>Organisation Name</lable>
//               <input type="text" value={User.companyName} onChange={(e) => setUser({ ...User, companyName: e.target.value })} />
//               <lable>degree</lable>
//               <input type="text" value={User.position} onChange={(e) => setUser({ ...User, position: e.target.value })} />

//             </form>
//             <div id="fromTo">
//               <form>
//                 <lable>From</lable>
//                 <input type="text" value={User.from} onChange={(e) => setUser({ ...User, from: e.target.value })} />

//               </form>
//               <form>
//                 <lable>To</lable>
//                 <input type="text" value={User.to} onChange={(e) => setUser({ ...User, to: e.target.value })} />
//               </form>
//             </div>
//             <div className="companyDecs">
//                 <h4>Description</h4>
//                 <input type="text" value={User.description} onChange={(e) => setUser({ ...User, description: e.target.value })}></input>
//               </div>
//           </div>
//         </div>
//       <div className="formSkills">
//         <form>
//           <lable>Hobbies and Interest</lable>
//           <input type="text" value={User.hobbis} onChange={(e) => setUser({ ...User, hobbis: e.target.value })}></input>
//           <input type="text" value={User.hobbis} onChange={(e) => setUser({ ...User, hobbis: e.target.value })}></input>
//           <input type="text" value={User.hobbis} onChange={(e) => setUser({ ...User, hobbis: e.target.value })}></input>
//           <input type="text" value={User.hobbis} onChange={(e) => setUser({ ...User, hobbis: e.target.value })}></input>
//         </form>
//         <button className="form-back">BACK</button>
//         <button className="form-continue">CONTAINUE</button>
//       </div>
//       <div className="formAwards">
//           <p>Links</p>
//           <div id="formAwards"> 
//           <div id="awardsName">
//               <form id="nameA">
//                 <lable>URL</lable>
//                 <input type="text" value={User.url} onChange={(e) => setUser({ ...User, url: e.target.value })} />

//               </form>
//               <form id="yearA">
//                 <lable>WebSite Name</lable>
//                 <input type="text" value={User.websiteName} onChange={(e) => setUser({ ...User, websiteName: e.target.value })} />
//               </form>
//             </div>
//             <div id="awardsName">
//               <form id="nameA">
//                 <lable>URL</lable>
//                 <input type="text" value={User.url} onChange={(e) => setUser({ ...User, url: e.target.value })} />

//               </form>
//               <form id="yearA">
//                 <lable>WebSite Name</lable>
//                 <input type="text" value={User.websiteName} onChange={(e) => setUser({ ...User, websiteName: e.target.value })} />
//               </form>
//             </div>
//             <div id="awardsName">
//               <form id="nameA">
//                 <lable>URL</lable>
//                 <input type="text" value={User.url} onChange={(e) => setUser({ ...User, url: e.target.value })} />

//               </form>
//               <form id="yearA">
//                 <lable>WebSite Name</lable>
//                 <input type="text" value={User.websiteName} onChange={(e) => setUser({ ...User, websiteName: e.target.value })} />
//               </form>
//             </div>
//           </div>
//         </div>
//     </div>