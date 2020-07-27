import React, { useState, useEffect, useRef } from 'react';


// Scaling Constants for Canvas
const SCALE = 0.1;
// const OFFSET = 80;
export const canvasWidth = window.innerWidth * .75;
export const canvasHeight = window.innerHeight * .75;



export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);
    const [ctx, setCtx] = useState(0);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        setCtx(ctx)
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight, ctx ];
}