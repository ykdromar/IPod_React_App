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
                key:1,
                title:'MenuHome',
                status:true,
                items:[
                    {
                        id:1,
                        title:'Coverflow',
                        class:'active',
                    },
                    {
                        id:2,
                        title:'Music',
                        class:'',
                    },
                    {
                        id:3,
                        title:'Games',
                        class:'',
                    },
                    {
                        id:4,
                        title:'Setting',
                        class:'',
                    },
                ],
            },
            Coverflow:{
                key:2,
                title:"Coverflow",
                status:false,

            },
            Games:{
                key:3,
                title:"Games",
                status:false,
            },
            Setting:{
                key:4,
                title:"Setting",
                status:false,
            },
            Music:{
                key:5,
                title:"Music",
                status:false,
            }
        }
    }
    componentDidMount(){
        // when iPod component is mounted then accessing the button component to add event listner
        let buttons=document.getElementById('circular'); // getting the circular button component
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
    //function to make music active

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
    }//function to make games active

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
    }//function to make setting active

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
    // functions to switch screens
// ok button function
ok=()=>{
    
    const{MenuHome,Coverflow,Games,Setting,Music}=this.state;
    let activeItem;
    
    if(MenuHome.status){ // finding the selected option in the menu
        let items=MenuHome.items;
        for(let item of items){
            if(item.class==='active'){
                activeItem=item.title;
                break;
            }
        }
        if(Coverflow.title===activeItem){ // if the selected option in menu is this then make this screen as active
            Coverflow.status=true;
        }
        if(Games.title===activeItem){// if the selected option in menu is this then make this screen as active
            Games.status=true;
        }
        if(Setting.title===activeItem){// if the selected option in menu is this then make this screen as active
            Setting.status=true;
        }
        if(Music.title===activeItem){// if the selected option in menu is this then make this screen as active
            Music.status=true;
        }
        MenuHome.status=false; // making menu option as inactive 
        
        this.setState({
            MenuHome,
            Coverflow,
            Games,
            Setting,
            Music
        })
    }
    
    
}
// menu button
menu=()=>{
    const {MenuHome}=this.state;
if(!MenuHome.status){
        this.setState((preState)=>{
            const {MenuHome,Coverflow,Games,Setting,Music}=preState;
            MenuHome.status=true;
            Coverflow.status=false;
            Games.status=false;
            Setting.status=false;
            Music.status=false;
            return{
                MenuHome:MenuHome,
                Coverflow:Coverflow,
                Games:Games,
                Setting:Setting,
                Music:Music
            }
        });
    }
}

    // rendering the IPod component using render function
    render(){
        return (
            <div id='ipod'>
                <Screen 
                MenuHome={this.state.MenuHome}
                Coverflow={this.state.Coverflow}
                Games={this.state.Games}
                Setting={this.state.Setting}
                Music={this.state.Music}

                />
                <Buttons
                ok={this.ok}
                menu={this.menu}
                />
            </div>
        );
    }

};

export default IPod;