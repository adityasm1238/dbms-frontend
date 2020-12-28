
import React from 'react';
import { Container, Row, Col , Button} from 'reactstrap';
import ListUsersItem from "../list-users-item/ListUsersItem";

import './ListUsers.css';


class ListUsers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayUsers : "admin"
        }

    }

    handleUserChange = event => {
        event.preventDefault();
        this.setState({displayUsers:event.target.id});
    }


    render(){
        return(
            <Container className="bg-white p-3 shadow-lg">
                <Container className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-dark mb-0">Users</h3>
                    </div>
                </Container>
                <Container className="container-fluid mb-5 ">
                <Row className="mb-2">
                    <Col>
                    <Button outline={this.state.displayUsers!=="admin"} onClick={this.handleUserChange} id="admin" className="btn-name" color="danger">Admins</Button>
                    </Col>
                    <Col>
                    <Button outline={this.state.displayUsers!=="farmer"} onClick={this.handleUserChange} id="farmer" className="btn-name" color="danger">Farmers</Button>
                    </Col>
                    <Col>
                    <Button outline={this.state.displayUsers!=="buyer"} onClick={this.handleUserChange} id="buyer" className="btn-name" color="danger">Buyers</Button>
                    </Col>
                </Row>
                <ListUsersItem />
                </Container>
            </Container>
        );
    }
};

export default ListUsers;