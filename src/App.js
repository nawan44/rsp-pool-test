import './App.css';
import Home from './pages/home/home.jsx';
import Course from './pages/course/course.jsx';
import Blog from './pages/blog/blog.jsx';
import ListCourse from './pages/list-course/listCourse.jsx';
import Footer from './component/footer.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailCourse from './pages/detail-course/detailCourse';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/course' component={Course} />
          <Route path='/blog' component={Blog} />
          <Route path='/list-course' component={ListCourse} />
          <Route path='/detail-course' component={DetailCourse} />
          
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
