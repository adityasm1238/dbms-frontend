
import React from 'react';
import { Card, CardHeader , CardBody} from 'reactstrap';



class ListUsersItem extends React.Component{
    render(){
        return(
            <Card className="shadow-lg mb-4">
                
                    <CardHeader className=" d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">Name</h6>
                        <a href="" className="btn btn-danger btn-circle ml-1" role="button">
                            <i className="fas fa-trash text-white"></i>
                        </a>
                    </CardHeader>
                    <CardBody>
                        <p className="m-0">Text</p>
                    </CardBody>
             
            </Card>
        );
    }
};

export default ListUsersItem;