import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const expenseSlice = createSlice({
    name : 'expenses',
    initialState : [],
    reducers : {
        addExpense : (state, action) => {
             state.push({...action.payload, id: uuidv4()});
        },
        updateExpense : (state, action) => {
            const index = state.findIndex(expense => expense.id == action.payload.id);
            if(index!==-1){
             state[index] = {...state[index], ...action.payload.updates};
            }
       },
       deleteExpense : (state,action) => {
       return state.filter(expense => expense.id != action.payload.id );
       }
    }
});

export const {addExpense, updateExpense, deleteExpense} = expenseSlice.actions;
export default expenseSlice.reducer;