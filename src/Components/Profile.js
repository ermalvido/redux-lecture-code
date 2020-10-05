import React from 'react';
import {connect} from 'react-redux';

const Profile = props => {
    // console.log(props)

    return (
        <main className='profile'>
            <h1>{props.user.username}</h1>
            <h2>{props.user.age}</h2>
            <h3>{props.user.email}</h3>
        </main>
    )
}

//mapStateToProps lets you define what you want to subscribe to
const mapStateToProps = reduxState => reduxState;

//connect gets passed mapStateToProps and your component
export default connect(mapStateToProps)(Profile);