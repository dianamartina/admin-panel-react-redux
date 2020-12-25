import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '#6dbbc0',
      color:'#222222',
      users: [],
      posts:[],
      showUsers: true,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const usersFilter = users.filter(user => user.id < 6);
        users.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: usersFilter});
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(posts => {
          const postsFilter = posts.filter(post => post.id < 6);
          this.setState({posts: postsFilter});
          // console.log(posts);
        })
  }

   handleBackgroundChange(event) {
    this.setState({backgroundColor: event.target.value});
  }

  handleColorChange(event) {
    this.setState({color:event.target.value});
  } 

  handlerAddUsers() {    
    this.setState((prevState) => {
      return {users: prevState.users, showUsers: true};
    });
    
  }

  handlerAddPosts() {        
    this.setState((prevState) => {
      return {posts: prevState.posts, showUsers: false };
    }); 
          
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

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
  
  deleteUser(id) {
    const newUsers = this.state.users.filter((user) => {
      return user.id !== id//primesc, true userii cu id diferit de cel din delete, acestea vor ajunge in array-ul newUsers
    });
    
    this.setState({users: newUsers})                   
  }

  render() {

   

    return(
      <div className="app" style={{backgroundColor: this.state.backgroundColor, color:this.state.color}}>
        <h1>Admin panel </h1>
        {/* Show change background color button */}
        <div className="change-position">
          <div className="change change-bkgcolor">
            <p>Change background</p>
            <input type="color" onChange={(event) => this.handleBackgroundChange(event)} value={this.state.backgroundColor} />
          </div>  
          {/* Show change font color button */}
          <div className="change change-color">
            <p>Change font color</p>
            <input type="color" onChange={(event)=> this.handleColorChange(event)} value={this.state.color}/>
          </div>  
        </div>  
                      
        <div className="app-btn-position">
         
          <button 
            className={this.state.showUsers === true ? "app-btn-list btn-active" : "app-btn-list btn-not-active"} 
            onClick={()=> this.handlerAddUsers()}>Show Users
          </button>

          <button 
            className={this.state.showUsers === false ? "app-btn-list btn-active" : "app-btn-list btn-not-active"}  
            onClick={()=> this.handlerAddPosts()}>Show Posts            
          </button>

        </div>
           
          {/* Show users or posts */}
          {this.state.showUsers === true 
          ? <div className="app-boxes-position">
              <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)} clearItems={( name, email, isGoldClient)=> this.clearItems( name, email, isGoldClient)}/>
              <UserList users={this.state.users} salary={`1000E`} img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80" alt="profile" deleteUser={(id)=>this.deleteUser(id)}/>
            </div>          
          : <PostList posts={this.state.posts} /> 
          } 
        
      </div>
    );
  }
}

export default App;
