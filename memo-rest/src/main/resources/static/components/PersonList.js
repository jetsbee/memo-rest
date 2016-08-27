import React, { PropTypes, Component } from 'react'
import Person from './Person.js'

class PersonList extends Component {
	render() {
		var people = this.props.people.map(person =>
			<Person key={person._links.self.href} person={person}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{people}
				</tbody>
			</table>
		)
	}
}

PersonList.propTypes = {
  people: PropTypes.array.isRequired
}

export default PersonList
