const Mensaje = (props) =>{
    return <h1 style={{color: props.color }}>
        {props.message}
    </h1>
}

export default Mensaje
// aca creamos un componente en un archivo aparte
// y lo exportamos para que pueda ser utilizado en App.js