import { useRouter } from 'next/router';

const VisualizarMembroPage = ({ membrosj }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalhes do Membro</h1>
      <p>ID: {id}</p>
      <p>Nome: {membrosj.name}</p>
      <p>E-mail: {membrosj.email}</p>
      <p>Aniversário: {membrosj.birthday}</p>
      <p>Cargo: {membrosj.position}</p>
    </div>
  );
};

VisualizarMembroPage.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3001/membrosj/${query.id}`);
  const member = await res.json();
  return { member };
};

export default VisualizarMembroPage;
