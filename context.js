const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: 'text-white';
        return 'card mb-3 ' + bg + txt;
    }


    return (
       <div className={classes()} style={{maxWidth: "18rem"}}>
           <div className="card-header">{props.header}</div>
           <div className="card-body">
               {props.title && (<h5 className="card-title">{props.title}</h5>)}
               {props.text && (<p className="card-text">{props.text}</p>)}
               {props.body}

           </div>
           </div>
        );

    } 

    function BankForm(props){
        const [isSubmited, setIsSubmited] = React.useState(false);
        function Account(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password; 
        }

    function createAccount(e){
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const user = new Account(name,email,password);
        alert('Successfully Created Account');
        setIsSubmited(props.handle(user));
        }

        return(
            <div className="card m-auto card-md">
            <form className="card-body" onSubmit={createAccount}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" name="name"/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="email" name="email"/>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" id="password" type="password" name="password"/>
                </div>
                <button className={`btn btn-${props.bgcolor}`} type="submit">{isSubmited ? props.successButton : props.label}</button>
            </form>
            </div>
        )
    }