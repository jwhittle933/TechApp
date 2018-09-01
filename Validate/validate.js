
function validate(form){
  fail = validateForename(form.forename.value);
  fail += validateSurname(form.surname.value);
  fail += validateBuildingName(form.buildingName.value);
  fail += validateRoomnumber(form.roomNumber.value);
  fail += validateProblem(form.problem.value);
  fail += validateEmail(form.email.value);

  if (fail === "") {return true;}
  else {alert(fail); return false;}
}//end function

function validateForename(field){
  return (field == "") ? "First name field was empty.\n" : "";
}//end validate First Name
function validateSurname(field) {
  return (field == "") ? "Last name field was empty.\n" : "";
}//end Validate last name
function validateBuildingName(field){
  if (field == "") return "Building name field was empty.\n";
  return "";
}//end validate username
function validateRoomnumber(field){
  if (field == "") return "Room number field was empty.\n";
  return "";
}//end validate username
function validateProblem(field){
  if (field=="") return "Text field was empty.\n";
  else if (field.length < 10) return "Please provide more information.\n";
  return "";
}//end validate username
function validateEmail(field){
  if (field == "") return "Email field was empty.\n";
  else if(!((field.indexOf(".")>0) && (field.indexOf('@') >0)) || /[^a-zA-Z0-9.@_-]/.test(field))
    {return "The Email address is invalid.\n";}
  else if(field === "eg. name@sbts.edu" || field === "eg.name@sbts.edu")
    {return "The Email address is invalid.\n";}
  return "";
}//end validate email
