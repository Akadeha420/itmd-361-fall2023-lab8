function init() {
  //add your javascrip between these two lines of code
  const button = document.getElementById('entrybutton')
  
  button.addEventListener('click', () => {
    const text = document.getElementById('entryinput').value
    alert('Aung Kham Naung: ' + text)
    document.getElementById('textoutput').innerHTML = text
  })

  
}
  window.addEventListener('load', init);