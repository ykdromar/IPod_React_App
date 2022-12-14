import React from "react";
import MenuMusic from "./MenuMusic";
import ZingTouch from 'zingtouch'; // importing zingTouch for handeling rotation events

class Music extends React.Component{
constructor(){
    super();
    this.state={
        MenuMusic:{
            key:1,
            title:"MenuMusic",
            status:true,
            items:[
                {
                    id:1,
                    title:"Playing Now",
                    class:'active',
                },
                {
                    id:2,
                    title:"Playlist",
                    class:'',
                },
                {
                    id:3,
                    title:"Artists",
                    class:'',
                },
                {
                    id:4,
                    title:"Genre",
                    class:'',
                }
            ]
        },
        
    }
}

componentDidMount(){
    // when iPod component is mounted then accessing the button component to add event listner
    let buttons=document.getElementById('circular'); // getting the circular button component
    let currAngle=0; // current angle of rotation
    // adding the rotate event using zingtouch to bottons
    var activeRegion = ZingTouch.Region(buttons);
        
    let NowPlaying=this.nowPlayingActive;
    let Playlist=this.playlistActive;
    let Artist=this.artistActive;
    let Genre=this.genreActive;
    
    activeRegion.bind(buttons,'rotate', function(event){
        currAngle+=event.detail.distanceFromLast;
        if(currAngle>360){
            currAngle=0;
        }else if(currAngle<0){
            currAngle=360;
        }
        if((currAngle<30&&currAngle>=0)||(currAngle<150&&currAngle>=120)||(currAngle<270&&currAngle>=240)){
            NowPlaying();
            
        }
        else if((currAngle>=30&&currAngle<60)||(currAngle<180&&currAngle>=150)||(currAngle<300&&currAngle>=270)){
            Playlist();
        }
        else if((currAngle>=60&&currAngle<90)||(currAngle<210&&currAngle>=180)||(currAngle<330&&currAngle>=300)){
            Artist();
        }
        else if((currAngle>=90&&currAngle<120)||(currAngle<240&&currAngle>=210)||(currAngle<360&&currAngle>=330)){
            Genre();
        }
        

        
    });

}

//function to make nowPlaying

nowPlayingActive=()=>{
    const{MenuMusic}=this.state;
    let items=MenuMusic.items;
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
    this.setState({MenuMusic});
}
//function to make playlist active

playlistActive=()=>{
    const{MenuMusic}=this.state;
    let items=MenuMusic.items;
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
    this.setState({MenuMusic});
}//function to make artist active

artistActive=()=>{
    const{MenuMusic}=this.state;
    let items=MenuMusic.items;
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
    this.setState({MenuMusic});
}//function to make genre active

genreActive=()=>{
    const{MenuMusic}=this.state;
    let items=MenuMusic.items;
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
    this.setState({MenuMusic});
}

    render(){
        // const{MenuMusic,NowPlaying,Playlist,Artists,Genre}=this.state;
        return(
            <>
               < MenuMusic items={this.state.MenuMusic.items}/>
            </>
        );
    }
}
export default Music;