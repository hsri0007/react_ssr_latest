import './App.css';
import Header from './components/header/Header.js'
import FirstPage from "./components/firstPage/FirstPage.js"
import SecondPage from "./components/secondPage/SecondPage.js"
import Footer from "./components/footer/Footer.js"
function App() {
  return (
    <div className="App">
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <Footer/>
    </div>
  );
}

export default App;
