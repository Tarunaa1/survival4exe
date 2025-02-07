const pop = document.getElementById('pop')
const key = document.getElementById('key')
const back = document.getElementById('back')
const back_num = document.getElementById('back_num')
const ans = document.getElementById('ans');
const numb = document.getElementById('numb');
let no= 6;
let ind = 1;
const id = [];
for (let i = 1; i <= 75; i++) {
    const element = document.getElementById(`btn${i}`);
    id[i-1] = element;
}
const popup = (keyword,missing,answer,i)=>{
    no = answer;
    pop.style.display = 'flex';
    key.innerText = keyword;
    ans.innerText = missing;
    ind = i;
}
const number = ()=>{
    pop.style.display = 'none';
    back.style.display = 'flex';
    back_num.innerText = no;


}
const closepop = (number)=>{
    back.style.display = 'none';
    pop.style.display = 'none';
    const num = numb.value;
    console.log(num);
    id[ind].innerHTML =`<h1>${num}</h1>` ;
}