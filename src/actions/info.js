export function infoHasErrored(bool) {
  return {
    type: 'INFO_HAS_ERRORED',
    hasErrored: bool
  };
}

export function infoIsLoading(bool) {
  return {
    type: 'INFO_IS_LOADING',
    isLoading: bool
  };
}

export function infoFetchDataSuccess(info) {
  return {
    type: 'INFO_FETCH_DATA_SUCCESS',
    info
  };
}

export function infoFetchData(url) {
  return (dispatch) => {
    dispatch(infoIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(info => dispatch(infoFetchDataSuccess(info)))
      .catch(() => dispatch(infoHasErrored(true)))
      .finally(() => dispatch(infoIsLoading(false)));
  };
}
