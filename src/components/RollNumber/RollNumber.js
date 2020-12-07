import React from 'react';
import PropTypes from 'prop-types';
import styles from './RollNumber.module.scss';
import DigitRoll from "digit-roll-react";
import {Row,Col,Button} from 'react-bootstrap';
import {GContext} from '../../globalContext';

class RollNumber extends React.Component {
  // state = { num: 0 };
  constructor() {
    super();
      this.state = {
        num: 0
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = () => {
    this.setState({
      num: Math.floor(Math.random() * 100)
    });
  }
  //generate random numbers
  // refresh = () => {
  //   this.setState({
  //     num: Math.floor(Math.random() * 100)
  //   });
  // };

  // componentDidMount = () => {
  //   // setInterval(this.refresh, 2000);
  // };

  render() {
    return (
     
    <GContext.Consumer>
    {context => (<Row lg={6}>
     <Col>
     </Col>
      <Col>     
    <DigitRoll num={context.RollNum} length={2} divider="" delay="1"  />  
    </Col>
    <Col>
        <Button onClick={context.handleRollNumClick} variant="warning" style={{height:'3rem'}}>ROLL </Button>   
    </Col>
      </Row> )
  }   
      </GContext.Consumer>
  
    );
  }
}
export default RollNumber;
