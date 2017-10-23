import React, { Component } from 'react';
import { List, Segment, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';

class Leaderboard extends Component {
  state = { scores: [], isAuthorized: true };

  componentDidMount() {
    if(this.props.user.scores.length)
      axios.get('/api/scores')
        .then(res => {
          this.setState({ scores: res.data });
      });
    else
      this.setState({ isAuthorized: false });
  }

  displayScores = () => {
    return this.state.scores.map( (s, i) => {
      return(
        <List.Item key={i}>
          <h4> User Email: {s.email} </h4>
          <h4> Date: {s.date} </h4>
          <h4> Total: {s.score} </h4>
          <h4>
            Solutions:
            <a href={s.github_url} target='_blank'> {s.github_url}</a>
          </h4>
          <Divider />
        </List.Item>
      );
    });
  }

  render() {
    if(this.state.isAuthorized)
      return(
        <Container>
          <Segment inverted textAlign='center'>
            <List celled inverted ordered>
              { this.displayScores() }
            </List>
          </Segment>
        </Container>
      );
    else {
      this.props.dispatch(setFlash('You need to score 1 round before you can see the leaderboard!', 'red'));
      return(<Redirect to='/score_card' />);
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Leaderboard);
