import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Footer from './components/Footer'

function App() {
  const [currentCategory, setCurrentCategory] = useState('about')
  function render(category){
    if(category==='about'){
      return <About></About>
    }
    else if(category==='my-work'){
      return <Work></Work>
    }
    else if(category==='resume'){
      return<Resume></Resume>
    }
  }
  return (
    <div className="App">
      <Header
        setCurrentCategory={setCurrentCategory}
      ></Header>
      <main className="mb-5">
        {render(currentCategory)}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
