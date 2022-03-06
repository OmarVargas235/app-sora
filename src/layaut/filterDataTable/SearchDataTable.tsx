import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchDataTablePage from './SearchDataTablePage';

interface IProps {
    dispatch:({type, payload}:{type:string, payload:boolean|string}) => void;
    LOADING_DATA_TABLE:string;
    TEXT_FILTER:string;
}

const SearchDataTable = ({ dispatch, LOADING_DATA_TABLE, TEXT_FILTER }:IProps):JSX.Element => {

    const dispatchRedux = useDispatch();

    const [text, setText] = useState<string>("");

    const filterDataTable = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void => {

        const text:string = e.target.value;

        setText(text);

        dispatch({ type: LOADING_DATA_TABLE, payload: true });
        dispatch({ type: TEXT_FILTER, payload: text });
    }

    const clearInput = ():void => {

        if (text.length === 0) return;

        dispatch({ type: TEXT_FILTER, payload: '' });

        dispatch({ type: LOADING_DATA_TABLE, payload: true });
        setText("");
    }

    return <SearchDataTablePage
        filterDataTable={filterDataTable}
        clearInput={clearInput}
        text={text}
    />;
}

export default SearchDataTable;