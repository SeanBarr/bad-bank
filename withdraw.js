function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }
  
  function handleAmountChange(){
    console.log(withdraw);
    if (!validate(withdraw,   'withdraw'))  return;
    ctx.users[0].balance -= Number(withdraw);
    setShow(false);
  }

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return(
    <Card
    bgcolor="success"
    header="Withdraw"
    status={status}
    body={show ? (
      <>
      <form onSubmit={handleAmountChange}>
      <input type="input" className="form-control" id="withdraw"
      placeholder="Withdraw" value={withdraw} onChange={e => setWithdraw(e.
        currentTarget.value)} />
        </form>
      </>
    ):(
      <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-light" onClick=
      {clearForm}>Add another withdrawal</button>
      </>
    )}
    />
  )
}