import { useState, useEffect } from "react";
import { setData } from "../../redux/actions";

const InputForm = props => {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState([]);

    const formInputsFields = {
        number: { type: 'number', placeholder: 'No giriniz', name: 'no' },
        kontrat: { type: 'number', placeholder: 'Kontrat giriniz', name: 'kontrat' },
        teklif: { type: 'text', placeholder: 'Teklif giriniz', name: 'teklif' },
        data: { type: 'text', placeholder: 'Data giriniz', name: 'data' }
    }

    const visibleFunc = (e) => {
        e.preventDefault();
        setVisible(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const handleFormData = new FormData(e.target);
        const initialFormData = {};
        handleFormData.forEach((value, key) => (initialFormData[key] = value));
        setFormData(arr => [...arr, initialFormData]);
    }

    useEffect(() => {
        if (formData.length !== 0) {
            setData(formData)
        }
    }, [formData])

    const formInputs = [];

    Object.keys(formInputsFields).map(key => {
        return formInputs.push(
            <input
                key={key}
                type={formInputsFields[key].type}
                name={formInputsFields[key].name}
                placeholder={formInputsFields[key].placeholder}
            />
        )
    });

    return (
        <>
            <span>
                <table>
                    <tbody>
                        {
                            formData.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.kontrat}</td>
                                        <td>{value.teklif}</td>
                                        <td>{value.data}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </span>
            <form onSubmit={(e) => handleSubmit(e)} >
                {
                    visible ?
                        (<span>
                            {formInputs}
                            <button>Kaydet</button>
                            <br />
                        </span>)
                        : undefined
                }
                <button
                    onClick={(e) => visibleFunc(e)}
                >Yeni Data Ekle</button>
            </form>
        </>
    )
}

export default InputForm;