import React from 'react';
import './App.css';
// import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="app">
      <Header />
      <Container stretch={true} element={
        <div className='page-wrap'>
          {/* <Aside /> */}
          <Content />
        </div>}
      />
      <Footer />
    </div>
  )
}

export default App;
