import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

class NewScoreEntry extends Component {
  defaultState = {
    hole1: 0,
    hole2: 0,
    hole3: 0,
    hole4: 0,
    hole5: 0,
    hole6: 0,
    hole7: 0,
    hole8: 0,
    hole9: 0,
  }

  state = { ...this.defaultState }

  handleChange = (e) => {
    const { target: { value, id } } = e;
    this.setState({ [id]: value });
  }

  handleSubmit = () => {
    const { dispatch, toggleNewEntry } = this.props;
    const githubUrl = prompt('What is your Github Solution URL?')

    if(!githubUrl)
      alert('You need to supply a Github URL for verifcation!')
    else
      axios.post('/api/scores', { scores: this.state, github_url: githubUrl })
        .then(res => {
          const { data: user, headers } = res;
          dispatch({ type: 'LOGIN', user, headers });
          dispatch(setFlash('Score Saved!', 'green'));
          this.setState({ scores: [...this.defaultState] });
          toggleNewEntry();
        })
        .catch( res => {
          dispatch(setHeaders(res.headers));
          dispatch(setFlash('Something Went Wrong While Saving Your Score. Try Again!', 'red'));
    });
  }

  render() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth()+1;
    const yyyy = today.getFullYear();
    const { hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9 } = this.state;

    return(
      <Table.Row>
        <Table.Cell>{this.props.user.email}</Table.Cell>
        <Table.Cell>{`${yyyy}-${mm}-${dd}`}</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole1} autoFocus type='number' min={1} required id='hole1' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole2} required id='hole2' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole3} required id='hole3' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole4} required id='hole4' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole5} required id='hole5' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole6} required id='hole6' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole7} required id='hole7' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole8} required id='hole8' /></Table.Cell>
        <Table.Cell><Input onChange={this.handleChange} value={hole9} required id='hole9' /></Table.Cell>
        <Table.Cell>
          <Button onClick={this.handleSubmit} size='tiny' color='green'>Add Entry</Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(NewScoreEntry);
