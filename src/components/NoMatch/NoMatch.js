import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import img404 from './assets/404.svg';



function NoMatch() {
    return(
      
    <div className="bg-purple">
        
      <div className="stars">
          
            <div className="central-body">
                <img className="image-404" src={img404} width="300px"/>
                <NavLink to="/"><a className="btn-go-home" target="_blank">GO BACK HOME</a></NavLink>
            </div>
      
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>

      </div>

    </div>
    );
  }



export default NoMatch;