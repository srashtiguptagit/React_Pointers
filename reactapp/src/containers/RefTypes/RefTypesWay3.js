import React, {useRef, useEffect} from 'react';

const person = (props) => {
    const ToggleButtonRef = useRef(null);

    useEffect(() => {
        ToggleButtonRef.current.click();    // => Sce this works after every render cycle
    }, [])
    return (
    <p ref={ToggleButtonRef}></p>
    )
}