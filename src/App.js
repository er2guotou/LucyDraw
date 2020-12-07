// // import logo from './logo.svg';
// // import './App.css';
// import {Example} from "./modal";
// import {FlipCard} from "./FlipCard";
// import {Front, Back} from './Card';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Example></Example>
//       </header> */}
//       <body>
//         <Example />
//         <FlipCard />
//       </body>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import {Row,Col,Image,ListGroup} from 'react-bootstrap';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import LightRope from "./components/LightRope/LightRope.js";
import ChristmasImg from "./assets/chrismas.png"
import RollNumber from "./components/RollNumber/RollNumber";
import AllGifts from './components/AllGifts/AllGifts';
import Model from './components/Model/Model';
import UserList from './components/UserList/UserList';

const App = () => (
  
  <Container className="content" > 
    <LightRope />
    {/* <Cup /> */}
 
      <Container className="content" >
      <Row style={{height:'30px',width:'100%'}}> </Row>
      <Row  style={{marginLeft:'50px'}}>
        <Col lg={2}><Image src={ChristmasImg} roundedCircle width='100px' /></Col>
        <Col lg={8}><Container style={{margin:"0px"}}> 
        <h1 style={{color:'#234423'}}>2020 GCAD Christmas Gifts Exchange </h1>
        <RollNumber />
        <Row  >

          {/* <Col >         
          <Button variant="warning">Unwrapper All</Button>{' '}
          </Col> */}
        </Row>
        </Container>
        </Col>
    
        <Col lg={2}><Image src={ChristmasImg} roundedCircle width='100px' /></Col>
      </Row>
      <Row style={{height:'10px',width:'100%'}}> </Row>
      <Row >
    <Col lg={3}>
      <Container >
        <UserList />
      </Container>
      
    </Col>
    <Col lg={9}>
          <AllGifts />
    {/* <MyGiftsBox /> */}
    </Col>
  </Row>
      </Container>
 

  <Model/>
  </Container>
);

export default App;
