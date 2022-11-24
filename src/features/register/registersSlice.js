import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    registersArray: null
};

const registersSlice = createSlice({
    name: 'registers',
    initialState,
    reducers: {
        addRegister: (state, action) => {
            console.log('addRegister action.payload:', action.payload);
            console.log('addRegister state.registersArray:', state.registersArray);
            const newRegister = {
                id: state.registersArray.length + 1,
                ...action.payload
            };
            state.registersArray.push(newRegister);
        }
    }
});

export const registersReducer = registersSlice.reducer;

export const { addRegister } = registersSlice.actions;

export const selectRegistersByFieldId = (fieldId) => (state) => {
    return state.registers.registersArray.filter(
        (register) => register.fieldId === parseInt(fieldId)
    );
};