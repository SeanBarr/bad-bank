import { useState, useRef } from 'react';
import { useUserContext } from '../context/Context';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

  const LogIn = () => {
    const { logIn, userLogIn  } = useUserContext()
    const email = useRef()
    const password = useRef()
    const [isHidden, setIsHidden] = useState(true)
    const [isProcessing, setIsProcessing] = useState(false)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    let error = false;
    
    const toggle = () => {
    setIsHidden(!isHidden)
    }
    
    const validateLogInForm = () => {
    if (!(email.current.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
    setEmailError('Please enter a valid email address!');
    error = true;
    setTimeout(() => {
    setEmailError(null)
    }, 2500);
    }
    if (password.current.value === "") {
    setPasswordError('Please enter your password!');
    error = true;
    setTimeout(() => {
    setPasswordError(null)
    }, 2500);
    }
    if (error) return false
    return true;
    }
    
    const handleLogIn = (e) => {
    e.preventDefault()
    error = false;
    if (!validateLogInForm()) return;
    setIsProcessing(true)
    logIn(email.current.value, password.current.value)
    setIsProcessing(false)
    }
    
    return (
    <> {!userLogIn ?
    <Card
    bgcolor="light"
    txtcolor="dark"
    header="Log In"
    body={(
    <form onSubmit={handleLogIn} className="form-md row gy-3 needs-validation" noValidate>
    <div className="col-12 position-relative mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className={emailError ? "form-control is-invalid" : "form-control"} 
    id="email" ref={email} aria-describedby="emailValidationFeedback" required />
    <div id="emailValidationFeedback" className="invalid-tooltip">{emailError}</div>
    </div>
    <div className="col-12 mb-4">
    <label htmlFor="password" className="form-label">Password</label>
    <div className='position-relative'>
    <input type={isHidden ? "password" : "text"} 
    className={passwordError ? "form-control pe-5 is-invalid" : "form-control pe-5"} id="password" 
    ref={password} aria-describedby="passwordValidationFeedback" required />
    {isHidden ? <BsFillEyeFill className={passwordError ? 
      "fs-5 position-absolute top-50 end-0 translate-middle-y me-3 z-1" : 
      "fs-5 position-absolute top-50 end-0 translate-middle-y me-3"} 
      onClick={toggle} /> : <BsFillEyeSlashFill className={passwordError ? 
      "fs-5 position-absolute top-50 end-0 translate-middle-y me-3 z-1" : 
      "fs-5 position-absolute top-50 end-0 translate-middle-y me-3"} onClick={toggle} />}
    <div id="passwordValidationFeedback" className="invalid-tooltip">{passwordError}</div>
    </div>
    </div>
    <div className="col-12">
    <button className="btn btn-primary" type="submit" disabled={isProcessing}>Log In</button>
    </div>
    </form>
    )}
    />
    : <Navigate to="/" />
    }</>
    )
    }
    export default LogIn;