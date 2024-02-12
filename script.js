let select=document.querySelectorAll('.currency')
let button=document.getElementById('button')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))


function displayDropDown(res)
{
   let curr= Object.entries(res)
   for(let i=0;i<curr.length;i++)
   {
   let opt= `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML+=opt
    select[1].innerHTML+=opt
   }

}
button.addEventListener('click',()=>{
 let cur1=select[0].value
 let cur2=select[1].value
let inputval=input.value
if(cur1===cur2)
{
    alert('choose another currencies')
}
else{
    convert(cur1,cur2,inputval)
}
})

function convert(cur1,cur2,inputval){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${cur1}&to=${cur2}`)
  .then(resp => resp.json())
  .then((data) => {
   // console.log()
    document.getElementById('result').value=Object.values(data.rates)[0]
   // alert(`${cur1} = ${data.rates.cur2} ${cur2}`);
  });
}