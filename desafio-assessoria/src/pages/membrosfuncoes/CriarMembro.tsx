import { useState } from 'react';

const CriarMembroPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    position: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCriar = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/membrosj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
       
        window.location.href = '/membros';
      } else {
       
      }
    } catch (error) {
      
    }
  };

  return (
    <div>
      <h1>Criar Novo Membro</h1>
      <form onSubmit={handleCriar}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="birthday"
          placeholder="Aniversário"
          value={formData.birthday}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Cargo"
          value={formData.position}
          onChange={handleInputChange}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarMembroPage;
