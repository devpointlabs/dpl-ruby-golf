import React, { Component } from 'react';
import { Header, Image, Segment, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import golfBall from '../images/golf-ball.png';

class Home extends Component {
  render() {
    return (
      <Segment basic className='aligner' textAlign='center'>
        <Segment basic className='aligner-item'>
          <Header style={{ fontSize: '5vw' }}>Ruby Golf</Header>
          <Image size='large' src={golfBall} centered alt='Golf Ball' />
          <Divider />
          <Button size='huge' color='black'>
            <Link to='/score_card'>
              Schwing
            </Link>
          </Button>
        </Segment>
      </Segment>
    );
  }
}

export default Home;
