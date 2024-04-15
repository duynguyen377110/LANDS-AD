import { createAction, props } from "@ngrx/store";

export const openWarning = createAction("open-warning", props<any>());
export const closeWarning = createAction("close-waring");