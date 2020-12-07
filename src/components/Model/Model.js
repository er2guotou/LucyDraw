import React from 'react';
import PropTypes from 'prop-types';
import styles from './Model.module.scss';
import {GContext} from '../../globalContext';
import { Button, Modal,Image } from 'react-bootstrap';
// import context from 'react-bootstrap/esm/AccordionContext';
import testImg from '../../assets/test.jpg';
const Model = () => (
    <GContext.Consumer>
      {context=>(
        <Modal     dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        show={context.showModel} onHide={()=>context.handleImgClick()} animation={true} className={styles.Model}>
        <Modal.Header closeButton>
      <Modal.Title >{context.currentDescription}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Image src={context.currentModelImg} fluid />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>context.handleImgClick()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>context.handleImgClick()}>
            Save Changes
          </Button> */}
        {/* </Modal.Footer> */}
      </Modal>
      )
      }
    </GContext.Consumer>
);

Model.propTypes = {};

Model.defaultProps = {};

export default Model;
// export default class Model extends React.Component {

//   constructor(){
//     super();
//     const context = React.useContext(GContext);
//     const {showModel,handleImgClick} = context;
  
//     this.showModel = showModel;
//     console.log(this.showModel);
//     this.handleImgClick = handleImgClick;
//   }

//   render(){

//     return (
//       <Modal show={this.showModel} onHide={this.handleImgClick} animation={false}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" >
//           Close
//         </Button>
//         {/* <Button variant="primary" onClick={handleClose}>
//           Save Changes
//         </Button> */}
//       </Modal.Footer>
//     </Modal>
//     )
//   }

// }
