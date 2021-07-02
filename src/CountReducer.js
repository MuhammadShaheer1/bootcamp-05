const countReducer = (state, action) => {
    switch (action) {
      case 'SUMMER':
        return 'Summer'
    case 'WINTER':
        return 'Winter'
    case 'AUTUMN':
        return 'Autumn'
    case 'SPRING':
        return 'Spring'
    }
  }

  export default countReducer