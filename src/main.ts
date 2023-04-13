let f:number= 20 
let  c: number= 0


const app = document.getElementById("app")!
let items = '';

for (let i = 1; i <= 80; i += 4) {
  c = ( 5 / 9) * (f - 32);
  items = items + `<li>${String(c)}</li>`  
  f = f + 4;
}  

app.innerHTML= `
<div>
  <ul>
   ${items}
  </ul>
</div>
`
