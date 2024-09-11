export const cvData = 
    {
        cvID:0,
        cvFirstName:"",
        cvLastName:"",
        cvProfession:"",
        cvCountry:"",
        cvCity:"",
        cvMobileNumber:"",
        cvEmail:"",
        cvPersonalPhoto: "",
        cvAbout:"",
        cvSkills:[{skill: ""}],
        cvHobbies:[{hoby: ""}],
        cvEducation:[{
            eduID: 1,
            eduOrganizationName:"",
            eduDegree:"",
            eduFrom:"",
            eduTo:"",
            eduDescription:""
        }],
        cvExperience:[{
            expID: 1,
            expCompanyName:"",
            expPosition:"",
            expFrom:"",
            expTo:"",
            expDescription:"",
            expCompanyLogo:""
        }],
        cvHonorAndAwards:[{
            awID: 1,
            cvAwardName:"",
            cvAeardYear:"",
            cvAwardDesc:""
        }],
        cvLinks:[{
            linkID: 1,
            linkURL:"",
            websiteName:"" 
        }]
    }

    export const activCompon ={
        activMain : false,
        activAbout : false,
        activSkill : false,
        activExpr : false,
        activEduc : false,
        activExpr : false,
        activHonr : false,
        activHoby : false,
        activLink : false
    };
    localStorage.setItem("activCompon", JSON.stringify(activCompon));
// export default cvCreated