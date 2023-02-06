import React, { useState } from 'react';

const ChercherPlat = () => {
const [name, setName] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Code pour soumettre le nom et rechercher le plat ici
};

return (
<form onSubmit={handleSubmit}>
    <label>
    Nom du plat :
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <button type="submit">Rechercher</button>
</form>
);
};

export default ChercherPlat;
