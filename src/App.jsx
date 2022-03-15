const App = ()  => {
  const miObjeto = {
    nombre: "citlalli",
    apPaterno: "Larios",
    apMaterno: "Huerta",
    edad: 21,
  };

  const atributo = "apPaterno";

  return (
    <div className="App">
    <h1>{`Mi nombre es ${miObjeto.nombre} ${miObjeto.apPaterno} ${miObjeto.apMaterno} y tengo ${miObjeto.edad}años`}</h1>
    
    <h1>{"Mi nombre es " +miObjeto.nombre + " "+ miObjeto.apPaterno + " "+ miObjeto.apMaterno + " y tengo "+ miObjeto.edad + "años"}</h1>
    
    </div>
  
  );
  
};

export default App;
