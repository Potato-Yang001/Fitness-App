import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from './login/Login';
import Home from './todo/Home';
import AddTodo from './todo/AddTodo';
import EditTodo from './todo/EditTodo';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { TodoContext } from './TodoContext';
import useLocalStorage from "use-local-storage";


function Display() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Fitness</Navbar.Brand>
          <Nav variant='tabs' className='me-auto'>
            <Nav.Link href='/add'>Add Fitness</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', [])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route element={<Display />}>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/add' element={<AddTodo />}></Route>
            <Route path='todo/:id' element={<EditTodo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>

  )
}