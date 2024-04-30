import { createSlice,nanoid} from "@reduxjs/toolkit";

const InitialKeySkillsValue =  [{id:"",text:""}]


export const KeySkillsInfo = createSlice({
    name:"KeySkills",
    initialState:InitialKeySkillsValue,
    reducers:{
      Add:(state,action)=>{
        const skill={
          id:nanoid(),
          text:action.payload
        }
        state.push(skill)
      },

      Remove:(state,action)=>{
         const skill={
          id:nanoid()
        }
        if (nanoid) {
          state.pop(skill)
        }
      }
    }
})

export const KeySkillInfoAction = KeySkillsInfo.actions
export default  KeySkillsInfo.reducer;