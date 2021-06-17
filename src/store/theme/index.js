import { light } from '../../styles/themes';
import { themeAction } from './actions';
import { SWITCH_THEME } from './types';

const initialState = {
  theme: light,
};

function theme(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}

export { theme, themeAction };
