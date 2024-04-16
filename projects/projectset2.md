## projectlink

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# solution code
## project1
```javascript

//generate arandom color

const randomcolor=function(){
  const hex="0123456789ABCDEF";
  let color ='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
};
let intervalid;
const startchangingcolor=function(){
  if(!intervalid){
   intervalid=setInterval(changebgcolor,1000);}
  function changebgcolor(){
  document.body.style.backgroundColor =randomcolor();
}

};
const stopchangingcolor=function(){
  clearInterval(intervalid);
  intervalid=null;

};

document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);
```
## project2
```javascript
const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class ='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key ===" " ? "space" : e.key}</td>
    <td>${e.keycode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
  `;
});
```