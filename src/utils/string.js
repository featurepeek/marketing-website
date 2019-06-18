export const pluralize = (count = 0, str = '') => {
  let plural
  const lastChar = str.charAt(str.length - 1)

  if (count === 1) {
    plural = str
  } else if (lastChar === 'y') {
    plural = `${str.slice(0, -1)}ies`
  } else if (lastChar === 's') {
    plural = `${str}es`
  } else {
    plural = `${str}s`
  }

  return `${count.toLocaleString()} ${plural}`
}
