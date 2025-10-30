import axios from "axios";

                      {/*  ROTAS CLIENTES */}

const REST_API_BASE_URL = "http://localhost:3000/api/v1/clients";

export const getAllClientes = () => axios.get(REST_API_BASE_URL);

export const criarCliente = (cliente) => axios.post(REST_API_BASE_URL, cliente);

export const getClienteById = (clienteId) => axios.get(REST_API_BASE_URL + '/' + clienteId);

export const updateCliente = (clienteId, cliente) => axios.put(REST_API_BASE_URL + '/' + clienteId, cliente);

export const deleteCliente = (clienteId) => axios.delete(REST_API_BASE_URL + '/' + clienteId);



  