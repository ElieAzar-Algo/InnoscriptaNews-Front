import Form from '../components/common/Form';
import Navbar from '../components/header/Navbar';
import { useAuth } from '../context/AuthContext';

function Home() {
    const { token } = useAuth()
  console.log("009 HOME AGEE TOKENNN", token)
  return (
    <div>
        <Navbar/>
        <h1>this is a Home page</h1>
        <button onClick={()=>console.log(token)}>PRINT</button>

    </div>
  );
}

export default Home;
