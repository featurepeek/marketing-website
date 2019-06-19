// @flow

// maps plain objects to structured objects
export const castArray = (arr = [], Fn) => {
  if (!Array.isArray(arr)) {
    return []
  }
  return arr.map(obj => Fn(obj))
}
