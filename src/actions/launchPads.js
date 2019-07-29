export function launchPadsHasErrored(bool) {
  return {
    type: 'LAUNCHPADS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function launchPadsIsLoading(bool) {
  return {
    type: 'LAUNCHPADS_IS_LOADING',
    isLoading: bool
  };
}

export function launchPadsFetchDataSuccess(launchPads) {
  return {
    type: 'LAUNCHPADS_FETCH_DATA_SUCCESS',
    launchPads
  };
}

export function setSelectedLaunchPadId(selectedLaunchPad) {
  return {
    type: 'LAUNCHPADS_SET_SELECTED',
    selectedLaunchPad
  };
}

export function launchPadsFetchData(url) {
  return (dispatch) => {
    dispatch(launchPadsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(info => {
        const selected = info[0].padid
        dispatch(launchPadsFetchDataSuccess(info))
        dispatch(setSelectedLaunchPadId(selected))
      })
      .catch(() => dispatch(launchPadsHasErrored(true)))
      .finally(() => dispatch(launchPadsIsLoading(false)));
  };
}
