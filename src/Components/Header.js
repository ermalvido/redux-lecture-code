import React from 'react';
import {connect} from 'react-redux';

const Header = props => (
    <header className='main-header'>
        <h1>Pokemon Trainer</h1>
        <h1>{props.user.username}</h1>
    </header>
)

const mapStateToProps = reduxState => {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps)(Header);