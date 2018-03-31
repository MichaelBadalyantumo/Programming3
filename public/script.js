var matrix = [];
var side = 10;
var xotArr = [];
var eatArr = [];
var preArr = [];
var creArr = [];
var deArr = [];
var amArr = [];
var grassCount = 100;
var eatgrassCount = 500;
var predatorCount = 200;
var creatorCount = 20;
var deceiverCount = 300;
var amenakerCount = 10;
var erk = 90;
var bar = 70;
var tackCount = 0;
var socket = io.connect('http://localhost:3000');
var statistics = {
    "timestamp": "",
    "eating": 0,
    "muling": 0,
    "counting": 0,
    "counting": 0,
    "dieing": 0,
    "framecount": 0
}


function setup() {

    for (var i = 0; i < bar; i++) {
        matrix.push([]);
        for (var j = 0; j < erk; j++) {
            matrix[i][j] = 0;
        }
    }

    fillChars(grassCount, 1);
    fillChars(eatgrassCount, 2);
    fillChars(predatorCount, 3);
    fillChars(creatorCount, 4);
    fillChars(deceiverCount, 5);
    fillChars(amenakerCount, 6);

    noStroke();
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);

    background('#8C8C8C');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3) {
                var predator = new Predator(j, i, 3);
                preArr.push(predator);
            }
            else if (matrix[i][j] == 4) {
                var creator = new Creator(j, i, 4);
                creArr.push(creator);
            }
            else if (matrix[i][j] == 5) {
                var deceiver = new Deceiver(j, i, 5);
                deArr.push(deceiver);
            }
            else if (matrix[i][j] == 6) {
                var amenaker = new Amenaker(j, i, 6);
                amArr.push(amenaker);
            }
        }
    }


}

function draw() {
    tackCount++;
    text(tackCount, width / 2, height / 2);
    

    background('#8C8C8C');
    cel1 = floor(random(0, 15));
    cel2 = floor(random(10, 40));
    cel3 = floor(random(0, 20));
    cel4 = floor(random(-40, 0));


    var h = document.getElementById("pElement");
    if (tackCount < 10) {
        h.innerText = "Spring " + cel1 + " C";
    }
    else if (tackCount < 20) {
        h.innerText = "Summer " + cel2 + " C";
    }
    else if (tackCount < 30) {
        h.innerText = "Autumn " + cel3 + " C";
    }
    else if (tackCount < 40) {
        h.innerText = "Winter " + cel4 + " C";
    }
    else {
        tackCount = 0;
    }

  
    
    if(tackCount < 10){
        gr1Color = "green";
        dark5Color = "darkgreen";
    }
    else if(tackCount < 20){
        gr1Color = "lightgreen";
        dark5Color = "green";
    }
    else if(tackCount < 30){
        gr1Color = "orange";
        dark5Color = "darkorange";
    }
    else if(tackCount < 40){
        gr1Color = "white";
        dark5Color = "#DCDDDD";
    }

    

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            

                if (matrix[i][j] == 1) {
                    fill(gr1Color);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#8C8C8C');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill("red");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 4) {
                    fill("blue");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill(dark5Color);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }


            


            

          

        }
    }

   

    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }


    for (var i in preArr) {

        preArr[i].eat();
    }



    for (var i in creArr) {

        creArr[i].eat();   
    }




    for (var i in deArr) {

        deArr[i].mul();
    }

    
    for (var i in amArr) {

        amArr[i].eat();
    }
    statistics.framecount = frameCount;
    socket.emit("send data", statistics);

}
function fillChars(charCount, charType) {
    var h = 0;
    while (h < charCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = charType;
            h++;
        }
    }
}







function changeView(stat) {
    var eating = document.getElementById("eating");
    var muling = document.getElementById("muling");
    var counting = document.getElementById("counting");
    var common = document.getElementById("mulingcounting");
    var dieing = document.getElementById("dieing");
    eating.innerHTML = stat.eating;
    muling.innerHTML = stat.muling;
    counting.innerHTML = stat.counting;
    common.innerHTML = stat.mulingcounting;
    dieing.innerHTML = stat.dieing;
}










