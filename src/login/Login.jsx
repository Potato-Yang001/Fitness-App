import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from 'react-bootstrap'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function login() {
        const isCorrectUsername = username === 'bla'
        const iscorrectPassword = password === '1234'

        if (isCorrectUsername && iscorrectPassword) {
            navigate('/home')
        } else {
            setError(true)
        }
    }

    return (
        <Container>
            <div className="jumbotron">
                <h1 className="my-3">Fitness journey starts here</h1>
            </div>
            <h2 className="mb-3">Login Your Account</h2>
            <Form>
                <Form.Group className='mb-3' controlId='username'>
                    <Form.Label>👤Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Please enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Please enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {error &&
                    <div className="text-danger mb-3">Sorry, wrong username or password</div>
                }
            </Form>
            <Button className='btn btn-primary' onClick={login}>
                <i className="bi bi-box-arrow-in-right me-2"></i> Login
            </Button>
        </Container>
    )
}