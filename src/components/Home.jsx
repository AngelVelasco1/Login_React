
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login/");
  };
  return (
    <>
       <h1>Welcome to Home!</h1>
        <button onClick= {handleLogin}>Login</button>
    </>
 
  )
}
