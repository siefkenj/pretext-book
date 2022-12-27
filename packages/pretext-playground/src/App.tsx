import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileEditor } from "./components/file-editor";

function App() {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>PreTeXt Playground</Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid className="main-area my-2" >
                <FileEditor />
            </Container>
        </React.Fragment>
    );
}

export default App;
