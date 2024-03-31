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
        
        let {userId, accessToken, address, email, phone, refreshToken} = action.metadata;
        localStorage.setItem('user', JSON.stringify({accessToken, address, email, id: userId, phone, refreshToken,}));

        return {
            ...state,
            id: userId,
            address,
            email,
            phone,
            accessToken,
            refreshToken,
        };
    }),
    on(authLogout, (state: any) => {
        return state;
    })
)