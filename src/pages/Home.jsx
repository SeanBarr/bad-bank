import { useUserContext } from '../context/Context';
import { Navigate } from 'react-router-dom';
import Card from '../components/Card';
import image from '../assets/bank.png';

const Home = () => {
  const { userLogIn } = useUserContext();
  return (
    <>
    {userLogIn?
    <Card
      bgcolor="primary"
      txtcolor="white"
      header={`Welcome ${userLogIn.name} to the BadBank Landing Page`}
      title="Welcome to the bank"
      text="You can use this bank"
      body={(<img src={image} className="img-fluid"
      alt="Responsive image"/>)}
      />
      :<Navigate to="/login"/>}
    </>
  );  
}
export default Home;
