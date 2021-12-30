let pro = 0;
let rank = "";
let luck = 75;
let resultList = [];
let stone = {};
let stones = [];
let succ = 0;

function setSuccess(){
    for (let a = 1;a >= pro;a++){
        
    }
}

function log(){
    pro = document.getElementById('probability').value;
    rank = document.getElementById('rank').value;

    if(rank === "legend"){
        rank = 18;
    }else{
        rank = 20;
    }
    for(let j = 1; j <= pro; j++){
        stone = {
            num : j,
            result : getRandom(),
            cSuc : succ
        }
        stones[j] = stone;
    }
}

function reset(){
    luck = 75;
    resultList = [];
    stone = [];
    succ = 0;
}

function getRandom(){
    reset();
    for(let i = 1;i <= rank;i++){
        if(Math.random() * 100 + 1 >= luck){
            if(luck > 25)
                luck = luck - 10;
            resultList[i] = "O";
            succ++;
        }else{
            if(luck < 75)
                luck = luck + 10;
            resultList[i] = "X";
        }
    }
    return resultList;
}

function submit(){
    log();
    console.log(stones);
}