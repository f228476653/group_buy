import React, {useState}  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router';
import { signin } from 'utils/common-function'


const Login = ({ loadUser }) => {
    const router = useRouter();
    const [signinEmail, setSigninEmail] = useState('');
    const [signinPassword, setSigninPassword] = useState('');

    const onSubmitSignIn = async() => {
        await signin(signinEmail, signinPassword);
        router.push('/');
    }

    return (
        <>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={e => setSigninEmail(e.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setSigninPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmitSignIn}>
            Submit
        </Button>
        </Form>
      </>
    );
}

//class vs founction
export default Login;