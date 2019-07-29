const defaultState = {
  data: null,
  launchPadsIsLoading: false,
  launchPadsHasErrored: false,
  selectedLaunchPad: null
};

export function launchPads(state = defaultState, action) {
	switch (action.type) {
		case 'LAUNCHPADS_FETCH_DATA_SUCCESS':
			return {
        ...state,
        data: action.launchPads
      }

		case 'LAUNCHPADS_HAS_ERRORED':
			return {
        ...state,
        launchPadsHasErrored: action.hasErrored
      }

		case 'LAUNCHPADS_IS_LOADING':
			return {
        ...state,
        launchPadsIsLoading: action.isLoading
      }
    case 'LAUNCHPADS_SET_SELECTED':
      return{
        ...state,
        selectedLaunchPad: action.selectedLaunchPad
      }
		default:
			return state
	}
}
