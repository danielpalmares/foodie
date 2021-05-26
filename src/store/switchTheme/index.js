import { light } from '../../styles/themes/_index';

const SWITCH_THEME = 'SWITCH_THEME';

// actions area
export const switchThemeAction = theme => {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
};

// initial state
const defaultTheme = {
  theme: light,
};

// reducers area
export const switchThemeReducer = (state = defaultTheme, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
