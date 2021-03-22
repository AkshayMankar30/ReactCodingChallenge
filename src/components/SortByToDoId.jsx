import React, { useState } from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';




function SortByToDoId(props) {
    const [isClick, setIsClick] = useState(false);

    return <th scope="col">ToDo ID <button onClick={() => {
        setIsClick(!isClick);
        props.onClick(isClick);

    }} className="btn bg-white" style={{ padding: "0 " }} >{isClick ? <ArrowDropUpIcon style={{ fontSize: 20 }} /> : <ArrowDropDownIcon style={{ fontSize: 20 }} />}</button></th>;
}

export default SortByToDoId;