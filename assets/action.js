
  //REFERENCE
  // let signupStatus= await pixieapi.signup("sonu","1234","1234","q45@hX")
  // console.log(JSON.stringify(signupStatus))// {"status":"success"}
  // let signinStatus = await pixieapi.signin("sonu","1234");
  // console.log(JSON.stringify(signinStatus))//{"status":"success","data":{"_id":"5d7a2e5de3ef311b0fb9c378","username":"sonu","referral":"bcb97414-384f-46cc-8466-35abc0686f53","__v":0,"sessionId":"ba9fd4ed-1254-482c-9988-66202b622f80"}}
  // let loginStatus=await pixieapi.checkLogin();
  // console.log(JSON.stringify(loginStatus))//{"status":"success"}
 
$(document).ready(async ()=> {
  let loginStatus=await pixieapi.checkLogin()
  if(loginStatus&&loginStatus.status=="success"){
    window.location.replace("https://pixie.jubi.ai/chat");
  }
  else{
    $("#loading-div").hide()
    $("#signin-div").show()
  }
});
  
