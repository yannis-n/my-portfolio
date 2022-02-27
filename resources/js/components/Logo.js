

import React, { useState, useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export function Logo(props) {
  

  return (
        
    <svg className="fixed z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    <defs>
        
    </defs>
    <g className="eins">
        <g className="all" >
        <mask id="Mask">
            <circle className="xmask" cx="60" cy="60" r="100" fill="#EC255A" />
            <circle className="xmask" cx="60" cy="60" r="50" fill="#000" />
        </mask>
        <g className="group"  mask="url(#Mask)">
            <circle className="go" cx="60" cy="65" r="48" style={{ fill: '#EC255A' }}/>
            <circle className="go" cx="60" cy="55" r="48" style={{ fill: '#EC255A' }}/>
        </g>
        </g>
    </g>
    
    <g className="zwei">
        <g className="all" >
        <mask id="Mask2">
            <circle className="xmask" cx="60" cy="60" r="100" fill="#EC255A" />
            <circle className="xmask" cx="60" cy="60" r="50" fill="#000" />
        </mask>
        <g className="group"  style={{ animationDelay: '-0.33s', mask:"url(#Mask2)" }}>
            <circle className="go" cx="60" cy="65" r="48" style={{ fill: '#EC255A' }}/>
            <circle className="go" cx="60" cy="55" r="48" style={{ fill: '#EC255A' }}/>
        </g>
        </g>
    </g>
    
    <g className="drei">
        <g className="all" >
        <mask id="Mask3">
            <circle className="xmask" cx="60" cy="60" r="100" fill="#EC255A" />
            <circle className="xmask" cx="60" cy="60" r="50" fill="#000" />
        </mask>
        <g className="group"  style={{ animationDelay: '-0.66s', mask:"url(#Mask3)" }}>
            <circle className="go" cx="60" cy="65" r="48" style={{ fill: '#EC255A' }}/>
            <circle className="go" cx="60" cy="55" r="48" style={{ fill: '#EC255A' }}/>
        </g>
        </g>
    </g>
    
    <circle className="go" cx="60" cy="60" r="2" style={{ fill: '#EC255A' }}/>

    </svg>
  );
}