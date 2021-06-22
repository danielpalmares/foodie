import { SWITCH_THEME } from './types';
import { themeAction } from './actions';
import { light, dark } from '../../styles/themes';
import { getItemFromLS } from '../../utils';

const themeArr = getItemFromLS('theme');

const initialState = {
  theme: themeArr[0]?.theme === 'light' || themeArr.length === 0 ? light : dark,
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
