function CreateAccount(){
  const ctx = React.useContext(UserContext);

  function handle(data){
    ctx.users.push({name:data.name,email:data.email,password:data.password,balance:100});
    console.log(ctx.users)
    return true;
  }

  return (
    <BankForm
    bgcolor="warning"
    label="Create Account"
    handle={handle}
    hideAmount={true}
    successButton="Add another account"
    />
  )
} 