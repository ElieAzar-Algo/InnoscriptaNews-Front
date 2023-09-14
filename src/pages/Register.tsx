import Form from '../components/common/Form';
import { Pars } from '../components/common/pars.type';
import { useAuth } from '../context/AuthContext';
import { Container } from './styles/login.style'


var fields :Pars[] = [
    {
      id: 'fullName',
      component:'TextField',
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Full Name',
    },
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
    {
      id: 'password_confirmation',
      component:'TextField',
      type: 'password',
      name: 'password_confirmation',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
    },
]

function Register() {
    

  return (
    <Container>
      <h1> Register </h1>

      <Form fields={fields} 
            method="POST"
            endpoint="/register"
            />
    </Container>
  );
}

export default Register;
