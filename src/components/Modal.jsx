import { Link } from 'react-router-dom';

const Modal = (props) => {
    
    return (
       <div className="modal d-block" tabIndex="-1">
           <div className="modal-dialog">
           <div className="modal-content">
               <div className="modal-header bg-dark">
                <h5 className="modal-title">{props.title}</h5>
               </div>
               <div className="modal-body text-dark">
               <p>{props.text}</p>
               </div>
               <div className="modal-footer bg-dark">
                {props.includeLink?
                <>
                <button type="button" className={`bg-${props.btncolor}`} 
                onClick={props.event}>{props.btntext}</button>
                <Link className={`btn btn-${props.btncolor}`} to="/login">{props.linkText}</Link>
                </> 
                : <button type="button" className={`bg-${props.btncolor}`} 
                onClick={props.event}>{props.btntext}</button>}
               </div>
            </div>
            </div>
        </div>
        );
    }   
    export default Modal;