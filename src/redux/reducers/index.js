import { SET_COMBINE, SET_DATA, SET_COLUMNS, SET_FILTEREDDATA } from '../action-types';
import { combineReducers } from "redux";
import data from '../../data';

const getStorageCombine = localStorage.getItem("combine");
const combineState = getStorageCombine ? JSON.parse(getStorageCombine) : {};

const getStorageData = localStorage.getItem("data");
const localSetState = [];
const dataState = getStorageData ? JSON.parse(getStorageData) : localSetState;

const filteredData = {
    data: [...data, ...dataState],
    filteredData: []
}

const getStorage = localStorage.getItem("columns");
const columnsState = getStorage ? JSON.parse(getStorage) : [];

const combineReducer = (state = combineState, action) => {
    switch (action.type) {
        case SET_COMBINE:
            localStorage.setItem("combine", JSON.stringify(action.combine));
            return action.combine;
        default:
            return state;
    }
}

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case SET_DATA:
            localStorage.setItem("data", JSON.stringify(action.data));
            return action.data;
        default:
            return state;
    }
}

const filteredDataReducer = (state = filteredData, action) => {
    switch (action.type) {
        case SET_FILTEREDDATA:
            return { ...state, filteredData: action.filteredData };;
        default:
            return state;
    }
}

const columnsReducer = (state = columnsState, action) => {
    switch (action.type) {
        case SET_COLUMNS:
            localStorage.setItem("columns", JSON.stringify(action.columns));
            return action.columns;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    combineReducer,
    dataReducer,
    filteredDataReducer,
    columnsReducer
});

export default rootReducer;