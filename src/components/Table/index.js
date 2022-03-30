import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setColumns } from "../../redux/actions";
import TableTopBar from "../TableTopBar";

const Table = props => {
    const filteredData = useSelector(state => state.filteredDataReducer);
    const [data, setData] = useState(filteredData.data);
    const columnsState = useSelector(state => state.columnsReducer);

    const columns = {
        no: { title: 'Id', visible: true },
        kontrat: { title: 'Kontrat', visible: true },
        teklif: { title: 'Teklif', visible: true },
        data: { title: 'Data', visible: true },
    }

    useEffect(() => {
        if (filteredData.filteredData.length !== 0) {
            setData(filteredData.filteredData);
        }
    }, [filteredData]);

    useEffect(()=> {
        setColumns(columns)
    }, [])
    
    return (
        <>
            <TableTopBar
                columns={columns}
            />
            <table className="standard-table">
                <tbody>
                    <tr>
                        {
                            Object.keys(columns).map(item => {
                                return (
                                    <th style={columnsState[item] && columnsState[item].visible ? { display: 'table-cell' } : { display: 'none' }} key={item}>{columns[item].title}</th>
                                )
                            })
                        }
                    </tr>
                    {
                        data.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td style={columnsState['no'] && columnsState['no'].visible ? { display: 'table-cell' } : { display: 'none' }}>{value.no ? key + 1 : ''}</td>
                                    <td style={columnsState['kontrat'] && columnsState['kontrat'].visible ? { display: 'table-cell' } : { display: 'none' }}>{value.kontrat}</td>
                                    <td style={columnsState['teklif'] && columnsState['teklif'].visible ? { display: 'table-cell' } : { display: 'none' }}>{value.teklif}</td>
                                    <td style={columnsState['data'] && columnsState['data'].visible ? { display: 'table-cell' } : { display: 'none' }}>{value.data}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        </>
    )
}

export default Table;