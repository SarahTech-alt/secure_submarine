import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Secure Submarine</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>

        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>


            <Link className="navLink" to="/secrets">
              Secrets Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
        <Link className="navLink" to='/maps'>
          Map
        </Link>
        <Link className="navLink" to='/addImage'>
          Add Image
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
