// @flow
export const gradientMap = {
  teal: ['#05c5cc', '#13b7d1'],
  green: ['#5abf7e', '#1fae5f'],
  // purple: ['#aa56a9', '#9f509d'],
  blue: ['#00b0de', '#2896e0'],
  pink: ['#c274d1', '#e16fbc'],
}

export const getColorFromStatus = status => {
  const statusColors = {
    // branch: 'muted',
    closed: 'cb2431',
    draft: '6a737d',
    merged: '6f42c1',
    opened: '28a745',
  }
  return `#${statusColors[status]}`
}

const getRGBFromHex = hex => {
  // turn hex val to RGB
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : {}
}

// calc to work out if it will match on black or white better
export const getTextColorForBackgroundColor = hex => {
  const rgb = getRGBFromHex(hex)
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'black' : 'white'
}
