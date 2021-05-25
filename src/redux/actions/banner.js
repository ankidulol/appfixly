export const SHOW_BANNER = 'SHOW_BANNER';
export const HIDE_BANNER = 'HIDE_BANNER';

export const showBanner = (text, color) => dispatch => {
  color = color || '#ff7f7f';
  dispatch(hideBanner());
  dispatch({ type: SHOW_BANNER, data: { text, color } });
};

export const hideBanner = () => {
  return { type: HIDE_BANNER };
};
