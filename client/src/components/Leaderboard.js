import React, { Component } from 'react';
import { List, Segment, Divider, Container, Tab } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

class Leaderboard extends Component {
  state = { completeScores: [], incompleteScores: [], isAuthorized: true };

  componentDidMount() {
    if(this.props.user.scores.length) {
      const { dispatch } = this.props;

      axios.get('/api/scores')
        .then(res => {
          const { data: { complete_scores: completeScores, incomplete_scores: incompleteScores }, headers } = res;
          this.setState({ completeScores, incompleteScores });
          dispatch(setHeaders(headers))
        })
        .catch(res => {
          dispatch(setHeaders(res.headers))
        })
    } else
      this.setState({ isAuthorized: false });
  }

  displayScores = (scores) => {
    return scores.map( (s, i) => {
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
    if(this.state.isAuthorized) {
      const { completeScores, incompleteScores } = this.state;

      const panes = [
        { menuItem: 'Complete Round Leaderboard', render: () => <Tab.Pane inverted>
          <Container>
            <Segment inverted textAlign='center'>
              <List celled inverted ordered>
                { this.displayScores(completeScores) }
              </List>
            </Segment>
          </Container>
        </Tab.Pane> },
        { menuItem: 'Incomplete Scores', render: () => <Tab.Pane inverted>
          <Container>
            <Segment inverted textAlign='center'>
              <List celled inverted ordered>
                { this.displayScores(incompleteScores) }
              </List>
            </Segment>
          </Container>
        </Tab.Pane> },
      ]
      return(<Tab panes={panes} />);
    } else {
      this.props.dispatch(setFlash('You need to score 1 round before you can see the leaderboard!', 'red'));
      return(<Redirect to='/score_card' />);
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Leaderboard);
