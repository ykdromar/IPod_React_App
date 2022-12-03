import './buttons.css'

const Buttons=()=>{
    return(
        <div id='buttons'>
            <div id='ok-button'></div>
            <img className='button' id='pause-play-button' src='https://cdn-icons-png.flaticon.com/512/8191/8191650.png' alt='pause-play-button'></img>
            <img className='button' id='forward-button' src='https://cdn-icons-png.flaticon.com/512/1/1824.png' alt='forward-button'></img>
            <img className='button' id='backward-button' src='https://cdn-icons-png.flaticon.com/512/4029/4029036.png' alt='backward-button'></img>
            <div id='menu-button'>Menu</div>


        </div>
    );

}

export default Buttons;