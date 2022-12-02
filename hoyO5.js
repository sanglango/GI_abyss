if (window.location.hostname=="www.hoyolab.com"){
var userCookie = document.cookie;
var userUid;
var userName
var userLevel;
var userServer;
var DS;
const rootUrl = "aHR0cHM6Ly9taW5zaW1jaGVjay5jb20="
try {
const generateRandomString = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const timeaaaa = Math.round(Date.now()/1000);
const randomStringgggg = generateRandomString(6);
let scvmls =`${atob(rootUrl)}/api/tool/md5?t=${timeaaaa}&r=${randomStringgggg}
`
async function seggggssss() {
var convertMd5 = await fetch(
  scvmls,
  {
    method: "GET",
    headers: {
    "user-agent":
        "genshin_abyss_mi",
      accept: "application/json, text/plain, */*",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
    },
  }
  
);
convertMd5 = await convertMd5.json();
DS = `${timeaaaa},${randomStringgggg},${convertMd5['result']}`
}seggggssss()
async function UploadAbyss(hoyoData,spiralAbyssData) {
  const res = await fetch(
    `${atob(rootUrl)}/api/game/genshin/abyss/upload?uid=${userUid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([hoyoData,spiralAbyssData]),
    }
  );

    obj = await res.json();
    console.log(obj);
    console.log([hoyoData,spiralAbyssData]);
    setTimeout(function () {
      window.location.href =
        `${atob(rootUrl)}/g/genshin/abyss?code=success&name=${userName}&uid=${userUid}`;
    }, 3000);
 
}
setTimeout(function () {
async function MAIN() {
var hoyoData = await fetch(
    `https://bbs-api-os.hoyolab.com/game_record/genshin/api/index?server=${userServer}&role_id=${userUid}`,
    {
      method: "GET",
      credentials: 'include',
      headers: {
        cookie:userCookie,
        "x-rpc-app_version": "1.5.0",
        "x-rpc-client_type": "5",
        "x-rpc-language": "ko-kr",
        origin: "https://act.hoyolab.com",
        referer: "https://act.hoyolab.com",
        ds:DS,
        accept: "application/json, text/plain, */*",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      },
    }
  );
  hoyoData = await hoyoData.json();
  var spiralAbyssData = await fetch(
    `https://bbs-api-os.hoyolab.com/game_record/genshin/api/spiralAbyss?role_id=${userUid}&server=${userServer}&schedule_type=1`,
    {
      method: "GET",
      credentials: 'include',
      headers: {
        cookie:userCookie,
        "x-rpc-app_version": "1.5.0",
        "x-rpc-client_type": "5",
        "x-rpc-language": "ko-kr",
        origin: "https://act.hoyolab.com",
        referer: "https://act.hoyolab.com",
        ds:DS,
        accept: "application/json, text/plain, */*",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
      },
    }
  );
  spiralAbyssData = await spiralAbyssData.json();
  UploadAbyss(hoyoData,spiralAbyssData)
}
async function GetUid() {
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
const userluid = getCookie('ltuid');
  var userMeta = await fetch(
      `https://bbs-api-os.hoyolab.com/game_record/card/wapi/getGameRecordCard?uid=${userluid}`,
      {
        method: "GET",
        credentials: 'include',
        headers: {
          cookie:userCookie,
          "x-rpc-app_version": "1.5.0",
          "x-rpc-client_type": "5",
          "x-rpc-language": "ko-kr",
          origin: "https://act.hoyolab.com",
          referer: "https://act.hoyolab.com",
          ds:DS,
          accept: "application/json, text/plain, */*",
          "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
        },
      }
    );
    userMeta = await userMeta.json();
    userUid = userMeta['data']['list'][0]['game_role_id'];
    userName = userMeta['data']['list'][0]['nickname'];
    userLevel = userMeta['data']['list'][0]['level'];
    userServer = userMeta['data']['list'][0]['region']; 
    console.log(userServer)
    return userUid,userName,userLevel,userServer
  }
GetUid().then(()=> MAIN()) 
 
}, 1000);
} catch (err) {
  alert(`작동 실패 - 사유: \n${err}`);
}} else{
  alert("호요랩 사이트가 아니에요..\n이동하신 후 다시 눌러주세요!")
  window.location.href = 'https://www.hoyolab.com/home';
}
