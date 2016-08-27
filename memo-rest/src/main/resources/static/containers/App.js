import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
// import fetch from 'isomorphic-fetch'
import PersonList from '../components/PersonList'
import { fetchPeople as fetchPeopleAction } from '../actions'

class App extends Component {
	componentDidMount() {
    this.props.dispatch(fetchPeopleAction())
	}

  render() {
    return (
      <PersonList people={this.props.api.people}/>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  api:      PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
    api: state.api
  }
}

export default connect(mapStateToProps)(App);
