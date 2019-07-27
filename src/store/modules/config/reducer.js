import produce from 'immer';

const INITIAL_STATE = {
  darkMode: false,
};

export default function config(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@config/TOGGLE_DARK_MODE': {
        draft.darkMode = !draft.darkMode;
        break;
      }
      default:
    }
  });
}
