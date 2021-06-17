import { SWITCH_THEME } from '../types';

export function themeAction(theme) {
  return {
    type: SWITCH_THEME,
    payload: theme,
  };
}
