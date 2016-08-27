import 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export function fetchPeople() {
  return {
    types: 	 [types.FETCH_PEOPLE, types.FETCH_PEOPLE_SUCCESS, types.FETCH_PEOPLE_FAILURE],
    promise: new Promise((resolve, reject) => {
      fetch('/api/people')
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response
        } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
      })
      .then(response => response.json().then(json => resolve(json))) // return Promise object to middleware
      .catch(error => reject(error))
    })
  }
}
