import Form from '../components/common/Form';
import { Pars } from '../components/common/pars.type';
import { Container } from './styles/login.style'

var fields :Pars[] = [
    {
      id: 'email',
      component:'TextField',
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
    },
    {
      id: 'password',
      component:'TextField',
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
    },
]

function Login() {


  return (
    <Container>
      <h1> Login </h1>
      <Form fields={fields} 
            method="POST"
            endpoint="/login"
            />
    </Container>
  
  );
}

export default Login;
