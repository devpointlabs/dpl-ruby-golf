import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/score_card'>
            <Menu.Item name='Score Card' />
          </Link>
          <Link to='/leaderboard'>
            <Menu.Item name='Leaderboard' />
          </Link>
          <Link to='#' onClick={() => dispatch(handleLogout(history))}>
            <Menu.Item name='Leave' />
          </Link>
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/clubhouse'>
          <Menu.Item name='Become A Member' />
        </Link>
        <Link to='/tee_off'>
          <Menu.Item name='Tee Off' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='Tee Box' />
          </Link>
          <Link to='/rules'>
            <Menu.Item name='Rules' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
