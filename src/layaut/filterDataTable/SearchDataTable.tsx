import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchDataTablePage from './SearchDataTablePage';
import { callAPI } from "../../utils/callAPI";

interface IProps {
    service:object;
    typeService:string;
    dispatchUser:(type:string, payload:any) => void;
    TYPE:string;
}

const SearchDataTable = ({ service, typeService, dispatchUser, TYPE }:IProps):JSX.Element => {

    const dispatch = useDispatch();

    const [text, setText] = useState<string>("");

    const filterDataTable = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void => {

        const text:string = e.target.value;

        setText(text);

        callAPI({ service, typeService, data: {text}, dispatch, dispatchReducer: dispatchUser, TYPE });
    }

    const clearInput = ():void => {

        if (text.length === 0) return;

        callAPI({ service, typeService, data: {text: ""}, dispatch, dispatchReducer: dispatchUser, TYPE });

        setText("");
    }

    return <SearchDataTablePage
        filterDataTable={filterDataTable}
        clearInput={clearInput}
        text={text}
    />;
}

export default SearchDataTable;