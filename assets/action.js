
  
$(document).ready(async ()=> {
  let loginStatus=await pixieapi.checkLogin();
  console.log(loginStatus)
});
  
