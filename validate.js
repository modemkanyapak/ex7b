function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  // ตรวจสอบว่าเป็นตัวเลขล้วนและมีความยาว 10 ตัว
  if (!isNaN(sid) && sid.length === 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  let numCandi = Number(candi);
// ตรวจสอบว่าเป็นตัวเลข และอยู่ในช่วง 1 - 10
  if (!Number.isInteger(numCandi) || numCandi < 1 || numCandi > 10) {
    return false;
  } else {
    return true;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No. (1-10) !!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}