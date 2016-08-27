import React, { PropTypes, Component } from 'react'

class Person extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.person.firstName}</td>
				<td>{this.props.person.lastName}</td>
				<td>{this.props.person.description}</td>
			</tr>
		)
	}
}

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person
