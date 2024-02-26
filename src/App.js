import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Media from './components/Media/Media';
import { ParallaxProvider } from 'react-scroll-parallax';
import Purchase from './components/Puchase/Purchase';
import Community from './components/Community/Community';
import News from './components/News/News';

function App() {
  return (
    <ParallaxProvider scrollAxis="horizontal">
<Header/>
<Home/>
<About/>
<Media/>
<News/>
<Purchase/>
<Community/>
</ParallaxProvider>
  );
}

export default App;
