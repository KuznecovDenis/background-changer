document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('btn')
  const spanColor = document.querySelector('.title span')
  
  const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  
  btn.addEventListener('click', () => {
    const hexColor = generateHexColor()
    document.body.style.backgroundColor = hexColor
    spanColor.textContent = hexColor
  })
  
  function generateHexColor () {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
      hex += hexArray[getRandom(0, hexArray.length)]
    }
    return hex
  }
  
  function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
})
