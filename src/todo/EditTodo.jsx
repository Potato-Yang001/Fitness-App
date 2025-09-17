import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


export default function EditTodo() {

    const setTodos = useContext(TodoContext).setTodos
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    const currentTodo = todos.filter((todo) => todo.id === id)
    const [title, setTitle] = useState(currentTodo.title)
    const [description, setDescription] = useState(currentTodo.description)
    const [complete, setComplete] = useState(currentTodo.complete)
    const [unit, setUnit] = useState(currentTodo.unit)

    function updateTodo(event) {
        event.preventDefault()
        const updateTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, title, description, unit, complete } : todo
        );
        setTodos(updateTodos)
        navigate("/home")
    }

    return (
        <Container>
            <h1 className="my-3">Edit Fitness</h1>
            <Form onSubmit={updateTodo}>
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
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='mySelect    '>
                    <Form.Label>Fitness tests and track progress: Units</Form.Label>
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