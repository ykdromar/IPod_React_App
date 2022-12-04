import './menu.css';
const MenuHome=(props)=>{
    return(
        <ul className='menu' id='home-menu'>
            <b>iPod.js</b>
            {props.items.map((item)=>{
                return (
                    <li className={item.class}><span>{item.title}</span><span> &#8811;</span></li>
                );
            })}
            {/* <li className='active'><span>Coverflow</span><span> &#8811;</span></li>
            <li className=''><span>Music</span><span> &#8811;</span></li>
            <li className=''><span>Games</span><span> &#8811;</span></li>
            <li className=''><span>Setting</span><span> &#8811;</span></li> */}

        </ul>
    );
}

export default MenuHome;