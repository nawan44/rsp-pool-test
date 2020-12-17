import logo from './logo.svg';
import './App.css';
import Header from './component/header.jsx';
import Home from './pages/home.jsx';
import Footer from './component/footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
