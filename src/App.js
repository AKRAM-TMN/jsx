import logo from './logo.svg';
import './App.css';
import img1 from './images/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg';
import video1 from './videos/coding.mp4';

function App() {
  return (
    <div className="App">
          <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">AKRAM TEMANI</h1>
          <br />
          <img width={200} height={200} src={img1} />
          <br />
          <img width={200} height={200} src="/ZiClJf-1920w.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
