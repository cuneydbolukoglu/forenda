import { SET_COMBINE, SET_DATA, SET_COLUMNS, SET_FILTEREDDATA } from '../action-types';
import { store } from "../../redux";

export const setCombine = value => {
    store.dispatch({ type: SET_COMBINE, combine: value })
}

export const setData = value => {
    store.dispatch({ type: SET_DATA, data: value })
}

export const setFilteredData = value => {
    store.dispatch({ type: SET_FILTEREDDATA, filteredData: value })
}

export const setColumns = value => {
    store.dispatch({ type: SET_COLUMNS, columns: value })
}