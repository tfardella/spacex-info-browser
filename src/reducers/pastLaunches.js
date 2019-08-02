const defaultState = {
  data: null,
  pastLaunchesIsLoading: false,
  pastLaunchesHasErrored: false,
  selectedLaunch: null
};

export function pastLaunches(state = defaultState, action) {
	switch (action.type) {
		case 'PAST_LAUNCHES_FETCH_DATA_SUCCESS':
			return {
        ...defaultState,
        data: action.launches
      }

		case 'PAST_LAUNCHES_HAS_ERRORED':
			return {
        ...state,
        pastLaunchesHasErrored: action.hasErrored
      }

		case 'PAST_LAUNCHES_IS_LOADING':
			return {
        ...state,
        pastLaunchesIsLoading: action.isLoading
      }
    
    case 'PAST_LAUNCHES_SET_SELECTED':
      return {
        ...state,
        selectedLaunch: action.selectedLaunch
      }
		default:
			return state
	}
}
