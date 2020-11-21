import './App.css';
import Card from './componant/Card';
import img1 from './componant/Images/mohammad.png'
import img2 from './componant/Images/Ashraf.jpg'
import img3 from './componant/Images/Abdel rahman.png'
import img4 from './componant/Images/abdallah alhajeid.jpg'
import img5 from './componant/Images/Monther.jpg'

function App() {
  return (
    <div className="container">
      <Card
          photo= {img1}
          name = 'Mohammad Alzoubi'
          address= 'Irbid/Jordan'
          titel = 'Computer Engineer'
          disc= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!'
          facebook = 'https://web.facebook.com/mohammad1351/'
          linkedin = 'https://www.linkedin.com/in/mohammad-alzoubi/'
          github = 'https://github.com/Mohammad-Alzoubi'
          />
      <Card
          photo={img2}
          name = 'Ashrf Al-jabari'
          address= 'Amman/Jordan'
          titel = 'Computer Science'
          disc= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!'
          facebook = 'https://web.facebook.com/aha.jaja9696?_rdc=1&_rdr'
          linkedin = 'https://www.linkedin.com/in/ashraf-aljabari/'
          github = 'https://github.com/ashraf-aljabari'
          />
      <Card
          photo= {img3}
          name = 'Abdel rahman Abdaldeen'
          address= 'Amman/Jordan'
          titel = 'Computer Science'
          disc= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!'
          facebook = 'https://web.facebook.com/abdalrahman.aldawaimah/?_rdc=1&_rdr'
          linkedin = 'https://www.linkedin.com/in/abd-abdaldeen/'
          github = 'https://github.com/abdAbdaldeen'
          />
      <Card
          photo={img4}
          name = 'Abdullah Al-hajeid'
          address= 'Amman/Jordan'
          titel = 'Gamer'
          disc= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!'
          facebook = 'https://web.facebook.com/abd.alhajeid?_rdc=1&_rdr'
          linkedin = 'https://www.linkedin.com/in/abdallah-alhajeid/'
          github = 'https://github.com/Abdallah-Alhajeid'
          />
      <Card
          photo={img5}
          name = 'Monther Tawissi'
          address= 'Jarash/Jordan'
          titel = 'Civil Engineer'
          disc= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dignissimos!'
          facebook = 'https://web.facebook.com/monthertwaissi?_rdc=1&_rdr'
          linkedin = 'https://www.linkedin.com/in/monther-twaissi/'
          github = 'https://github.com/Monther-Twaissi'
          />

      {/* ========================================================= */}
    </div>
  );
}

export default App;

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