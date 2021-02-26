import Commerce from '@chec/commerce.js';
//creating a new instance of commerce for our store
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);