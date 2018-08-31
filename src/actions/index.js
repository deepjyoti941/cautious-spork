import {
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_SUCCESS,
  GET_SUGGESTIONS_FAIL,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAIL
} from './types';
import PostCode from 'services/Postcode';

export const getSuggestions = query => {
  return dispatch => {
    PostCode.getAddress(query)
      .then(({ data }) => {
        suggestionsListSuccess(dispatch, data);
      })
      .catch(error => suggestionsListFail(dispatch, error));
  };
};

export const getAddress = item => {
  return dispatch => {
    PostCode.setAddress(item.Id)
      .then(response => {
        if (response.status === 200) {
          if ('Error' in response.data.Items[0]) {
            getAddressFail(dispatch, { error: true });
            return;
          }

          getAddressSuccess(
            dispatch,
            PostCode.formattAddress(response.data.Items[0])
          );
        }
      })
      .catch(error => getAddressFail(dispatch, { error: true }));
  };
};

const suggestionsListSuccess = (dispatch, result) => {
  console.log(result);

  dispatch({
    type: GET_SUGGESTIONS_SUCCESS,
    payload: result
  });
};

const suggestionsListFail = dispatch => {
  dispatch({
    type: GET_SUGGESTIONS_FAIL
  });
};

const getAddressSuccess = (dispatch, result) => {
  console.log(result);

  dispatch({
    type: GET_ADDRESS_SUCCESS,
    payload: result
  });
};

const getAddressFail = dispatch => {
  dispatch({
    type: GET_ADDRESS_FAIL
  });
};
