
  //REFERENCE
  // let signupStatus= await pixieapi.signup("sonu","1234","1234","q45@hX")
  // console.log(JSON.stringify(signupStatus))// {"status":"success"}
  // let signinStatus = await pixieapi.signin("sonu","1234");
  // console.log(JSON.stringify(signinStatus))//{"status":"success","data":{"_id":"5d7a2e5de3ef311b0fb9c378","username":"sonu","referral":"bcb97414-384f-46cc-8466-35abc0686f53","__v":0,"sessionId":"ba9fd4ed-1254-482c-9988-66202b622f80"}}
  // let loginStatus=await pixieapi.checkLogin();
  // console.log(JSON.stringify(loginStatus))//{"status":"success"}
 
$(document).ready(()=> {
  var user={}

  //on load
  ;(async()=>{
    let loginStatus=await pixieapi.checkLogin()
    if(loginStatus&&loginStatus.status=="success"){
      window.location.replace("https://pixie.jubi.ai/chat");
    }
    else{
      $("#loading-div").hide()
      $("#signin-div").show()
    }
  })();

  //redirects
  $("#redirect-sign-in").click(()=>{
    $("#signin-div").show()
    $("#signup-div").hide()
    $("#loading-div").hide()
  })
  $("#redirect-sign-up").click(()=>{
    $("#signin-div").hide()
    $("#signup-div").show()
    $("#loading-div").hide()
  })

  //on signin
  $("#sign-in").click(async()=>{
    let username=$("#signin-username-input").val()
    let password=$("#signin-password-input").val()
    let signinStatus = await pixieapi.signin(username,password);
    if (signinStatus.status=="success"&&signinStatus.data&&signinStatus.data.username==username){
      user=signinStatus.data
      window.location.replace("https://pixie.jubi.ai/chat");
      return
    }
    $("#signin-error").val(signinStatus.data)
  })

  //on signup
  $("#sign-up").click(async()=>{
    let username=$("#signup-username-input").val()
    let password=$("#signup-password-input").val()
    let cPassword=$("#signup-confirmpassword-input").val()
    let referral=$("#signup-referral-input").val()
    let signupStatus = await pixieapi.signup(username,password,cPassword,referral);
    if (signupStatus.status=="success"){
      $("#signin-div").show()
      $("#signup-div").hide()
      $("#loading-div").hide()
    }
    $("#signup-error").val(signupStatus.data)
  })

});
  
