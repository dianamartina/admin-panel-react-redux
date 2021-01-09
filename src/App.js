import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import { connect } from "react-redux";
import {colorChange, backgroundColorChange } from './redux/actions/color-action';
import './App.css';
import {addPosts} from './redux/actions/post-action';
import {addUsers, deleteUser} from './redux/actions/user-action';
import {showUsersList, showPostsList} from './redux/actions/switch-show-actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      // posts:[],
      // showUsers: true,
    };
  }

  componentDidMount() {

    const {showPosts, showUsers} = this.props;
     showPosts();
     showUsers();

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     const usersFilter = users.filter(user => user.id < 6);
    //     users.forEach(user => {
    //       user.isGoldClient = false;
    //     });
    //     this.setState({users: usersFilter});
    //   })
    
      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response=> response.json())
      //   .then(posts => {
      //     const postsFilter = posts.filter(post => post.id < 6);
      //     this.setState({posts: postsFilter});
      //     // console.log(posts);
      //   })
  }

  //  handleBackgroundChange(event) {
  //   this.setState({backgroundColor: event.target.value});
  // }

  // handleColorChange(event) {
  //   this.setState({color:event.target.value});
  // } 

  // handlerAddUsers() {
  //   this.setState((prevState) => {
  //     return {users: prevState.users, showUsers: true};
  //   });
    
  // }

  // handlerAddPosts() {
  //   this.setState((prevState) => {
  //     return {posts: prevState.posts, showUsers: false };
  //   }); 
          
  // }

  // getMaxId(users) {
  //   let maxId = 0;

  //   users.forEach(user => {
  //     if (user.id > maxId) {
  //       maxId = user.id;
  //     }
  //   });

  //   return maxId;
  // }

  validationForm(name, email) {

    let is_valid = true;

    if (name === '' || name.length < 3){
      alert('Please fill the name');
      return is_valid = false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please fill the email adress');
      return is_valid = false;
    }

    return is_valid ;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    const is_valid = this.validationForm(name, email);
    if (is_valid) { 
      this.setState(prevState => {
        return {
          users: [
            ...prevState.users,
            {
              id: this.getMaxId(prevState.users) + 1,
              name,
              email,
              isGoldClient
            }
          ]
        }
      });
      // console.log(this.state);
    }
  };

  clearItems(name, email, isGoldClient) {
    this.setState({
      name: '',
      email: '',
      isGoldClient: false
    });   
  }
  
  // deleteUser(id) {
  //   const newUsers = this.state.users.filter((user) => {
  //     return user.id !== id//primesc, true userii cu id diferit de cel din delete, acestea vor ajunge in array-ul newUsers
  //   });
    
  //   this.setState({users: newUsers})
  // }

  render() {

    const {initialColor, colorChange, initialBackgroundColor, backgroundColorChange,  postData, userData, showUsersList, showPostsList,  showUsersPosts} = this.props;
    
    // console.log("==========this.props.showUsersPosts=", showUsersPosts);

    // console.log('===============this.props= '+JSON.stringify(this.props, null, 4))

    return(
      <div className="app" style={{backgroundColor: initialBackgroundColor, color:initialColor}}>
        <h1>Admin panel </h1>
        {/* Show change background color button */}
        <div className="change-position">
          <div className="change change-bkgcolor">
            <p>Change background</p>
            <input type="color" onChange={(event) => backgroundColorChange(event)} value={initialBackgroundColor} />
          </div>
          {/* Show change font color button */}
          <div className="change change-color">
            <p>Change font color</p>
            <input type="color" onChange={(event)=> colorChange(event)} value={initialColor}/>
          </div>  
        </div>  

        <div className="app-btn-position">
         
          <button 
            className={showUsersPosts === true ? "app-btn-list btn-active" : "app-btn-list btn-not-active"} 
            onClick={()=> showUsersList()}>Show Users
          </button>

          <button 
            className={ showUsersPosts === false  ? "app-btn-list btn-active" : "app-btn-list btn-not-active"}  
            onClick={()=> showPostsList()}>Show Posts
          </button>

          {/* <button 
            className={this.state.showUsers === true ? "app-btn-list btn-active" : "app-btn-list btn-not-active"} 
            onClick={()=> this.handlerAddUsers()}>Show Users
          </button>

          <button 
            className={this.state.showUsers === false ? "app-btn-list btn-active" : "app-btn-list btn-not-active"}  
            onClick={()=> this.handlerAddPosts()}>Show Posts
          </button> */}

        </div>
           
        {/* {console.log("================showUsers=", showUsers)} */}
        {/* {console.log('userData= '+JSON.stringify(userData[1], null, 4))} */}

          { showUsersPosts === true
          
          ? <div className="app-boxes-position">
              {/* <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)} clearItems={( name, email, isGoldClient)=> this.clearItems( name, email, isGoldClient)}/> */}
              <UserList users={userData} salary={`1000E`} img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80" alt="profile" deleteUser={(id)=>this.deleteUser(id)}/>
            </div>
          : (<PostList posts={postData} /> )
          }
      </div>
    );
  }
}

function mapStateToProps (state) {
    // console.log("state.switch.showUsers",state.switch.showUsers);

  return {
      initialColor: state.colorNew.color,
      initialBackgroundColor: state.colorNew.backgroudColor,
      postData: state.post.data,
      userData: state.user.data,
      showUsersPosts: state.switch.showUsersPosts
    
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
      colorChange: (event) => {
          dispatch(colorChange(event))
      },
      backgroundColorChange: (event) => {
        dispatch(backgroundColorChange(event))
      },      
      showPosts: () => {
        dispatch(addPosts())
      },
      showUsers: () => {
        dispatch(addUsers())
      },
      deleteUser: (payload) => {
          dispatch(deleteUser(payload))
      },      
      showUsersList: (payload) => {
        dispatch(showUsersList(payload))
      },
      showPostsList: (payload) => {
        dispatch(showPostsList(payload))
      },

     
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
