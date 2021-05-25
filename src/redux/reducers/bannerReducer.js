import { SHOW_BANNER, HIDE_BANNER } from '../actions/banner';

const initialState = {
  text: null,
  color: '#ff7f7f',
  show: false
};

export default function bannerReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_BANNER:
      const { text, color } = action.data;
      return { ...state, text, color, show: true };
    case HIDE_BANNER:
      return { ...state, show: false, text: null };
    default:
      return state;
  }
}
