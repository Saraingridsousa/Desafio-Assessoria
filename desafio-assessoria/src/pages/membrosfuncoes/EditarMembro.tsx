import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditarMembroPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    position: '',
  });

  useEffect(() => {
    // Recupere os detalhes do membro com base no ID e preencha o formulário
    async function fetchMemberDetails() {
      try {
        const response = await fetch(`http://localhost:3001/membrosj/${id}`);
        if (response.status === 200) {
          const memberData = await response.json();
          setFormData(memberData);
        } else {
          // Lida com erros, por exemplo, membro não encontrado
        }
      } catch (error) {
        // Lida com erros de rede, etc.
      }
    }

    fetchMemberDetails();
  }, [id]);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditar = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/membrosj/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
       
        window.location.href = '/membros';
      } else {
        
      }
    } catch (error) {
    
    }
  };

  return (
    <div>
      <h1>Editar Membro</h1>
      <form onSubmit={handleEditar}>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarMembroPage;
