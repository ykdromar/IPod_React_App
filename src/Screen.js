import './screen.css';
import MenuHome from './MenuHome';
const Screen=(props)=>{
    return(
        <div id="screen">
            {props.MenuHome.status&&<MenuHome items={props.MenuHome.items} />}
        </div>
    );
}

export default Screen;


