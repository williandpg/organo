import './Form.css';
import CampText from '../CampText/CampText';

const Form = () => {
  return (
    <section className='form'>
      <form >
        <h2>Preencha os dados para criar o colaborador</h2>
        <CampText label='Nome' placeholder='Digite seu nome' />
        <CampText label='Cargo' placeholder='Digite seu cargo' />
        <CampText label='Imagem' placeholder='Digite o endereco da imagem' />
      </form>
    </section>
  );
};

export default Form;