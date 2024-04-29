import { createAction, props } from "@ngrx/store";

export const loadAmount = createAction("load-amount", props<any>());
export const changeCurrentTab = createAction('change-tab', props<any>());