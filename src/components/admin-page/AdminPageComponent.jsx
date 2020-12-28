import React from 'react';
import { Container, Row, Col , Card , CardBody, Form , FormGroup} from 'reactstrap';
import './AdminPageComponent.css';

class AdminPageComponent extends React.Component{
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

    render(){}
};