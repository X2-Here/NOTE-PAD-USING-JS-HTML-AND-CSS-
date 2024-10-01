const add = document.getElementById('add');
const save = document.getElementById('save');
const right= document.getElementById('right');
let count=0;
let text = null;
add.addEventListener('click',()=>{
    count++;
    if(count>=2){
        if(text.value!='')
        {
            let mgs = confirm("Do you want to save this file");
        if(mgs){
            const blob = new Blob([text.value],{type:"text/plain"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href= url;
            body.appendChild(a);
            a.download = 'note.txt';
            a.click();
            body.removeChild(a);
            URL.revokeObjectURL(url);
            count = 0;
            text.value = '';
        }
        else{
           text.value="";
           count=0;
        }
        }
        else{
            alert("Pleasee be sure to write something to save it");
        }

    }
    else{
        text = document.createElement("textarea");
        text.rows = 10; 
        text.style.width = '100%';
        text.style.resize = 'none';
        text.style.boxSizing = 'border-box';
        text.style.fontSize = '20px';  
        right.appendChild(text);
        text.focus();
    }
});
save.addEventListener('click', ()=>{
   if(text && text.value!=''){
    let note = text.value;
    console.log(note);
    const blob = new Blob([note], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'note.txt';
    a.click();
    URL.revokeObjectURL(url);
   }
   else{
    alert("No text to save");
   }
});