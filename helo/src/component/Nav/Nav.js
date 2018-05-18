import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


export default function Nav(){
    return(
        <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

