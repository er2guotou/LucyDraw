import React, { useState } from 'react';
const axios = require('axios');
const GContext = React.createContext();
const ConfigUrlBase = "http://127.0.0.1:8080/config/";
export {GContext};

export default class GlobalProvider extends React.Component{
    constructor() {
        super();
          // this.getUsers();
          this.state = {
            showModel: false,
            currentPerson:'',
            currentModelImg:'',
            currentDescription:'Description',
            RollNum:0,
            UsersList:[],
            GiftList:[],
            BoxList:[],
            // FlipList:[]
        };
        this.handleImgClick = this.handleImgClick.bind(this);
        this.reduceUserListTest = this.reduceUserListTest.bind(this);
        // this.handleFlip = this.handleFlip.bind(this);
        this.handleRollNumClick = this.handleRollNumClick.bind(this);
      }
      handleRollNumClick(){
        // const months = ["January", "February", "March", "April", "May", "June", "July"];
        // const random = Math.floor(Math.random() * months.length);
        // console.log(random, months[random]);
        let ownID = this.state.UsersList[0].LanID;
        let BoxNumArr = [];
        let json = this.state.GiftList;
        json.forEach(function (value, i) {
                 console.log('%d: %s', i, value);
                 if(value.acceptPPL==='' && value.FromLanID !== ownID){
                   BoxNumArr.push(i);
                 }
            });
        const random = Math.floor(Math.random() * BoxNumArr.length);
        const RollNum = BoxNumArr[random];
        this.setState({RollNum:RollNum});

      }
      handleImgClick(Img,Des) {
        // e.preventDefault();
        console.log('click for model');
        // console.log(this.state.showModel);
        // this.setState(showModel => ({ showModel: !showModel}));
        // let currentBox = this.state.GiftList[Num];
        this.setState(prevState => ({ showModel: !prevState.showModel, 
          currentModelImg:Img,
        currentDescription:Des}));
      }

      reduceUserListTest(BoxNum){
        if(this.state.UsersList.length >0)
          {
            // console.log(this.state.UsersList.slice(1));
          this.state.GiftList[BoxNum].acceptPPL = this.state.UsersList[0].Text;
          console.log(this.state.GiftList[BoxNum]);
           this.setState(prevState => ({ UsersList: prevState.UsersList.slice(1), GiftList:this.state.GiftList}));
          }
        //  this.state.UsersList['newName'] = 'add'; 
        //  console.log(this.state.UsersList);
        //  this.setState({UsersList:this.state.UsersList});
      }
    
    // handleFlip(Num){
    //   this.state.GiftList[Num].flip = true;
    //   console.log(this.state.GiftList);
    //   this.setState({GiftList:this.state.GiftList[Num].flip});
    // } 
    // async getUsers(){
    //   try {
    //     const response = await axios.get(ConfigUrlBase+'Users.json');
    //     console.log(response.data);
    //     // this.setState({UsersList:response.data});
    //   } catch (error) {
    //     console.error(error);
    //     return {};
    //   }
    // }

    componentWillMount() {
      axios.get(ConfigUrlBase+'Users.json').then((response) => {
        console.log(response.data);
        let UserDict = response.data;
        var arr = [];
        Object.keys(UserDict).forEach(function(key) {
          arr.push({"LanID":UserDict[key],'type':'Light',"Text":key});
        });
        // arr[0].type = 'info';
        this.setState({UsersList:arr});
      }).catch((err) => {
        console.error(err);
      });
      axios.get(ConfigUrlBase+'Gifts.json').then((response) => {
        // console.log(response.data);
        let ListGift = response.data;
        
        // ListGift = ListGift.map(x => {x.acceptPPL = ''; return x});
        ListGift.forEach(item=>{item.acceptPPL =''});
        console.log(ListGift);
        this.setState({GiftList:ListGift});
      }).catch((err) => {
        console.error(err);
      });
    }
    render(){
        return(
            <GContext.Provider
            value ={{
                ...this.state,
                handleImgClick:this.handleImgClick,
                reduceUserListTest:this.reduceUserListTest,
                handleRollNumClick:this.handleRollNumClick
                // handleFlip: this.handleFlip
            }}
            >
                {this.props.children}
            </GContext.Provider>
        )
    }
}