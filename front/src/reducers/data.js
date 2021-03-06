import * as t from '../constants/dataTypes';
import initialState from './initialState';
import {mergeDeep} from '../utils/UtilHelper';


export default function data(state = initialState.data, action) {
  let newState;

  switch (action.type) {
    case t.INITIAL_DATA_SUCCESS:
      newState = mergeDeep({}, state);
      newState.empresas = action.empresas;
      return newState;

    case t.SAVE_EMPRESA_SUCCESS:
      newState = mergeDeep({}, state);
      newState.empresas.push(action.empresa);
      return newState;

    default:
      return state;

  }
}
