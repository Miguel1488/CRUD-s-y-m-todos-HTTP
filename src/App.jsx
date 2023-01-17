import axios from 'axios'
import { useEffect, useState } from 'react'
import UsersList from './compones/UsersList'
import './App.css'
import UsersForm from './compones/UsersForm'

function App() {

  const [usersList, setUsersList] = useState([]);
const [userSelected, setUserSelected]= useState(null);

 useEffect(()=> { 
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setUsersList(res.data));
  
}, [])


const getUsers = () => {
  axios.get('https://users-crud.academlo.tech/users/')
  .then(res => setUsersList(res.data));
}


const selectUser = (user) => {
  setUserSelected(user)
}



  return (

    <div>
      <UsersForm getUsers ={getUsers}
userSelected ={userSelected}
  />
      <UsersList usersList = {usersList} 
      selectUser={selectUser}
      getUsers={getUsers}
      />
   
    </div> 
    )
   
  }
  
 
export default App
