import { createSlice } from '@reduxjs/toolkit';
import { FIELDS } from '../../app/shared/FIELDS';

const initialState = {
    fieldsArray: FIELDS
};

const fieldsSlice = createSlice({
    name: 'fields',
    initialState
});

export const fieldsReducer = fieldsSlice.reducer;

export const selectAllFields = (state) => {
    return state.fields.fieldsArray;
};

export const selectFieldById = (id) => (state) => {
    return state.fields.fieldsArray.find(
        (field) => field.id === parseInt(id)
    );
};

export const selectFeaturedFields = (state) => {
    return state.fields.fieldsArray.find((field) => field.featured);
};
