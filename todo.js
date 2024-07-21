let lists=[];
dsp();
function todo() {
let inp=document.querySelector("#Text-todo");
let opt=inp.value;
lists.push(opt);
inp.value="";
dsp();
};

function dsp(){
    let disp=document.querySelector("#lst");
    disp.innerText="";
    for(let i=0;i<lists.length;i++) {
        disp.innerText+="\n"+lists[i]
    };
};