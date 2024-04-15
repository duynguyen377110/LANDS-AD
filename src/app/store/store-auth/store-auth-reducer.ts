import { createReducer, on } from "@ngrx/store";
import { authLogin, authLogout, authReload } from "./store-auth-action";

const initialState = {
    infor: {
        address: '',
        email: '',
        phone: '',
        refreshToken: '',
        accessToken: '',
        slug: '',
    }
}

export const authReducer = createReducer(
    initialState,
    on(authLogin, (state: any, action: any) => {
        let { access } = action.metadata;

        let payload = {
            id: access.user._id,
            address: access.user.address,
            email: access.user.email,
            phone: access.user.email,
            accessToken: access.accessToken,
            refreshToken: access.refreshToken,
            slug: access.slug
        }

        localStorage.setItem('user', JSON.stringify({...payload}));

        return {
            ...state,
            infor: {
                ...payload
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
                slug: '',
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
                slug: user.slug
            }
        }
    })
)