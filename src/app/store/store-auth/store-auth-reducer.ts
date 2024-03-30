import { createReducer, on } from "@ngrx/store";
import { authLogin, authLogout } from "./store-auth-action";

const initialState = {
    infor: {
        address: '',
        email: '',
        phone: '',
        refreshToken: '',
        accessToken: ''
    }
}

export const authReducer = createReducer(
    initialState,
    on(authLogin, (state: any, action: any) => {
        return state;
    }),
    on(authLogout, (state: any) => {
        return state;
    })
)