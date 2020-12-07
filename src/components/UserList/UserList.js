import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import {GContext} from '../../globalContext';
import {Row,Col,Image,ListGroup} from 'react-bootstrap';
import { CSVLink } from "react-csv";


const UserList = () => (
  <GContext.Consumer>
    {context =>{
      // console.log('UserList');
      //  console.log(context.UsersList);
     let UsersList = context.UsersList;
     if(! UsersList || UsersList.length===0)
    return <CSVLink data={context.GiftList} separator={";"}>
        Download Result
    </CSVLink>
      // if( Object.keys(json).length === 0 && json.constructor === Object)
      //     return
      // console.log(context);
    
      // var arr = [];
      // Object.keys(json).forEach(function(key) {
      //   arr.push(json[key]);
      // });
      UsersList[0].type = 'info';
      return   <ListGroup as="ul" className='peopleList'>
        {/* <ListGroup.Item as="li" variant="info">{arr[0]}</ListGroup.Item> */}
        {UsersList.map(item =>   <ListGroup.Item as="li" variant={item.type} >{item.Text}</ListGroup.Item>)}
        </ListGroup>;
    }}
  </GContext.Consumer>
);

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;
