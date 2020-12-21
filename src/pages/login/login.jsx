import React from 'react';
import '../style/login.css'
import { Button, Form, Input, FormGroup, Row, Col, Label } from 'reactstrap';

const rowLogin = {
    width: '80%',
    height: '500px',
    padding: '10px 50px 0 50px',
    marginTop: '50px',
    margin: '0 auto',
    backgroundColor: 'aqua',
    border: '1px solid'
}
const containerLogin = {
    padding: '50px 0 0 0'
}
const textLogin = {
    margin: '20px 0 30px 0',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: '40px'
}


class Login extends React.Component {
    render() {
        return (
            <div style={containerLogin} >
                <Row style={rowLogin}>
                    <Col>
                        <h2 style={textLogin} >Login Refactory </h2>
                        <Form>
                            <FormGroup>
                                <Label for="exampleInputEmail1">Username </Label>
                                <Input type="email" className="form-control" placeholder="Masukan username anda" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleInputPassword1">Password</Label>
                                <Input type="password" className="form-control" placeholder="Password" />
                            </FormGroup>
                            <FormGroup check>                                <Input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <Label className="form-check-label" for="exampleCheck1">Check me out</Label>
                            </FormGroup>
                            <Button type="submit" color="primary" block className="btn-login">Submit</Button>
                            <Row >
                                <Col className="lupa">Lupa Password ?</Col>
                                <Col className="daftar-baru">Belum Punya Akun? Daftar</Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Login;