import React, { useState } from "react";
import { Form } from "./components/Form";
import { useForm } from "./hooks/useForm";

import { findWordLR } from "./utils/findWordLR";

const App = () => {
  const [matrix, setMatrix] = useState([
    ["Y", "S", "R", "A"],
    ["P", "S", "O", "L"],
    ["Y", "O", "R", "G"],
    ["E", "L", "K", "U"],
  ]);

  const [formValues, handleInputChange] = useForm({
    n: 0,
    m: 0,
  });

  const { n, m } = formValues;

  const [solution, setSolution] = useState(
    "Busca una palabra para mostrar su posible solución aquí."
  );

  // Palabra a buscar
  const [myWord, setWord] = useState("");
  const submit = (e) => {
    e.preventDefault();
  };

  const createMatrix = () => {
    n != 0 && m != 0 ? (show = false) : (show = true);
    console.log(n, m);
  };

  let show = false;
  console.log("show: " + show);
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h1 className="navbar-brand" href="#">
            Sopa de Letras
          </h1>
        </div>
      </nav>
      {show == false ? (
        <></>
      ) : (
        <div className="m-4">
          <form onSubmit={submit} className="">
            <input
              autoComplete="off"
              className="d-block form-control my-2"
              placeholder="Número de filas (n)"
              name="n"
              type="text"
              value={n}
              onChange={handleInputChange}
            />

            <input
              autoComplete="off"
              className="d-block form-control my-2"
              placeholder="Número de columnas (m)"
              name="m"
              type="text"
              value={m}
              onChange={handleInputChange}
            />

            <button
              onClick={createMatrix}
              className="my-2 d-block btn-sm btn-primary btn-block w-100"
            >
              Crear Matriz
            </button>
          </form>
        </div>
      )}

      <div className="justify-content-center d-flex justify-content-center">
        <div className="bg-light m-4 w-auto rounded border border-primary">
          {matrix.map((row) => (
            <div
              className="d-block m-3 d-flex justify-content-center"
              key={matrix.indexOf(row)}
            >
              {row.map((ele) => (
                <p className="d-inline m-3" key={row.indexOf(ele)}>
                  {ele}
                </p>
              ))}

              {/* <br /> */}
            </div>
          ))}
        </div>
      </div>
      <div>
        <small className="mx-4">Respuesta </small>
        <div className="mx-4 alert alert-primary" role="alert">
          {solution}
        </div>
        <Form
          func={setWord}
          setSolution={setSolution}
          matrix={matrix}
          word={myWord}
        />
      </div>
    </div>
  );
};

export default App;
