function AllData(){
  const ctx = React.useContext(UserContext);
  const rows = ctx.users.map((user, index) =>{
    return(
    <tr key={index}>
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
    <h1>AllData</h1>
    <div className="container">
      <table className="table table-bordered">
      <thead>
      <tr className="table-secondary"> 
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
    </div>
    </>
  );
}