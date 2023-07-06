export const darkModeReducer = (state,action) => {
  switch (action.type){
    case 'turnOnDarkMode':
      return {darkMode:'on'}
    case 'turnOffDarkMode':
      return {darkMode:'off'}
    default:
      return state
  }
}

export const darkModeState = {
  darkMode:'off'
}

