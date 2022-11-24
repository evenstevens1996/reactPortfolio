import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';
import { fieldsReducer } from '../features/fields/fieldsSlice';
import { registersReducer } from '../features/register/registersSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';



export const store = configureStore({
    reducer: {
        fields: fieldsReducer,
        registers: registersReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
