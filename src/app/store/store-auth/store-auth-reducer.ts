import { createReducer, on } from "@ngrx/store";
import { authLogin, authLogout, authReload } from "./store-auth-action";

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
            infor: {
                id: userId,
                address,
                email,
                phone,
                accessToken,
                refreshToken,
            }
        };
    }),
    on(authLogout, (state: any) => {
        localStorage.clear();
        return {
            ...state,
            infor: {
                id: '',
                address: '',
                email: '',
                phone: '',
                accessToken: '',
                refreshToken: '',
            }
        }
    }),
    on(authReload, (state: any) => {
        let user: any = localStorage.getItem('user');
        user = JSON.parse(user);

        return {
            ...state,
            infor: {
                id: user.id,
                address: user.address,
                email: user.email,
                phone: user.phone,
                accessToken: user.accessToken,
                refreshToken: user.refreshToken,
            }
        }
    })
)