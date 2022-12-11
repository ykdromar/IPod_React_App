import './buttons.css'

const Buttons=(props)=>{
    return(
        <div id='buttons' style={{position:'relative'}}>
            <div id='ok-button' onClick={()=>{props.ok()}} style={{zIndex:1}} ></div>
            <div id='circular'>
            <img className='button' id='pause-play-button' src='https://cdn-icons-png.flaticon.com/512/8191/8191650.png' alt='pause-play-button'></img>
            <img className='button' id='forward-button' src='https://cdn-icons-png.flaticon.com/512/1/1824.png' alt='forward-button'></img>
            <img className='button' id='backward-button' src='https://cdn-icons-png.flaticon.com/512/4029/4029036.png' alt='backward-button'></img>
            </div>
            <div id='menu-button' style={{zIndex:2}} onClick={()=>{props.menu()}}>Menu</div>


        </div>
    );

}

export default Buttons;