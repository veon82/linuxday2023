import React, { useState } from 'react';

function AddDistroForm({ onAdd }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDistro = {
            name,
            description,
            year: parseInt(year)
        };

        onAdd(newDistro);

        // Clear the form fields after submitting
        setName('');
        setDescription('');
        setYear(0);
    };

    const formStyle = {
        display: 'flex',
        gap: '10px',
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        flex: 1,
        padding: '5px',
    };

    const buttonStyle = {
        padding: '10px 15px',
        background: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        padding: '5px 15px',
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                style={inputStyle}
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                style={inputStyle}
                type="text"
                placeholder="Descrizione"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                style={inputStyle}
                type="number"
                placeholder="Anno"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />
            <button style={buttonStyle} type="submit">Aggiungi</button>
        </form>
    );
}

export default AddDistroForm;
