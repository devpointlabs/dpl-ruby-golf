import React, { Component } from 'react';
import { List, Segment, Divider, Container } from 'semantic-ui-react';
import axios from 'axios';

class Leaderboard extends Component {
  state = { scores: [] };

  componentDidMount() {
    axios.get('/api/scores')
      .then(res => {
        this.setState({ scores: res.data });
    });
  }

  displayScores = () => {
    return this.state.scores.map( (s, i) => {
      return(
        <List.Item key={i}>
          <h4> User Email: {s.email} </h4>
          <h4> Date: {s.date} </h4>
          <h4> Total: {s.score} </h4>
          <Divider />
        </List.Item>
      );
    });
  }

  render() {
    return(
      <Container>
        <Segment inverted textAlign='center'>
          <List celled inverted ordered>
            { this.displayScores() }
          </List>
        </Segment>
      </Container>
    );
  }
}

export default Leaderboard;
