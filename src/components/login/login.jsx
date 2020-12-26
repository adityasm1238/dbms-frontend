import React from 'react';
import { Container, Row, Col , Card , CardBody, Form , FormGroup} from 'reactstrap';
import './login.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            userType: 'admin'
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        console.log(this.state);
    }


    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className="bg-gradient-primary" >
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" lg="6" xl="6">
                            <Card className="shadow-lg o-hidden border-0 my-5">
                                <CardBody className="p-0">
                                    <Row>
                                        <Col lg="12">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Login</h4>
                                                </div>
                                                <Form className="user" onSubmit={this.handleSubmit} >
                                                    <FormGroup>
                                                        <label>User Type:</label>
                                                        <Row>
                                                            <Col>
                                                                <input
                                                                    type="radio"  
                                                                    name="userType" 
                                                                    value="admin"
                                                                    onChange={this.handleChange}
                                                                    checked={(this.state.userType==="admin")}
                                                                    required />
                                                                 <span style={{padding:'1rem'}}>Admin</span>
                                                            </Col>

                                                            <Col>
                                                                <input type="radio"  
                                                                    value="farmer"
                                                                    onChange={this.handleChange}
                                                                    name="userType" 
                                                                    checked={(this.state.userType==="farmer")}
                                                                    required />
                                                                <span style={{padding:'1rem'}}>Farmer</span>
                                                            </Col>

                                                            <Col>
                                                                <input type="radio"  
                                                                    value="buyer"
                                                                    onChange={this.handleChange}
                                                                    name="userType" 
                                                                    checked={(this.state.userType==="buyer")}
                                                                    required />
                                                                <span style={{padding:'1rem'}}>Buyer</span>
                                                            </Col>
                                                        </Row>
                                                        
                                                        
                                                       
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label>Username:</label>
                                                        <input className="form-control form-control-user" 
                                                        type="text"  
                                                        placeholder="Enter Username" 
                                                        name="username" 
                                                        onChange={this.handleChange}
                                                        value={this.state.username}
                                                        required />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label>Password:</label>
                                                        <input className="form-control form-control-user" 
                                                        type="password"
                                                        placeholder="Password" 
                                                        name="password" 
                                                        onChange={this.handleChange}
                                                        value={this.state.password}
                                                        required />
                                                    </FormGroup>
                                                    <button className="btn btn-primary btn-block text-white btn-user" name="sub" type="submit">Login</button>
                                                    
                                                </Form>
                                                <div className="text-center" color='red'></div>
                                                <div className="text-center" color='green'></div>
                                            </div>

                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            );
        }
    };

export default LoginPage;