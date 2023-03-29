import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu bar/menu';
import { Hello } from './components/task 1 hello world/hello';
import { Card } from './components/task 2 card/congrats card';
import { League } from './components/task 3 sup-over leage/super over';
import { Button } from './components/task 4 social button/social btn';
import { Application } from './components/task 5 notification application/notification';
import { Login } from './components/task 6 login design/login design';
import { Tech } from './components/task 7 technology card/technology';
import { Usestate } from './components/task 8 hooks useState/useState';
import { Fruit } from './components/task 9 fruits count/fruit count';
import { Feedback } from './components/task 10 feedback/feedback';
import { Result } from './components/task 10 feedback/result';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/Hello' element={<Hello/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/League' element={<League/>}/>
        <Route path='/Button' element={<Button/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Tech' element={<Tech/>}/>
        <Route path='/UseState' element={<Usestate/>}/>
        <Route path='/Fruit' element={<Fruit/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
