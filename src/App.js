import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fontawesome-all.min.css';
import AdminPage from "./pages/adminpage/AdminPage";
import LoginPage from './components/login/login';
import { getAuthToken, getUserId } from './utils/Authorization';



class App extends React.Component{
  

  constructor(props){
    super(props);
    this.state = {
      authToken : '',
      id: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

}

  componentDidMount()
  {
    let authTokenSaved = getAuthToken();
  
    let idSaved = getUserId();
    if(authTokenSaved && idSaved){
       this.setState({id:idSaved,authToken:authTokenSaved});
      
    }
    else
      localStorage.clear();
    
  }

  handleLogout()
  {
    this.setState({
      authToken : '',
      id: ''
    });
  }

  handleLogin(id,authToken)
  {
    this.setState({id:id,authToken:authToken});
  }

  render(){
    return (
      <Switch>
            <Route exact path = '/' 
            render={()=>(this.state.authToken && this.state.authToken.length>0)?(<Redirect to='/admin' />):(<LoginPage handleLogin={this.handleLogin}/>)}/>
            {/* <Route exact path='/admin' render={()=> 
              this.state.currentUser ? (<AdminPage />):
              (<Redirect to='/' />) }/> */}
            <Route exact path = '/admin' render={()=>(<AdminPage handleLogout={this.handleLogout}/>)}/>
            
       </Switch>
    );
  }
};

export default App;
