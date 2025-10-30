import axios from "axios";



const REST_API_BASE_URL = "http://localhost:3000/api/v1/pets";

export const getAllPets = () => axios.get(REST_API_BASE_URL);