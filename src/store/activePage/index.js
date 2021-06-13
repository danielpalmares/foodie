const SWITCH_ACTIVE_PAGE = 'SWITCH_ACTIVE_PAGE';

export function activePageAction(page) {
  return {
    type: SWITCH_ACTIVE_PAGE,
    payload: page,
  };
}

const initialState = {
  activePage: '',
};

export function activePage(state = initialState, action) {
  switch (action.type) {
    case SWITCH_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
}
