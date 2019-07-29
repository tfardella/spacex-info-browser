export function rocketsHasErrored(bool) {
  return {
    type: 'ROCKETS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function rocketsIsLoading(bool) {
  return {
    type: 'ROCKETS_IS_LOADING',
    isLoading: bool
  };
}

export function rocketsFetchDataSuccess(rockets) {
  return {
    type: 'ROCKETS_FETCH_DATA_SUCCESS',
    rockets
  };
}

export function rocketsSetSelected(selectedRocket) {
  return {
    type: 'ROCKETS_SET_SELECTED',
    selectedRocket
  };
}

export function rocketsFetchData(url) {
  return (dispatch) => {
    dispatch(rocketsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(info => {
        const selected = info[0].rocketid
        dispatch(rocketsFetchDataSuccess(info))
        dispatch(rocketsSetSelected(selected))
      })
      .catch(() => dispatch(rocketsHasErrored(true)))
      .finally(() => dispatch(rocketsIsLoading(false)));
  };
}
