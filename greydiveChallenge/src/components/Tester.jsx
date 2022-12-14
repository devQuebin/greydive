import "../App.css";

const Tester = ({ item, index }) => {
  return (
    <div className="tester">
      <h2>Nombre Cliente: {item.cliente}</h2>
      <h2>Test: Test de usabilidad en el sitio web</h2>
      <h2>Tester #{index + 1}</h2>
      <h2>Video</h2>
      <video className="video" width="320" height="240" controls>
        <source src={item.linkVideo} type="video/mp4" />
      </video>
      <h2>Transcripcion</h2>
      <p className="transcripcion"> {item.transcripcion}</p>
      <h2>Tareas</h2>
      <p className="escenario">Escenario: {item.escenario}</p>
      <hr />
      {item.preguntas.map((preg, i) => (
        <div className="tareas">
          <p>Tarea {i + 1}</p>
          <p>{preg.texto}</p>
          <p>{preg.tipoTarea}</p>
          <p>{preg.respuesta}</p>
          <p>{preg.tiempo}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
//Test esta hardcodeado porque en el JSON no hallamos TEST, pero en caso de estarlo lo llamamos

export default Tester;
