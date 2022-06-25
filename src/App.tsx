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
import { AppStateType } from './reduxF/redux-store';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeThunkCreator: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

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

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeThunkCreator })(App)
