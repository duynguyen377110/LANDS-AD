import { createAction, props } from "@ngrx/store";

export const authLogin = createAction('auth-login', props<any>());
export const authLogout = createAction('auth-logout');
export const authReload = createAction('auth-reload');