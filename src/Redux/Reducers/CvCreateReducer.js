import { createSlice } from "@reduxjs/toolkit";
import {cvData} from "../../Components/CVComponents/CvData.js"

const cvSaved = localStorage.getItem('cvCreated')? JSON.parse(localStorage.getItem('cvCreated')) : cvData;
const initialState ={
    cvCreated: cvSaved,
};
export const CvCreateReducer = createSlice({
    name: "cvCreated",
    initialState,
    reducers :{
        addCvCreate (state, action) {
            state.cvCreated.shift();
            state.cvCreated.push(action.payload);
            // console.log(action.payload);
        //   const newCv = action.payload;
        //   const existingCv = state.cvCreated.findIndex(fi => fi.cvID == newCv.cvID);
        // // const id = newCv.cvID;
        //   if (existingCv) {
        //         for (let key in state.cvCreated[existingCv]) {
        //             if(state.cvCreated[existingCv][key] == newCv[key]){
        //                 state.cvCreated[existingCv][key] = newCv[key]
        //             }
        //       }
        //   } else {
        //     state.cvCreated.push(newCv)
        //   }
        //   console.log(state.cvCreated)
          localStorage.setItem("cvCreated", JSON.stringify(state.cvCreated.map(cv => cv)));
        }
    }
})
export const {addCvCreate} = CvCreateReducer.actions;
export default CvCreateReducer.reducer;




//   state.cvCreated.push(
            //       {
            //         cvID: newCv.cvID,
            //         cvFirstName: newCv.cvFirstName,
            //         cvLastName:newCv.cvLastName,
            //         cvProfession:newCv.cvProfession,
            //         cvCountry:newCv.cvCountry,
            //         cvCity:newCv.cvCity,
            //         cvMobileNumber:newCv.cvMobileNumber,
            //         cvEmail:newCv.cvEmail,
            //         cvPersonalPhoto:newCv.cvPersonalPhoto,
            //         cvAbout:newCv.cvAbout,
            //         cvSkills:[newCv.cvSkills],
            //         cvHobbis:[newCv.cvHobbis],
            //         cvEducation:[{
            //             eduID: newCv.eduID,
            //             eduOrganizationName:newCv.eduOrganizationName,
            //             eduDegree:newCv.eduDegree,
            //             eduFrom:newCv.eduFrom,
            //             eduTo:newCv.eduTo,
            //             eduDescription:newCv.eduDescription
            //         }],
            //         cvExperience:[{
            //             expID: newCv.expID,
            //             expCompanyName:newCv.expCompanyName,
            //             expPosition:newCv.expPosition,
            //             expFrom:newCv.expFrom,
            //             expTo:newCv.expTo,
            //             expDescription:newCv.expDescription,
            //             expCompanyLogo:newCv.expCompanyLogo
            //         }],
            //         cvHonorAndAwards:[{
            //             awID: newCv.awID,
            //             cvAwardName:newCv.cvAwardName,
            //             cvAeardYear:newCv.cvAeardYear,
            //             cvAwardDesc:newCv.cvAwardDesc
            //         }],
            //         cvLinks:[{
            //             linkID: newCv.linkID,
            //             linkURL:newCv.linkURL,
            //             websiteName:newCv.linkName 
            //         }]
            //       }
            //   );