import { createReducer, on } from "@ngrx/store";
import { loadAmount, changeCurrentTab } from "./store-pagination-action";

const initialState = {
    amount: 0,
    itemsTab: [], // List tab item choose current page
    itemsOfPage: 3, // Quntity element on page
    type: '', // role, user, category, product,
    currentPage: 0
}

export const paginationReducer = createReducer(
    initialState,
    on(loadAmount, (state: any, action: any) => {
        let {amount, kind} = action;

        return {
            ...state,
            amount,
            itemsTab: Array.from({length: Math.ceil(amount / state.itemsOfPage)}, (_, index) => index),
            type: kind,
            currentPage: 0
        }
    }),
    on(changeCurrentTab, (state: any, action: any) => {
        let { tab } = action;

        return {
            ...state,
            currentPage: tab
        }
    })
)