import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom';
import Register from './Register';
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pug drinking vinegar woke poutine DIY. 
            Af enamel pin kombucha typewriter prism chia coloring
            book tonx heirloom echo park freegan viral raclette.
            Salvia fixie shabby chic small batch.
          </p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
      </div>
    </Wrapper>
  );
}


export default Landing;
