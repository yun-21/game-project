const root = document.getElementById('root');
const allScreen = document.createElement('div');
const title = document.createElement('h1');
const img = document.createElement('img');
const selectBox = document.createElement('div');
const yesSelect = document.createElement('h1');
const yesPath = document.createElement('a');
const noSelect = document.createElement('h1');
const noPath = document.createElement('a');

root.appendChild(allScreen);
allScreen.appendChild(title);
allScreen.appendChild(img);
allScreen.appendChild(selectBox);
selectBox.appendChild(yesSelect);
selectBox.appendChild(noSelect);
yesSelect.appendChild(yesPath);
noSelect.appendChild(noPath);

document.body.style.margin=0;
document.body.style.padding=0;
root.style.height = "100vh";
root.style.width = "100vw";
root.style.backgroundColor ="black";
allScreen.style.display = "flex";
allScreen.style.alignItems="center";
allScreen.style.justifyContent = "center";
allScreen.style.flexDirection ="column";
allScreen.style.gap="30px";

title.innerHTML="게임을 시작하시겠습니까?";

img.src="https://i.ibb.co/xskbY7p/main-Picture.png";
img.style.height="600px";

selectBox.style.display="flex";
selectBox.style.gap="80px";

yesPath.innerHTML="네";
noPath.innerHTML="아니요";
yesPath.style.textDecorationLine="none";
noPath.style.textDecorationLine="none";

yesPath.href="gameStart.html";
noPath.href="gameNoStart.html";

yesPath.addEventListener('mouseover', function(){
  yesPath.style.fontSize="50px";
});
yesPath.addEventListener('mouseout', function(){
  yesPath.style.fontSize="32px";
});

noPath.addEventListener('mouseover', function(){
  noPath.style.fontSize="50px";
});
noPath.addEventListener('mouseout', function(){
  noPath.style.fontSize="32px";
});