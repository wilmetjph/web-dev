import {useState} from "react"

export function useForm() {
    const [form, setForm] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const reset = () => {
        setForm({
            name: "",
            email: "",
            message: ""        
        });
    };

    return {
        form,
        handleChange,
        reset
    };
}