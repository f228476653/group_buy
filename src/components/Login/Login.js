import React, {useState}  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";


const Login = () => {
    const [signinEmail, setSigninEmail] = useState('');
    const [signinPassword, setSigninPassword] = useState('');
    const history = useHistory();
    const onSubmitSignIn = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            email: signinEmail,
            password: signinPassword
            })
        }).then(response => response.json())
            .then(user => {
            if (user.id) {
                history.push("/",{user:user})
                }
            })
        }

    return (
        <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <div className="pa4 black-80">
                <div className="measure">
                    <div id="sign_up" className="ba b--transparent ph0 mh0">
                        <label className="f1 fw6 ph0 mh0">Login</label>
                        <div className="mt3">
                            <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="db fw6 lh-copy f6">Email address</Form.Label>
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
                            <Button variant="primary" type="submit" onClick={(e) =>onSubmitSignIn(e)}>
                                Submit
                            </Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

//class vs founction
export default Login;