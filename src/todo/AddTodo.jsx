import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";


export default function AddTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('');
    const [complete, setComplete] = useState(false)
    const todos = useContext(TodoContext).todos
    const setTodos = useContext(TodoContext).setTodos
    const navigate = useNavigate()

    function addTodo(event) {
        event.preventDefault()
        setTodos([...todos, { id: Date.now(), title, description, unit, complete }])
        navigate("/home")
    }

    return (
        <Container>
            <h1 className="my-3">💪What Fitness Do Today</h1>
            <Form onSubmit={addTodo}>
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        placeholder='What sport you want do'
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        placeholder='What is your target'
                        as='textarea'
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='mySelect    '>
                    <Form.Label>Target do how many</Form.Label>
                    <Form.Select value={unit} onChange={(e) => setUnit(e.target.value)} >
                        <option value="">Choose...</option>
                        <option value="Meter">Meter</option>
                        <option value="Counts">Counts</option>
                        <option value="Seconds">Seconds</option>
                        <option value="Minutes">Minutes</option>
                    </Form.Select>
                    <p>Selected unit: {unit}</p>
                </Form.Group>

                <Form.Check
                    type='checkbox'
                    id='complete'
                    checked={complete}
                    onChange={(e) => setComplete(e.target.checked)}
                />

                <Button type="submit" variant="primary">
                    <i className="bi bi-send"></i> Submit
                </Button>
            </Form>
        </Container>
    )
}