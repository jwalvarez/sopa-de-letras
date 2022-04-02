import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import {
  findWordLR,
  findWordRL,
  findWordUD,
  findWordDU,
} from "../utils/findWordLR";

export const Form = (props) => {
  const [formValues, handleInputChange] = useForm({
    name: "",
  });

  const { name } = formValues;

  const submit = (e) => {
    e.preventDefault();
  };

  const saveWordState = () => {
    props.func(name);
    // Busqueda LR
    var solution = findWordLR(props.matrix, name);
    if (solution != undefined) {
      var solutionText = "";
      for (const property in solution) {
        solutionText = solutionText + `\t (${property})`;
      }
      props.setSolution(solutionText);
    } else {
      var solution = findWordRL(props.matrix, name);
      if (solution != undefined) {
        var solutionText = "";
        for (const property in solution) {
          solutionText = solutionText + `\t (${property})`;
        }
        props.setSolution(solutionText);
      } else {
        var solution = findWordUD(props.matrix, name);
        if (solution != undefined) {
          var solutionText = "";
          for (const property in solution) {
            solutionText = solutionText + `\t (${property})`;
          }
          props.setSolution(solutionText);
        } else {
          var solution = findWordDU(props.matrix, name);
          if (solution != undefined) {
            var solutionText = "";
            for (const property in solution) {
              solutionText = solutionText + `\t (${property})`;
            }
            props.setSolution(solutionText);
          } else {
            props.setSolution(`La palabra "${name}" no se ha encontrado.`);
          }
        }
      }
    }
  };

  return (
    <div className="mx-4">
      <form onSubmit={submit}>
        <input
          autoComplete="off"
          className="form-control w-100"
          placeholder="Palabra a buscar"
          name="name"
          type="text"
          value={name}
          onChange={handleInputChange}
        />

        <button
          onClick={saveWordState}
          className="my-2 w-100 btn-sm btn-primary btn-lg btn-block"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};
