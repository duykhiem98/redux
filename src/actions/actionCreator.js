// action creator

const addNumber = (addVal) => {
  return {
    type: 'UP',
    payload: addVal,
  }
}

export const subNumber = (subVal) => {
  return {
    type: 'DOWN',
    payload: subVal,
  }
}

