import { Container } from "react-bootstrap";
import cake from './images/cake.png';


const Home = () => {
  return (
    <Container className="text-center bg-color">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span> 
        
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src={cake} style={{width: '25%', paddingTop: '3em'}} />
    </Container>
  )
}

export default Home;