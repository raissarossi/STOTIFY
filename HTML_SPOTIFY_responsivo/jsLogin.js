function alertF(){
  Swal.fire({
    title: 'Connect with Facebook?',
    text: "All informations used on Facebook will be use to create your account!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#1DAF00',
    cancelButtonColor: '#491CCE',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Connected!',
        'Your account has been created.',
        'success'
      )
    }
  })
}
  
function alertA(){
  Swal.fire({
    title: 'Connect with Apple?',
    text: "All informations used on Apple will be use to create your account!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#1DAF00',
    cancelButtonColor: '#491CCE',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Connected!',
        'Your account has been created.',
        'success'
      )
    }
  })
}
  
function alertG(){
  Swal.fire({
    title: 'Connect with Google?',
    text: "All informations used on Google will be use to create your account!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#1DAF00',
    cancelButtonColor: '#491CCE',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Connected!',
        'Your account has been created.',
        'success'
      )
    }
  })
}
 
async function alertNum(){
  const ipAPI = '//api.ipify.org?'
var valuee = 0
const inputValue = fetch(ipAPI)
  .then(response => response.json())
  const { value: ddi } = await Swal.fire({
    title: 'Select your country',
    input: 'select',
    inputOptions: {
        55: 'BR +55',
        49: 'DE +49',
        1: 'CA +1',
        34: 'ES +34',
        1: 'US +1',
        56: 'CL +56',
        64: 'NZ +64',
        46: 'SE +46'
      
    },
    inputPlaceholder: 'Select your country',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (!value == '') {
          resolve()
        }
        else {
          resolve('You need to select :)')
        }
        valuee = value
      })
    }
  })
var numF=0
const { value: number } = await Swal.fire({
  title: 'Enter your phone number',
  input: 'text',
  inputLabel: 'Your phone number',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to write something!'
    }
    else if (value.length<=8){
      return 'Invalid number!'
    }
    else if (value.length>=12){
      return 'Invalid number!'
    }
    else if(valuee != 55){
        var num = value.slice(0, -7)
        const nuum = value.slice(value.length - 7).slice(0,-4)
        const nuuum = value.slice(value.length - 4)
        numF = num+' '+nuum+' '+nuuum
      }
    else if (valuee == 55){
        const num = value.slice(2, -4)
        const nuum = value.slice(value.length - 4)
        const nuuum = value.slice(0, 2)
        numF =nuuum+' '+num+'-'+nuum
      }
    
  }
})

if (number) {
  Swal.fire(` Entered as +${ddi} ${numF}`)
}
}
