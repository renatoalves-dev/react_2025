import React, { useEffect, useState } from 'react'
import { getAllPets } from '../../services/petsService';
import { useNavigate } from 'react-router-dom';


const ListaPets = () => {

const [pets, setPets] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {

    listarPets();

  }, []);

  async function listarPets(){

   await getAllPets().then((reponse) =>{
  
      
      setPets(reponse.data);

      console.log(reponse.data);

    }).catch((error) =>{

        console.log(error);

    });

  }



  return (

    <div>
      <h2 style={{ textAlign: 'center' }}>Lista de Pets</h2>

      <table className="table table-striped-columns table-hover table-bordered">
        <thead>
          <tr>
            
            <th>Id:</th>                     
            <th>Nome:</th>
            <th>Espécie:</th>
            <th>Raça:</th>
            <th>Cor:</th>
            <th>Tamanho:</th>
            <th>Peso:</th>
            <th>Gênero:</th>
            <th>Data Nascimento:</th>
            <th>Pai:</th>
            <th>Mãe:</th>
            <th>Observações:</th>
            <th>Atualizar</th>
            <th>Excluir</th>
            
          </tr>
        </thead>
        <tbody>
            {pets.map((pet) => (

            
          <tr key = {pet._id}>
            
            <td>{pet._id}</td>
            <td>{pet.name}</td>
            <td>{pet.specie}</td>
            <td>{pet.breed}</td>
            <td>{pet.color}</td>
            <td>{pet.height}</td>
            <td>{pet.weight}</td>
            <td>{pet.gender}</td>
            <td>{pet.birthDate}</td>
            <td>{pet.father}</td>
            <td>{pet.mother}</td>
            <td>{pet.observations}</td>
            <td><button className="btn btn-warning"  onClick={() => atualizarCliente(cliente._id)}><i class="bi bi-pen"></i>Atualizar</button></td>
            <td><button style={{marginLeft: '10px'}} className="btn btn-danger" onClick={() => removerCliente(cliente._id)}><i className="bi bi-trash"></i> Excluir</button></td>
          </tr>
          ))}

        </tbody>  
      </table>
    </div>
  )
}

export default ListaPets
