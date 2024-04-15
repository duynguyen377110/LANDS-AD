import { createReducer, on } from "@ngrx/store";
import { openWarning, closeWarning } from "./store-warning-action";

const initialState = {
    status: false,
    message: ''
}

export const warningReducer = createReducer(
    initialState,
    on(openWarning, (state: any, action: any) => {
        let { message } = action;
        
        return {
            ...state,
            status: true,
            message
        }
    }),
    on(closeWarning, (state: any) => {

        return {
            ...state,
            status: false,
            message: ''
        }
    })
)