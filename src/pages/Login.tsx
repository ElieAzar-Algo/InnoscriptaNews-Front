import Form from '../components/common/Form';
import { Pars } from '../components/common/pars.type';
import { Container, Title} from './styles/login.style'

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
      <Title>INNOSCRIPTA NEWS</Title>
      <Form fields={fields} 
            method="POST"
            endpoint="/login"
            />
    </Container>
  
  );
}

export default Login;
