import { createSlice,nanoid} from "@reduxjs/toolkit";

const InitialValue =  [
  {
    id:"",
    certificationName:"",
    certificationURL:"",
  },
]

export const CertificationInfo = createSlice({
    name:"Certifications",
    initialState:InitialValue,
    reducers:{
      Add:(state,action)=>{
        const certificate_info={
          id:nanoid(),
          certificationName:action.payload.certificationName,
          certificationURL:action.payload.certificationURL
        }
        state.push(certificate_info)
      },

      Remove:(state,action)=>{
         
      }
    }
})

export const CertificationInfoAction = CertificationInfo.actions
export default CertificationInfo.reducer
