import './CampoTexto.css'

// Componente de input reutilizável: recebe os dados via props (label, value,
// onChange...) e não guarda estado próprio.
function CampoTexto(props) {
  return (
    <div className="campo-texto">
      <label htmlFor={props.name}>{props.name}</label>
      <input 
        id={props.name} 
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange} 
        />
    </div>
  )
}

export default CampoTexto
