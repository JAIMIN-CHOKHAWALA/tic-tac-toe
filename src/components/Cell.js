import React from 'react';
import  classNames from 'classnames';
import './Cell.css';


export const Cell = (params) => {
    const cellClasses = classNames({
        'cell': true,
        'winner': params.canHighlight,
    });
    
    const cellContentClasses = ({
        'cell-content': true,
        'populated': params.value
    })
    
    return (
        <button className={cellClasses} onClick={params.onclick}>
            <span className="cell-content populated">{params.value}</span>
        </button>
    );
}

// export default Cell;