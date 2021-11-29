// for responsiveness (to interact with side drawer in mobile mode)


import React from 'react'
import './BackDrop.css'
function BackDrop({show,click}) {
    return show && (
        <div className="backdrop" onClick={click}>
            
        </div>
    )
}

export default BackDrop
