import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import AsideContainer from './components/Aside/AsideContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeThunkCreator } from './reduxF/app-reducer';
import Preloader from './components/common/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeThunkCreator()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app">
        <HeaderContainer />
        <Container stretch={true} element={
          <div className='page-wrap'>
            <AsideContainer />
            <Content />
          </div>}
        />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeThunkCreator })(App)
