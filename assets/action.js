
  
$(document).ready(async ()=> {
  let signupStatus= await pixieapi.signup("sonu","1234","1234","q45@hX")
  console.log(JSON.stringify(signupStatus))
  let signinStatus = await pixieapi.signin("sonu","1234");
  console.log(JSON.stringify(signinStatus))
  let loginStatus=await pixieapi.checkLogin();
  console.log(JSON.stringify(loginStatus))
});
  
