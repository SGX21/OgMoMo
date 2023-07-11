import React, {useEffect} from 'react'
import "./Preloader.css"
import { preLoaderAnim } from '../animations'

function Preloader(){

    useEffect(()=>{
        preLoaderAnim()
    },[])

    return(
        <div className="preloader">
            <div className="text-container">
                <span>EAT,</span>
                <span>SLEEP,</span>
                <span>REPEAT.</span>
            </div>
        </div>
    )
}

export default Preloader;