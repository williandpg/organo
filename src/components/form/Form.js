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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  }


  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o colaborador</h2>
        <CampText obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
        <CampText obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' />
        <CampText obrigatorio={true} label='Imagem' placeholder='Digite o endereco da imagem' />
        <DropDown obrigatorio={true} label='Time' itens={times}/>
        <Button>Criar Colaborador</Button>
      </form>
    </section>
  );
};

export default Form;