import './menu.css';
const MenuMusic=(props)=>{
    return(
        <ul className='menu' id='music-menu'>
            <b>Music</b>
            {props.items.map((item)=>{
                return (
                    <li className={item.class}><span>{item.title}</span><span style={{color:'white'}}> &#8811;</span></li>
                );
            })}
            

        </ul>
    );
}

export default MenuMusic;