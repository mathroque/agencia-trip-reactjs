import axios from "axios";

const urlCadastrosApi = "http://localhost:8080/cadastros";

export const getCadastros = () => {
  axios.get(urlCadastrosApi).then((response) => {
    return response.data;
  });
};

export const postCadastro = (newCadastro) => {
  axios.post(urlCadastrosApi, newCadastro).then((response) => {
    return response.data;
  });
};
