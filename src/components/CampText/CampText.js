import './CampText.css';

const CampText = (props) => {
  const placeholderModify = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModify}/>
    </div>
  );
}

export default CampText;