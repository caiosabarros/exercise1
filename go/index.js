function validation(){
  let email_input = document.getElementById('exampleFormControlInput1').value;
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(re.test(email_input)){
  } else {
    document.getElementById('exampleFormControlInput1').style.background = "red";
  }  
}
