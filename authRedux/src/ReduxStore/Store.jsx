import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import detailsReducer from './details'

const store=configureStore(
    {
        reducer:{
            auth:authReducer,
            details:detailsReducer
        }
    }
)

export default store