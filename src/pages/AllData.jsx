import { useUserContext } from "../context/Context";
import Card from '../components/Card';
import { Navigate } from "react-router-dom"; 

const AllData = () => {
  const { userList, userLogIn } = useUserContext();
  const rows = userList.map(user =>{
    return(
    <tr key={user.id}>
     <td>
      {user.name}
     </td>
     <td>
       {user.email}
     </td>
     <td>
       {user.password}
     </td>
    </tr>
  )
  })
  
  return (
    <>
    {userLogIn?
    <Card bgcolor="primary" txtcolor="light" header="All Data" 
    body={(
      <table className="table table-bordered">
      <thead>
      <tr className="table-primary"> 
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
    )}/>
     :<Navigate to="./login"/>}
     </>
  );
}

export default AllData;