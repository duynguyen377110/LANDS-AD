import { createAction, props } from "@ngrx/store";

export const authLogin = createAction('auth-login', props);
export const authLogout = createAction('auth-logout');