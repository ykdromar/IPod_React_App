import './screen.css';
import MenuHome from './MenuHome';
import Music from './Music';
const Screen=(props)=>{
    return(
        <div id="screen">
            {props.MenuHome.status && <MenuHome items={props.MenuHome.items} /> /* Rendering Menu on Home Screen */}
           
            {/*Redering Coverflow on screen */props.Coverflow.status && <div style={{backgroundColor:'white',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:900,fontSize:25}}>Coverflow</div>}
            {props.Music.status&& <Music />}
            {props.Games.status&& <div style={{backgroundColor:'white',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:900,fontSize:25}}>Games</div>}
            {props.Setting.status&&<div style={{backgroundColor:'white',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:900,fontSize:25}}>Setting</div>}

        </div>
    );
}

export default Screen;


