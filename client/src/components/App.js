import React, { Component } from 'react';
import NoMatch from './NoMatch';
import { Image } from 'semantic-ui-react';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route, withRouter } from 'react-router-dom';
import golfBall from '../images/golf-ball.png';
import ScoreCard from './ScoreCard';
import Rules from './Rules';
import Leaderboard from './Leaderboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        { this.props.location.pathname !== '/' &&
          <Image size='large' src={golfBall} centered alt='Golf Ball' />
        }
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rules' component={Rules} />
            <ProtectedRoute exact path='/score_card' component={ScoreCard} />
            <ProtectedRoute exact path='/leaderboard' component={Leaderboard} />
            <AuthRoute exact path='/tee_off' component={Login} />
            <AuthRoute exact path='/clubhouse' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default withRouter(App);
