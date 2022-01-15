function Deposit(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);

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
    ctx.users.push({balance:500});
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
      Deposit<br/>
      <input type="input" className="form-control" id="deposit"
      placeholder="Deposit" value={deposit} onChange={e => setDeposit(e.
        currentTarget.value)} /><br/>
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