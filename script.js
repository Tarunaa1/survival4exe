const pop = document.getElementById('pop')
const key = document.getElementById('key')
const back = document.getElementById('back')
const back_num = document.getElementById('back_num')
let no= 6;
const id = [];
for (let i = 1; i <= 75; i++) {
    const element = document.getElementById(`btn${i}`);
    id[i-1] = element;
}
const popup = (keyword,num,i)=>{
    no = num;
    pop.style.display = 'flex';
    key.innerText = keyword;
    id[i].style.backgroundColor = 'green';

    // pop.innerHTML = <h1>${keyword}</h1>

}
const number = ()=>{
    pop.style.display = 'none';
    back.style.display = 'flex';
    back_num.innerText = no;


}
const closepop = ()=>{
    back.style.display = 'none';
    pop.style.display = 'none';
}