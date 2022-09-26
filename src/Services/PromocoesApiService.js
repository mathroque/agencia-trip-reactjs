import axios from "axios";

const urlPromocoesApi = "http://localhost:8080/promocao";

export const getPromocoes = () => {
  return axios.get(urlPromocoesApi).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
};
