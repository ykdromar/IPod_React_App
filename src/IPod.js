import './ipod.css'; // importing ipod css file for IPod component
import Screen from './Screen'; // importing screen component of IPod
import Buttons from './Buttons'; // importing buttons component of IPod
import React from 'react';
import ZingTouch from 'zingtouch';
class IPod extends React.Component {
    componentDidMount(){
        let buttons=document.getElementById('buttons');
        // console.log(buttons);
        var activeRegion = ZingTouch.Region(buttons);
        activeRegion.bind(buttons,'rotate', function(event){
            //Perform Operations
            console.log(event);
        });

    }
    render(){
        return (
            <div id='ipod'>
                <Screen/>
                <Buttons/>
            </div>
        );
    }

};

export default IPod;