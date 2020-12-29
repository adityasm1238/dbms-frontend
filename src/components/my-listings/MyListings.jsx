import React from 'react';
import { Container,  Spinner} from 'reactstrap';
import { getAuthHeader, getAuthToken, getUserId } from '../../utils/Authorization';

import axios from 'axios';
import MyListingItem from "../my-listing-item/MyListingItem";

class MyListing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : '',
            listings:[]
        }

        this.getMyListings = this.getMyListings.bind(this);
       
    }

    
    componentDidMount()
    {
        this.getMyListings();
    }

    getMyListings()
    {
        let authToken = getAuthToken();
        let id = getUserId();
        axios.post("http://localhost:3030/api/farmer/allListing",{id},getAuthHeader(authToken)).then(res => {
                this.setState({listings:res.data});
            }).catch(e=>{
                console.log(e);
            });
    }


    render(){
        return(
            <Container className="bg-info p-3 shadow-lg">
                <Container className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 className="text-light mb-0">My Listings</h3>
                    </div>
                </Container>
                <Container className="container-fluid mb-5 ">
                <div>
                {
                    this.state.listings.length>0?
                   this.state.listings.map(listing=>(
                    <MyListingItem user={listing} products={this.props.products} listingChanged={this.getMyListings}/>
                   ))
                   :
                            (<div className="text-center"><Spinner color="primary"></Spinner></div>)  
                }
                </div>
                </Container>
            </Container>
        );
    }
};

export default MyListing;