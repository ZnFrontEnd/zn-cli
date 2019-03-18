
// eslint-disable-next-line import/prefer-default-export
export const checkType = (obj, type) => Object.prototype.toString.call(obj).slice(8, -1) === type;
