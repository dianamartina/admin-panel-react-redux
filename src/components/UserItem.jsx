import React from 'react';
import './UserItem.css';
import { connect } from "react-redux";
import {deleteUser} from '../redux/actions/user-action';

function UserItem(props) {
    const {id, name, email, isGoldClient,salary, img, alt, deleteUser} = props;

    const user = {
        id, name, email, isGoldClient,salary, img, alt
    }

    return (
        <div className="user-item item-border">
            <img src={img} alt={alt}/>
            <h3 className="user-item-name-email">{ name }</h3>
            <p className="user-item-name-email">{ email }</p>
            <p className="user-item-salary">{salary}</p>
            <div className="user-item-gold-client">
                { isGoldClient
                    ? <p >GOLD Client</p>
                    : <p>{null}</p>
                }
            </div >
            <button className="user-item-btn" onClick={ () => deleteUser(user) }>Delete user</button>
            
        </div>
    );
}

// export default UserItem;

function mapDispatchToProps(dispatch) {
  
    return {       
        deleteUser: (payload) => {
            dispatch(deleteUser(payload))
        }
       
    };
  }
  
  export default connect(null, mapDispatchToProps)(UserItem);