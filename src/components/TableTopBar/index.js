import { useState, useEffect } from "react";
import { setColumns } from "../../redux/actions";
import downloadIcon from '../../assets/download-solid.svg';
import settingsIcon from '../../assets/settings_48px.svg';
import plusIcon from '../../assets/plus-solid.svg';
import Filter from '../Filter';

const TableTopBar = props => {
    const columns = props.columns;

    const visible = (checked, index) => {
        const currentData = columns
        currentData[index].visible = checked
        setColumns(columns);
    }

    return (
        <form className="formBar">
            <Filter />
            <div className="icon">
                <img src={downloadIcon} alt="downloadIcon" />
                <div className="dropdown">
                    <img src={settingsIcon} alt="settingsIcon" />
                    <div className="dropdown-content">
                        {
                            Object.keys(columns).map(item => {
                                return (
                                    <div key={item}>
                                        <input
                                            type="checkbox"
                                            value={columns[item]}
                                            name={columns[item].title}
                                            defaultChecked={columns[item].visible}
                                            onChange={(e) => visible(e.target.checked, item)}
                                        />
                                        {columns[item].title}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img src={plusIcon} alt="plusIcon" />
            </div>
        </form>
    )
}

export default TableTopBar;