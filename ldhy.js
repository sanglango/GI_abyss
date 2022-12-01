const userCookie = document.cookie;
async function UploadAbyss(uploadData) {
  const res = await fetch(
    `https://minsimcheck.com/api/game/genshin/abyss/upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(uploadData),
    }
  );
  obj = await res.json();
  console.log(obj);
}
if (userCookie != null) {
    const tData = {abyssData_GI: "",cookie_GI:userCookie};
  UploadAbyss(tData);
} else {
  alert("업로드 실패...");
}
