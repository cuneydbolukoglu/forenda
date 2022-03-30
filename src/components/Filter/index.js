import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setFilteredData } from "../../redux/actions";

const Filter = props => {
    const [filters, setFilters] = useState('');
    const stateData = useSelector(state => state.filteredDataReducer.data.reduce((unique, item) =>
        unique.includes(item.kontrat) ? unique : [...unique, item.kontrat], []
    ));
    const filteredData = useSelector(state => state.filteredDataReducer.data.filter(value =>
        filters === value.kontrat).map(item => item));

    useEffect(() => {
        setFilteredData(filteredData)
    }, [filters])

    return (
        <select
            type="search"
            onChange={(e) => setFilters(e.target.value)}
        >
            <option value=''>Kontrat seçiniz</option>
            {
                stateData.map((value, key) => {
                    return (
                        <option key={key} value={value}>{value}</option>
                    )
                })
            }
        </select>
    )
}

export default Filter;