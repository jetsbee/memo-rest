import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  people:     [],
  isFetching: false
}

export default function api(state = initialState, action){
  switch (action.type) {
    case ActionTypes.FETCH_PEOPLE:
    return Object.assign({}, state, {
      isFetching: true
    })

    case ActionTypes.FETCH_PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        people:     action.result._embedded.people,
        isFetching: false
      })

    case ActionTypes.FETCH_PEOPLE_FAILURE:
      return Object.assign({}, state, {
        error: {
          name:    action.error.name,
          message: action.error.message
        },
        isFetching: false
      })

    default:
      return state
  }
}
