import React, { Component } from 'react';
import { Segment, Button, Table, Divider } from 'semantic-ui-react';
import ScoreCardEntry from './ScoreCardEntry';
import NewScoreEntry from './NewScoreEntry';
import { connect } from 'react-redux';

class ScoreCard extends Component {
  state = { newEntry: false };

  displayScores = () => {
    return this.props.user.scores.map( (score, index) => {
      return(<ScoreCardEntry key={index} score={score} />);
    });
  }

  toggleNewEntry = () => {
    this.setState({ newEntry: !this.state.newEntry });
  }

  render() {
    return(
      <Segment basic textAlign='center'>
        <Table
          stackable
          celled
          fixed
          compact
          padded
          striped
          inverted
          textAlign='center'
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Hole #</Table.HeaderCell>
              <Table.HeaderCell>1</Table.HeaderCell>
              <Table.HeaderCell>2</Table.HeaderCell>
              <Table.HeaderCell>3</Table.HeaderCell>
              <Table.HeaderCell>4</Table.HeaderCell>
              <Table.HeaderCell>5</Table.HeaderCell>
              <Table.HeaderCell>6</Table.HeaderCell>
              <Table.HeaderCell>7</Table.HeaderCell>
              <Table.HeaderCell>8</Table.HeaderCell>
              <Table.HeaderCell>9</Table.HeaderCell>
              <Table.HeaderCell>Completed Round?</Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.displayScores() }
            { this.state.newEntry && <NewScoreEntry toggleNewEntry={this.toggleNewEntry} /> }
          </Table.Body>
        </Table>
        <Divider />
        <Button
          size='large'
          color='black'
          onClick={this.toggleNewEntry}
        >
          New Entry
        </Button>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(ScoreCard);
