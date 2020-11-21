import React from 'react';

function Card(props) {
    return (

        <div className="card">
          
          <div className="header-img">
            {/* <img src="https://picsum.photos/150" alt=""/> */}
          </div>

          <div className="card-body">
              <img className="pic" src={props.photo} alt=""/>
              <div className="card_info">
                <h3> {props.name}</h3>
                <p className= "p1">{props.address}</p>
                <p className= "p2">{props.titel}</p>
                <p className= "p3">{props.disc}</p>
              </div>

              <div className="socials">
              <a href= {props.facebook} target="_blank"><i className="fab fa-facebook"></i></a>
              <a href= {props.linkedin} target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href= {props.github} target="_blank"><i className="fab fa-github"></i></a>
              </div>
          </div>
        </div>
    )
}


export default Card;


/*
<div className="container">
        <div className="card">
          
          <div className="header-img">
            <img src="https://picsum.photos/150" alt=""/>
          </div>

          <div className="card-body">
              <img className="pic" src="https://picsum.photos/200" alt=""/>
              <div className="card_info">
                <h3>Mohammad Alzoubi</h3>
                <p className= "p1">Irbid/Jordan</p>
                <p className= "p2">Computer Engineer</p>
                <p className= "p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!</p>
              </div>

              <div className="socials">
              <a href="https://www.facebook.com/osamajamell/" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/OsamaAburabie" target="_blank"><i className="fab fa-github"></i></a>
              </div>
          </div>
        </div>
      </div>
*/