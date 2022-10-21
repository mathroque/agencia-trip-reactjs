import axios from "axios";

const urlPromocoesApi = "http://localhost:8080/destino";

export const getDestinos = () => {
  return axios.get(urlPromocoesApi).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
};