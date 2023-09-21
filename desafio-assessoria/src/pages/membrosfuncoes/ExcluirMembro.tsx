import { useRouter } from 'next/router';

const ExcluirMembroPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleExcluir = async () => {
    try {
      const response = await fetch(`http://localhost:3001/membrosj/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        // Membro excluído com sucesso, você pode redirecionar o usuário para a página de listagem de membros
        window.location.href = '/membros';
      } else {
        // Lida com erros, exibe uma mensagem de erro, etc.
      }
    } catch (error) {
      // Lida com erros de rede, etc.
    }
  };

  return (
    <div>
      <h1>Excluir Membro</h1>
      <p>Tem certeza de que deseja excluir este membro?</p>
      <button onClick={handleExcluir}>Sim</button>
      <Link href="/membros">Cancelar</Link>
    </div>
  );
};

export default ExcluirMembroPage;
