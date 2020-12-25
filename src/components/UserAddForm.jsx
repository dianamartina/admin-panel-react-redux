import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }  
         
    render() {
        
        const {name, email, isGoldClient} = this.state;

        return (

            
            <form
                className="app-boxes user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
            >
                <h2 >Add users:</h2>

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => {this.updateEmail(event); }}
                />
                <label htmlFor="is-gold-client">GOLD Client
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                </label>
                <div className="user-add-form-btn-pos">
                    <input className="user-add-form-btn" type="submit" value="Add user"/>
                    <input className="user-add-form-btn btn-clear" type="reset" value="Clear data" 
                    onClick={(event) => {this.props.clearItems(event,name, email, isGoldClient);  
                        this.setState({name: '', email: '', isGoldClient: false});  console.log(this.ref)
                    }}/>
                </div>                
                
            </form>
        )
    }
}

export default UserAddForm;