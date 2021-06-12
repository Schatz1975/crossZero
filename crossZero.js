let name;
let pole = ['' , '' , '' , '' , '' , '' , '' , '' , ''];
let countMovePlayer = 0;
let winner = false;

function randomInteger(min, max){
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function buttonClick(){
    name = document.getElementById("name").value.trim();
    if(name == ""){
        return;
    }
    let panel = document.getElementById("panel");
    panel.innerHTML = 
    '<div class="main_panel">'+
            '<div class="name" id="winner">'+ name +'</div>'+
            '<div class="boxes_panel">'+
                '<div class="box" id="1" onclick="makeMovePlayer(1)"></div>'+
                '<div class="box" id="2" onclick="makeMovePlayer(2)"></div>'+
                '<div class="box" id="3" onclick="makeMovePlayer(3)"></div>'+
                '<div class="box" id="4" onclick="makeMovePlayer(4)"></div>'+
                '<div class="box" id="5" onclick="makeMovePlayer(5)"></div>'+
                '<div class="box" id="6" onclick="makeMovePlayer(6)"></div>'+
                '<div class="box" id="7" onclick="makeMovePlayer(7)"></div>'+
                '<div class="box" id="8" onclick="makeMovePlayer(8)"></div>'+
                '<div class="box" id="9" onclick="makeMovePlayer(9)"></div>'+
            '</div>'+
            '<div class="buttons_panel">'+
                '<input type="button" onclick="start()" class="start_back" value="START">'+
                '<input type="button" onclick="back()" class="start_back" value="BACK">'+
            '</div>'+
        '</div>';
}

function makeMoveBot(){
    let id;
    while(1 > 0){
        id = randomInteger(1 , 9);
        if(pole[id - 1] == ''){
            break;
        }
    }
    let zero = document.getElementById(id);
    zero.style.backgroundImage = "url(images/zero.png)";
    pole[id - 1] = "0";
    if(victory("0") == true){
        winner = true;
        let divWinner = document.getElementById("winner");
        divWinner.innerHTML = "Повезёт<br>в следующий раз!";
        divWinner.style.color = "yellow";
        return;
    }
}

function makeMovePlayer(id){
    if(pole[id - 1] != '' || winner == true){
        return;
    }
    let cross = document.getElementById(id);
    cross.style.backgroundImage = "url(images/cross.png)";
    pole[id - 1] = "x";
    countMovePlayer++;
    if(victory("x") == true){
        winner = true;
        let divWinner = document.getElementById("winner");
        divWinner.innerHTML = "Поздравляем<br>с победой!";
        divWinner.style.color = "teal";
        return;
    }
    if(countMovePlayer < 5){
        makeMoveBot();
    }
}

function back(){
    start();
    let panel = document.getElementById("panel");
    panel.innerHTML =
    '<div class="panel">'+
            '<input type="text" id="name" placeholder="name">'+
            '<input type="button" onclick="buttonClick()" class="button" value="NEW GAME">'+
        '</div>';    
}

function start(){
    pole = ['' , '' , '' , '' , '' , '' , '' , '' , ''];
    countMovePlayer = 0;
    for(let id = 1 ; id < 10 ; id++){
        let panel = document.getElementById(id);
        panel.style.backgroundImage = "url(images/white.png)";
    }
    let divWinner = document.getElementById("winner");
        divWinner.innerHTML = name;
        divWinner.style.color = "black";
    winner = false;
}

function check(i , j , k , p){
    if(pole[i] == p & pole[j] == p & pole[k] == p){
        return true;
    }
    return false;
}

function victory(player){
    if(check(0 , 1 , 2 , player) == true){
        let panel1 = document.getElementById(1);
        panel1.style.backgroundImage = "url(images/red4.png)";
        let panel2 = document.getElementById(2);
        panel2.style.backgroundImage = "url(images/red4.png)";
        let panel3 = document.getElementById(3);
        panel3.style.backgroundImage = "url(images/red4.png)";
        return true;
    }
    if(check(3 , 4 , 5 , player) == true){
        let panel4 = document.getElementById(4);
        panel4.style.backgroundImage = "url(images/red4.png)";
        let panel5 = document.getElementById(5);
        panel5.style.backgroundImage = "url(images/red4.png)";
        let panel6 = document.getElementById(6);
        panel6.style.backgroundImage = "url(images/red4.png)";
        return true;
    }
    if(check(6 , 7 , 8 , player) == true){
        let panel7 = document.getElementById(7);
        panel7.style.backgroundImage = "url(images/red4.png)";
        let panel8 = document.getElementById(8);
        panel8.style.backgroundImage = "url(images/red4.png)";
        let panel9 = document.getElementById(9);
        panel9.style.backgroundImage = "url(images/red4.png)";
        return true;
    }
    if(check(0 , 3 , 6 , player) == true){
        let panel1 = document.getElementById(1);
        panel1.style.backgroundImage = "url(images/red1.png)";
        let panel4 = document.getElementById(4);
        panel4.style.backgroundImage = "url(images/red1.png)";
        let panel7 = document.getElementById(7);
        panel7.style.backgroundImage = "url(images/red1.png)";
        return true;
    }
    if(check(1 , 4 , 7 , player) == true){
        let panel2 = document.getElementById(2);
        panel2.style.backgroundImage = "url(images/red1.png)";
        let panel5 = document.getElementById(5);
        panel5.style.backgroundImage = "url(images/red1.png)";
        let panel8 = document.getElementById(8);
        panel8.style.backgroundImage = "url(images/red1.png)";
        return true;
    }
    if(check(2 , 5 , 8 , player) == true){
        let panel3 = document.getElementById(3);
        panel3.style.backgroundImage = "url(images/red1.png)";
        let panel6 = document.getElementById(6);
        panel6.style.backgroundImage = "url(images/red1.png)";
        let panel9 = document.getElementById(9);
        panel9.style.backgroundImage = "url(images/red1.png)";
        return true;
    }
    if(check(0 , 4 , 8 , player) == true){
        let panel1 = document.getElementById(1);
        panel1.style.backgroundImage = "url(images/red2.png)";
        let panel5 = document.getElementById(5);
        panel5.style.backgroundImage = "url(images/red2.png)";
        let panel9 = document.getElementById(9);
        panel9.style.backgroundImage = "url(images/red2.png)";
        return true;
    }
    if(check(2 , 4 , 6 , player) == true){
        let panel3 = document.getElementById(3);
        panel3.style.backgroundImage = "url(images/red3.png)";
        let panel5 = document.getElementById(5);
        panel5.style.backgroundImage = "url(images/red3.png)";
        let panel7 = document.getElementById(7);
        panel7.style.backgroundImage = "url(images/red3.png)";
        return true;
    }
    return false;
}