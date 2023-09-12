import Form from '../components/common/Form';
import { Pars } from '../components/common/pars.type';
import { useAuth } from '../context/AuthContext';

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
    <div>
      <Form fields={fields} 
            method="POST"
            endpoint="/login"
            />
    </div>
  );
}

export default Login;
