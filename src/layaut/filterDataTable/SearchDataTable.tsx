import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchDataTablePage from './SearchDataTablePage';
import { callAPI } from "../../utils/callAPI";

interface IProps {
    service:object;
    typeService:string;
    dispatch:({type, payload}:{type:string, payload:boolean}) => void;
    TYPE:string;
    LOADING_DATA_TABLE:string;
}

const SearchDataTable = ({ service, typeService, dispatch, TYPE, LOADING_DATA_TABLE }:IProps):JSX.Element => {

    const dispatchRedux = useDispatch();

    const [text, setText] = useState<string>("");

    const filterDataTable = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void => {

        const text:string = e.target.value;

        setText(text);

        dispatch({ type: LOADING_DATA_TABLE, payload: true });

        callAPI({ service, typeService, data: {text}, dispatch: dispatchRedux, dispatchReducer: dispatch, TYPE, TYPE_LOADING: LOADING_DATA_TABLE });
    }

    const clearInput = ():void => {

        if (text.length === 0) return;

        callAPI({ service, typeService, data: {text: ""}, dispatch, dispatchReducer: dispatch, TYPE });

        setText("");
    }

    return <SearchDataTablePage
        filterDataTable={filterDataTable}
        clearInput={clearInput}
        text={text}
    />;
}

export default SearchDataTable;