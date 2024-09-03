import './Form.css';
import CampText from '../CampText/CampText';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';

const Form = () => {
  const times = [
    'Programacao',
    'Frontend',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovacao e Gestao'
  ]
  return (
    <section className='form'>
      <form >
        <h2>Preencha os dados para criar o colaborador</h2>
        <CampText label='Nome' placeholder='Digite seu nome' />
        <CampText label='Cargo' placeholder='Digite seu cargo' />
        <CampText label='Imagem' placeholder='Digite o endereco da imagem' />
        <DropDown label='Time' itens={times}/>
        <Button text='Criar Card' />
      </form>
    </section>
  );
};

export default Form;