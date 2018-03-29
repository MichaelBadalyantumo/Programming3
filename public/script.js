var matrix = [];
var side = 10;
var xotArr = [];
var eatArr = [];
var preArr = [];
var creArr = [];
var deArr = [];

var grassCount = 1000;
var eatgrassCount = 500;
var predatorCount = 200;
var creatorCount = 20;
var deceiverCount = 300;
var erk = 70;
var bar = 70;




function setup() {




    for (var i = 0; i < bar; i++) {
        matrix.push([]);
        for (var j = 0; j < erk; j++) {
            matrix[i][j] = 0;
        }
    }
    var h = 0;
    while (h < grassCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            h++;
        }
    }
    var h = 0;
    while (h < eatgrassCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            h++;
        }
    }
    var h = 0;
    while (h < predatorCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            h++;
        }
    }
    var h = 0;
    while (h < creatorCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            h++;
        }
    }

    var h = 0;
    while (h < deceiverCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            h++;
        }
    }


    noStroke()
    frameRate();
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


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
        }
    }

}

function draw() {
    text(frameCount, width / 2, height / 2);
    console.log(frameCount);
    background('#acacac');
    var cel1 = floor(random(0,15));
    var cel2 = floor(random(0,40));
    var cel3 = floor(random(0,20));
    var cel4 = floor(random(-30,0));
    
    
    var h = document.getElementById("pElement");
    if(frameCount < 10){
    h.innerText = "Spring " + cel1 + " C";
    }

    else if(frameCount < 20){
        h.innerText = "Summer " + cel2 + " C";
        }

        else if(frameCount < 30){
            h.innerText = "Autumn " + cel3 + " C";
            }

            else if(frameCount < 40){
                h.innerText = "Winter " + cel4 + " C";
                }


  
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {


            if (frameCount < 10) {

                if (matrix[i][j] == 1) {
                    fill("green");
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
                    fill("darkgreen");
                    rect(j * side, i * side, side, side);
                }


            }


            else if (frameCount < 20) {

                if (matrix[i][j] == 1) {
                    fill("lightgreen");
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
                    fill("darkgreen");
                    rect(j * side, i * side, side, side);
                }


            }

            else if (frameCount < 30) {

                if (matrix[i][j] == 1) {
                    fill("orange");
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
                    fill("darkgreen");
                    rect(j * side, i * side, side, side);
                }


            }

            else if (frameCount < 40) {

                if (matrix[i][j] == 1) {
                    fill("white");
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
                    fill("#DCDDDD");
                    rect(j * side, i * side, side, side);
                }
               

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



}

