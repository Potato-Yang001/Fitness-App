import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Col, Container } from "react-bootstrap";
import TodoCard from "./TodoCard";

function CardGroup({ todos }) {
    return todos.map((todo) => {
        return (
            <Col className="my-3" key={todo.id}>
                <TodoCard todo={todo} />
            </Col>
        )
    })
}

export default function Home() {
    const todos = useContext(TodoContext).todos

    return (
        <Container>
            <h1 className="my-3">Your Target</h1>
            <CardGroup todos={todos} />
        </Container>
    )
}