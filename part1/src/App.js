import './App.css';
import Mensaje from './Mensaje';

const Hello = (props) => {//Aqui utiliza props o parametros
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

//NO SE CREAN COMPONENTES DENTRO DEL PRINCIPAL O DE OTRO COMPONENTE, ES UNA MALA PRACTICA.

const App = () =>{//Declara un componente como una funcion (con una mayuscula para que no lo tome como una etiqueta html)
  //const now = new Date()
  //const a=10
  //const b= 20
  //console.log(now, a+b)
  //Es posible pasar unn array como componente, aunque no es buena practica

  const friends=[
    {name:'Juan', age:30},
    {name:'Manuel', age:31},
  ]
  const name='Joaquin'
  const age=30
  return (
    /*<div className="App">
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} lus {b} is {a+b}
      </p>
    </div>*/
    
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name='George' age={26+10}/>
      <Hello name={name} age= {age}/>
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='yellow' message='En un curso'/>
      <Mensaje color='blue' message='de React'/>
      <Mensaje color='orange' message='y JavaScript'/>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
    //Cualquier código de JavaScript entre llaves es evaluado y el resultado de esta evaluación se incrusta en el lugar definido en el HTML producido por el componente.
  )
}

export default App;
