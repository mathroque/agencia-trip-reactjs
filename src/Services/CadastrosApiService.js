import axios from "axios";

const urlCadastrosApi = "http://localhost:8080/cliente";

export const getCadastros = () => {
  return axios.get(urlCadastrosApi).then((response) => {
    return response.data;
  });
};

export const getOneCadastro = (id) => {
  return axios.get(urlCadastrosApi + "/" + id).then((response) => {
    return response.data;
  });
};

export const postCadastro = (newCadastro) => {
  const camposCadastro = {
    email: newCadastro.email,
    senha: newCadastro.password,
    nome: newCadastro.name,
  };
  return axios
    .post(urlCadastrosApi, camposCadastro)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // console.log(error.response.data);
      return error;
    });
};
