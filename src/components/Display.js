import React from 'react';

function Display({ expression, currentValue }) {
    return (
        <div id="display">
            {expression || currentValue}
        </div>
    );
}

export default Display;
