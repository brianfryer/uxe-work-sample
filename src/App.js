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
    controls: null,
    filteredControls: null,
    selectedFilter: 'all',
  }

  componentDidMount() {
    // We have provided a simple getControls() API that will load controls.json
    // for you.  getControls() imposes an artificial delay of 1500ms.
    getControls().then(controls => this.setState({ controls }))
  }

  render() {
    const { controls, selectedFilter } = this.state
    const handleFilterChange = e => this.setState({ selectedFilter: e.target.value })

    let filteredControls = controls && controls.filter(c => {

      if (selectedFilter === 'all') {
        return true
      }

      if (selectedFilter === 'implemented') {
        return c.state && c.state.isImplemented
      }

      if (selectedFilter === 'not-implemented') {
        return c.state && !c.state.isImplemented
      }

      if (selectedFilter === 'unknown') {
        return !c.hasOwnProperty('state')
      }

    })

    return (
      <Router>
        <div className="App">

          <PageHeader
            heading="Implementation Assessment"
            subheading="Evaluate the implementation status of your security controls."
          />

          {controls &&
            <>
              <FilterControls
                selectedFilter={selectedFilter}
                onFilterChange={handleFilterChange}
                controls={controls}
              />

              <ControlsWrapper>
                <Route exact path='/' render={() => (
                  <Redirect to={{ pathname: `/controls/${controls[0].id}` }} />
                )} />

                <Route path='/controls/:controlId' render={({ match }) => (
                  <>
                    <ControlList controls={filteredControls} location={match.params.controlId} />
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
