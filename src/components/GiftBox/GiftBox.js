import React from 'react';
import PropTypes from 'prop-types';
import styles from './GiftBox.module.scss';
import {Card,Button} from 'react-bootstrap';
import GiftImg from '../../assets/giftbox.svg';
import ReactCardFlip from 'react-card-flip';
import {GContext} from '../../globalContext';
import testImg from '../../assets/test.jpg';

// const GiftBox = () => (
//   <div className={styles.GiftBox}>
//       <Card
//     bg={'warning'}
//     text={'warning' === 'light' ? 'dark' : 'white'}
//     style={{ width: '10rem' }}
//     className="mb-2"
//   >
//     <Card.Body>
//       <Card.Img src={GiftImg} alt="Card image" />
//   <Card.ImgOverlay>
//   {/* <Card.Title>Box NO.1</Card.Title> */}
//     <Card.Text style={{fontSize:"6rem"}}>91</Card.Text>

//   </Card.ImgOverlay>
//   </Card.Body>
//   <Card.Footer>
//       <small >Accepted By Tom</small>
//     </Card.Footer>
// </Card>
//   </div>
// );

// GiftBox.propTypes = {};

// GiftBox.defaultProps = {};
export default class GiftBox extends React.Component {
  static contextType = GContext
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  


  }
  
 
  handleClick(BoxNum,callback) {
    // e.preventDefault();
    callback(BoxNum);
    // console.log(callback);
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    const ImgUrlBase = 'http://127.0.0.1:8080/imgs/'
    const {currentPerson,handleImgClick,reduceUserListTest,GiftList} = this.context;
    // console.log(reduceUserListTest);
    let {BoxNum,WrappedImg,UnWrappedImg,Description} = this.props;
    // console.log(this.context);
    // console.log(showModel);
    if(!WrappedImg || WrappedImg===''){
      WrappedImg = 'LanIDAAA_wrapped.jpg'
    }
    if(!UnWrappedImg  || UnWrappedImg===''){
      UnWrappedImg = 'LanIDAAA_unwrapped.jpg'
    }
    WrappedImg = ImgUrlBase + WrappedImg;
    UnWrappedImg = ImgUrlBase + UnWrappedImg;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
 
     <Card className={styles.GiftBox}
    bg={'warning'}
    text={'warning' === 'light' ? 'dark' : 'white'}
    style={{ width: '10rem' }}
    className="mb-2"
  >
    <Card.Body>
      <Card.Img src={GiftImg} alt="Card image"/>
  <Card.ImgOverlay style={{height:"50px"}} onClick = {()=>handleImgClick(WrappedImg,Description)}>
 
    <Card.Text style={{fontSize:"6rem"}}>{BoxNum}</Card.Text>

  </Card.ImgOverlay>
  </Card.Body>
  <Card.Footer>
  <Button variant="secondary" size="sm" onClick={()=>this.handleClick(BoxNum,reduceUserListTest)}>
      Accept
    </Button>
    {/* <Button variant="primary" size="sm" onClick = {handleImgClick} >
      show
    </Button> */}
      {/* <small >Accepted By Tom</small> */}
    </Card.Footer>
</Card>

 


    <Card  className={styles.GiftBox}
    bg={'warning'}
    text={'warning' === 'light' ? 'dark' : 'white'}
    style={{ width: '10rem' }}
    className="mb-2"
  >
    <Card.Body>
      <Card.Img src={WrappedImg} alt="Card image" style={{height:"118px"}}/>
  <Card.ImgOverlay style={{height:"50px"}} onClick = {()=>handleImgClick(UnWrappedImg,Description)} >
  {/* <Card.Title>Box NO.1</Card.Title> */}
  <Card.Text style={{fontSize:"6rem"}}>{BoxNum}</Card.Text>

  </Card.ImgOverlay>
  </Card.Body>
  <Card.Footer>
  {/* <Button variant="secondary" size="sm" onClick={this.handleClick}>
      flip
    </Button> */}
      <small >Accepted By {GiftList[BoxNum].acceptPPL}</small>
    </Card.Footer>

</Card>
 
   </ReactCardFlip>
    )
  }
}

