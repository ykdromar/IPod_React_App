import './menu.css';
const MenuHome=(props)=>{
    return(
        <ul className='menu' id='home-menu'>
            <b>iPod.js</b>
            {props.items.map((item)=>{
                return (
                    <li className={item.class}><span>{item.title}</span><span style={{color:'white'}}> &#8811;</span></li>
                );
            })}
            

        </ul>
    );
}

export default MenuHome;