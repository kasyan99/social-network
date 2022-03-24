import React from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';



function App(props) {
  return (
    <div className="app">
      <Header />
      <Container stretch={true} element={
        <div className='page-wrap'>
          <Aside aside={props.store.getState().aside} />
          <Content
            store={props.store}
          />
        </div>}
      />
      <Footer />
    </div>
  )
}

export default App;
