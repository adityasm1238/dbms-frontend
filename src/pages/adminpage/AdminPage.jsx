import React from 'react';
import AddProduct from "../../components/add-product/AddProduct";
import AdminHeader from "../../components/admin-header/AdminHeader";
import NavigationSideBar from '../../components/navigation/Navigation';
import AddUser from '../../components/add-user/AddUser';
import  ListUsers from "../../components/list-users/ListUsers";
import { getAuthHeader, getAuthToken, getUserId } from '../../utils/Authorization';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav : [{key:"1",active:true, name:'Add Users'},{key:"2",active:false, name:'Add Products'}],
            username: '',
            password: '',
            userType: 'admin',
            currentPage:"1",
            user:''
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount()
    {
        const {history} = this.props;
        let authToken = getAuthToken();
        let id = getUserId();
        if(id && authToken)
        {
             axios.post("http://localhost:3030/api/admin/getUser",{id},getAuthHeader(authToken)).then(res => {
                this.setState({user:res.data},()=>{console.log(this.state.user);});
              }).catch(e=>{
                  localStorage.clear();
                  this.props.handleLogout();
                history.push('/');
              });

              axios.post("http://localhost:3030/api/admin/getAll",{id,userType:"admin"},getAuthHeader(authToken)).then(res => {
                console.log(res.data);
              }).catch(e=>{
                 console.log(e);
              });
        }
        else
        {
            history.push('/');
        }
       
    }

    handleMenu = event =>{
        event.preventDefault();
        this.setState({currentPage:event.target.id});
    
    }

    logout()
    {
        const {history} = this.props;
        localStorage.clear();
        this.props.handleLogout();
      history.push('/');
    }

    render(){
        return(
        <div >
            <NavigationSideBar navitems={this.state.nav} navtitle="FarmEasy" handleMenuClick={this.handleMenu} currentPage={this.state.currentPage}/>
            <div className="d-flex flex-column" id="content-wrapper">
                <AdminHeader userName={(this.state.user)?this.state.user.username:"Loading"} handleLogout={this.logout}/>
                {(this.state.currentPage==="1")?
                (<div className="bg-warning">
                <AddUser userName="Test" />
                <ListUsers />
                </div>)
                :(this.state.currentPage==="2")?
                    (<AddProduct/>)
                :null
            }
                 
            </div>
           
        </div>
        );
    }
};

export default withRouter(AdminPage);