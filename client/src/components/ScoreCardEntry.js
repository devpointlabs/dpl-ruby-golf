import React, { Component } from 'react';
import { Table, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ScoreCardEntry extends Component {
  render() {
    const { score, user } = this.props;

    return(
      <Table.Row>
        <Table.Cell>
          {user.email}
        </Table.Cell>
        <Table.Cell>
          {score.date}
        </Table.Cell>
        <Table.Cell></Table.Cell>
        { score.scores.map( (score, index) => {
            return(
              <Table.Cell key={index}>
                <Input type='text' disabled value={score} />
              </Table.Cell>
            )
          })
        }
        <Table.Cell>
          { score.total }
        </Table.Cell>
      </Table.Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(ScoreCardEntry);
