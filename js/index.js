function calculate(type, value){
    if(type === 'action') {
      if(value === 'c'){
        //clean
        document.getElementById('result').value = ''
      }
      if(value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
        document.getElementById('result').value += value
      }
      if(value === '=') {
        var value_campo = eval(document.getElementById('result').value)
        document.getElementById('result').value = value_campo
      }
    } else if (type === 'value') {

      document.getElementById('result').value += value
    }
  }