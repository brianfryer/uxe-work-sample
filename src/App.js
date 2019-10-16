import React, { Component } from 'react';
import './App.css';
import getControls from './api'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import ControlsWrapper from './components/ControlsWrapper';
import ControlList from './components/ControlList';
import ControlMain from './components/ControlMain';
import FilterControls from './components/FilterControls';
import PageHeader from './components/PageHeader';

class App extends Component {
  state = {
    controls: null
  }

  componentDidMount() {
    // We have provided a simple getControls() API that will load controls.json
    // for you.  getControls() imposes an artificial delay of 1500ms.
    getControls().then(controls => this.setState({ controls }))
  }

  render() {
    const { controls } = this.state
    let thing = true
    const filteredControls = controls && controls.filter(c => {
      return (thing === 'unknown')
        ? !c.hasOwnProperty('state')
        : c.state && c.state.isImplemented === thing
    })

    console.log(filteredControls)

    return (
      <Router>
        <div className="App">

          <PageHeader
            heading="Implementation Assessment"
            subheading="Evaluate the implementation status of your security controls."
          />

          {controls &&
            <>
              <FilterControls controls={controls} />
              <ControlsWrapper>
                <Route exact path='/' render={() => (
                  <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
                )} />

                <Route path='/controls/:controlId' render={({ match }) => (
                  <>
                    <ControlList controls={controls} location={match.params.controlId} />
                    <ControlMain control={controls.find(c => c.id.toString() === match.params.controlId)} />
                  </>
                )} />
              </ControlsWrapper>
            </>
          }

        </div>
      </Router>
    );
  }
}

export default App;
