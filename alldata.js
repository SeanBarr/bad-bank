function AllData(){
  const ctx = React.useContext(UserContext);    
  return (
    <h1>Alldata<br/>
      {JSON.stringify(ctx)}
    </h1>
  );
}