import { Badge, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";


export default function TodoCard({ todo }) {
    const complete = todo.complete
    const border = complete ? "success" : "danger";
    const [timer, setTimer] = useState(0)
    const [timerInterval, setTimerInterval] = useState(null)
    const [date, setDate] = useState(new Date());
    const setTodos = useContext(TodoContext).setTodos

    const startTimer = () => {
        if (timerInterval === null) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1)
            }, 1000)
            setTimerInterval(intervalId)
        }
    }

    const pauseTimer = () => {
        clearInterval(timerInterval)
        setTimerInterval(null)
    }

    const resetTimer = () => {
        clearInterval(timerInterval)
        setTimerInterval(null)
        setTimer(0)
    }

    useEffect(() => {
        return (() => { clearInterval(timerInterval) })
    }, [timerInterval])

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    const deleteTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.filter((prevTodos) => prevTodos.id !== todo.id))
    }

    return (
        <>
            <Card border={border} className="my-3" style={{ width: '500px' }}>
                <Card.Header bg={complete}>{!complete && 'Not'} completed</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <p>Date: {date.toLocaleString()}</p>
                    <p>Timer: {timer} seconds</p>
                    <Button onClick={startTimer} variant="primary" className="mx-2">
                        <i className="bi bi-play"></i>Start
                    </Button>
                    <Button onClick={pauseTimer} variant="primary" className="mx-2">
                        <i className="bi bi-pause-fill"></i>Pause
                    </Button>
                    <Button onClick={resetTimer} variant="warning" className="mx-2">
                        <i className="bi bi-arrow-repeat"></i>Reset
                    </Button>
                    <Button href={`todo/${todo.id}`} className="mx-2" variant="info">
                        <i className="bi bi-pencil-square"></i> Edit
                    </Button>
                    <Button onClick={deleteTodo} variant="danger">
                        <i className="bi bi-trash"></i>Delete
                    </Button>
                    <Badge bg={complete ? "success" : "danger"} pill className="mx-2">
                        {complete ? "success" : "danger"}
                    </Badge>
                </Card.Body>
            </Card>
        </>
    )
}