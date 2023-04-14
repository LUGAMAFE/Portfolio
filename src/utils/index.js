// TODO: replace with a map

export function angleGradient(shapeId, distance) {
  const positions = {
    1: { positionX: distance, positionY: distance, angle: 145 },
    2: { positionX: distance * -1, positionY: distance, angle: 225 },
    3: { positionX: distance * -1, positionY: distance * -1, angle: 315 },
    4: { positionX: distance, positionY: distance * -1, angle: 45 },
  }
  return positions[shapeId]
}

export function getIntFormValue(form) {
  const values = {
    flat: { value: 1 },
    concave: { value: 2 },
    convex: { value: 3 },
    pressed: { value: 4 },
  }
  return values[form].value
}

export function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += ('00' + c).substr(c.length)
  }

  return rgb
}

export function getContrast(hex) {
  const r = parseInt(hex.substr(1, 2), 16),
    g = parseInt(hex.substr(3, 2), 16),
    b = parseInt(hex.substr(5, 2), 16),
    yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? '#001f3f' : '#F6F5F7'
}

export const handleDistance = (value) => {
  let distance = value
  let blur = value * 2
  return { blur, distance }
}

export const handleSize = (value) => {
  let size = value
  let distance = Math.round(value * 0.1)
  let blur = Math.round(value * 0.2)
  return { size, blur, distance }
}

export const getIfGradient = (shapeId) => {
  if (shapeId === 2 || shapeId === 3) {
    return true
  } else {
    return false
  }
}
