import React from 'react';
import CardContainer from '../CardContainer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import redLogo from '../../images/film-red.svg';
import * as API from '../../utilities/API';

export const MainPage = ({ user, signOut, movies }) => {
  const handleSignOut = (event) => {
    event.preventDefault();
    signOut()
  }
  return (
    <div className='MainPage'>
      <div className="main-header" >
        <button
          className='all-favorites'
          onClick={}
        >
          <NavLink
            to='/favorites'
            className='nav-link'>Favorites
          </NavLink>
        </button>
        <div className="header-title">
          <img className="main-logo" alt="" src={redLogo} />
          <h3 className="header-text">MovieTracker</h3>
        </div>
        { user.loggedIn
          ? <button 
            className='sign-out' 
            onClick={handleSignOut}>
              <NavLink 
                to='/' 
                className='nav-link'>Sign Out
              </NavLink>
          </button>
          : <button 
            className='sign-in'>
            <NavLink 
              to='/login' 
              className='nav-link'>Sign In</NavLink>
          </button>
          }
      </div>
      <div className="header-container-splitter"></div>
      <CardContainer movies={movies}/>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
