import React from 'react';
import PropTypes from 'prop-types';
import styles from './AllGifts.module.scss';
import GiftBox from '../../components/GiftBox/GiftBox';
import {GContext} from '../../globalContext';

// var Tmp = () => {
//       var names = ['Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster'];
//       var namesList = names.map(function(){
//                       return <GiftBox />;
//                     })

//       return  { namesList }
//   }

// const names = ['Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster','Tom', 'Jon', 'Thruster'];

// const AllGifts = () => (
//   <div className={styles.AllGifts}>
//     {
//       names.map(function(){
//                               return <GiftBox />;
//                             })
//     }
//   </div>
// );
const AllGifts = () => (
  <div className={styles.AllGifts}>
  <GContext.Consumer>
  {context =>{
     let json = context.GiftList;
     if(! json)
        return
    if( json.length === 0)
        return
   let giftArr = [];
   json.forEach(function (value, i) {
            console.log('%d: %s', i, value);
            giftArr.push( <GiftBox  BoxNum = {i} WrappedImg = {value.WrappedImg} UnWrappedImg = {value.UnWrappedImg} Description = {value.Description}/>)
        });
      return giftArr;
  }}
  </GContext.Consumer>
  </div>
)

AllGifts.propTypes = {};

AllGifts.defaultProps = {};

export default AllGifts;
