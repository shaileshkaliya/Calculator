let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let purple = true;
let change_theme = () => {
    sun.classList.toggle("bg-white");
    moon.classList.toggle("bg-white");

    document.getElementsByClassName('calc-display')[0].classList.toggle("calc-display-light");
    document.getElementsByClassName('display')[0].classList.toggle("display-light");
    document.querySelector("input").classList.toggle("input-light");
    document.querySelector("input").classList.toggle("placeholder-color");
    document.getElementById('sun').classList.toggle("sun-light");
    document.getElementById('moon').classList.toggle("moon-light");

    let operators = document.getElementsByClassName('operator');
    let btns = document.getElementsByClassName('btn');

    for(btn of btns){
        btn.classList.toggle('btn-light');
    }

    if(purple){

        for(operator of operators){
            // operator.classList.toggle('operator-light');
            operator.style.color = '#e02be5';
            
        }
        purple = false;
    }else{
        for(operator of operators){
            // operator.classList.toggle('operator-light');
            operator.style.color = '#e81515';
            
        }
        purple = true;
        
    }

    document.querySelector("body").classList.toggle("bg-black");
}


let string = "";

let btns = document.getElementsByClassName('btn');

for(const btn of btns){
    btn.addEventListener('click',(e) => {
        try {
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if(e.target.innerHTML == 'AC'){
                string = "";
                document.querySelector('input').value = string;
            }else{
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }catch (error) {
            string = "Wrong input";
            document.querySelector('input').value = string;

            setTimeout(() => {
                string = "";
                document.querySelector('input').value = string;
            },2000)
        }
        
    })
}