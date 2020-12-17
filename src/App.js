import logo from './logo.svg';
import './App.css';
import Header from './component/header.jsx';
import Home from './pages/home.jsx';
import Course from './pages/course';
import Blog from './pages/blog';
import Footer from './component/footer.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <Course /> */}
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
