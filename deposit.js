function Deposit(){
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState('');
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
    console.log(deposit);
    if (!validate(deposit,   'deposit'))  return;
    ctx.users[0].balance += Number(deposit);
    setShow(false);
  }

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return(
    <Card
    bgcolor="success"
    header="Deposit"
    status={status}
    body={show ? (
      <>
      <form onSubmit={handleAmountChange}>
      <input type="input" className="form-control" id="deposit"
      placeholder="Deposit" value={deposit} onChange={e => setDeposit(e.
        currentTarget.value)} />
        </form>
      </>
    ):(
      <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-light" onClick=
      {clearForm}>Add another deposit</button>
      </>
    )}
    />
  )
}
