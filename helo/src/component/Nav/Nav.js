import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {update_username, update_id, update_img} from '../../ducks/reducer';


 function Nav(){
    return(
        <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

function mapStateToProps(state){
    const {username, id, img } = state;
    return{
        username,
        id,
        img
    }
}

export default connect(mapStateToProps, {update_username, update_id, update_img})(Nav);