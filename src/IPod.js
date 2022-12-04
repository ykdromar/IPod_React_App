import './ipod.css'; // importing ipod css file for IPod component
import Screen from './Screen'; // importing screen component of IPod
import Buttons from './Buttons'; // importing buttons component of IPod
import React from 'react';// importing react 
import ZingTouch from 'zingtouch'; // importing zingTouch for handeling rotation events
class IPod extends React.Component {
    constructor(){
        super()
        this.state={
            MenuHome:{
                status:'true',
                items:[
                    {
                        id:1,
                        title:'Coverflow',
                        class:'',
                    },
                    {
                        id:2,
                        title:'Music',
                        class:'',
                    },
                    {
                        id:3,
                        title:'Games',
                        class:'active',
                    },
                    {
                        id:4,
                        title:'Setting',
                        class:'',
                    },
                ],
            }
        }
    }
    componentDidMount(){
        // when iPod component is mounted then accessing the button component to add event listner
        let buttons=document.getElementById('buttons'); // getting the circular button component
        let currAngle=0; // current angle of rotation
        // adding the rotate event using zingtouch to bottons
        var activeRegion = ZingTouch.Region(buttons);
            
        let Coverflow=this.coverflowActive;
        let Music=this.musicActive;
        let Games=this.gamesActive;
        let Setting=this.settingActive;
        
        activeRegion.bind(buttons,'rotate', function(event){
            currAngle+=event.detail.distanceFromLast;
            if(currAngle>360){
                currAngle=0;
            }else if(currAngle<0){
                currAngle=360;
            }
            if((currAngle<30&&currAngle>=0)||(currAngle<150&&currAngle>=120)||(currAngle<270&&currAngle>=240)){
                Coverflow();
                
            }
            else if((currAngle>=30&&currAngle<60)||(currAngle<180&&currAngle>=150)||(currAngle<300&&currAngle>=270)){
                Music();
            }
            else if((currAngle>=60&&currAngle<90)||(currAngle<210&&currAngle>=180)||(currAngle<330&&currAngle>=300)){
                Games();
            }
            else if((currAngle>=90&&currAngle<120)||(currAngle<240&&currAngle>=210)||(currAngle<360&&currAngle>=330)){
                Setting();
            }
            

            
        });

    }

    //function to make coverflowActive

    coverflowActive=()=>{
        const{MenuHome}=this.state;
        let items=MenuHome.items;
        items.forEach((item)=>{
            // console.log(item)
            if(item.id===1){
                // console.log("enter if");
                item.class='active';
            }else{
                // console.log("enter else");
                item.class='';
            }

        });
        this.setState({MenuHome});
    }
    //function to make coverflowActive

    musicActive=()=>{
        const{MenuHome}=this.state;
        let items=MenuHome.items;
        items.forEach((item)=>{
            // console.log(item)
            if(item.id===2){
                // console.log("enter if");
                item.class='active';
            }else{
                // console.log("enter else");
                item.class='';
            }

        });
        this.setState({MenuHome});
    }//function to make coverflowActive

    gamesActive=()=>{
        const{MenuHome}=this.state;
        let items=MenuHome.items;
        items.forEach((item)=>{
            // console.log(item)
            if(item.id===3){
                // console.log("enter if");
                item.class='active';
            }else{
                // console.log("enter else");
                item.class='';
            }

        });
        this.setState({MenuHome});
    }//function to make coverflowActive

    settingActive=()=>{
        const{MenuHome}=this.state;
        let items=MenuHome.items;
        items.forEach((item)=>{
            // console.log(item)
            if(item.id===4){
                // console.log("enter if");
                item.class='active';
            }else{
                // console.log("enter else");
                item.class='';
            }

        });
        this.setState({MenuHome});
    }
    // rendering the IPod component using render function
    render(){
        return (
            <div id='ipod'>
                <Screen 
                MenuHome={this.state.MenuHome}
                />
                <Buttons/>
            </div>
        );
    }

};

export default IPod;