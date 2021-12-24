let pro = "";
let luck = 75;
let resultList = [];
let stone = {};

function log(){

}

function reset(){
    
}

function getRandom(){
    for(let i = 0;i >= 20;i++){
        console.log(i);
        if(Math.random() * 100 + 1 >= luck){
            if(luck > 25)
                luck = luck - 10;
            resultList[i] = "O";
        }else{
            if(luck < 75)
                luck = luck + 10;
            resultList[i] = "X";
        }
    }
    console.log(resultList);
}

function submit(){
    reset();
    pro = document.getElementById('probability').value;
    getRandom();
}