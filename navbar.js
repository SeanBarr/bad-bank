function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#/createaccount/">Create Account</a>
        <a className="nav-link" href="#/deposit/">Deposit</a>
        <a className="nav-link" href="#/withdraw/">Withdraw</a>
        <a className="nav-link" href="#/balance/">Balance</a>
        <a className="nav-link" href="#/alldata/">AllData</a>
      </div>
    </div>
  </div>
</nav>
  
    </>
  );
}