var matrix = [];
var side = 10;
var xotArr = [];
var eatArr = [];
var preArr = [];
var creArr = [];
var deArr = [];
var amArr = [];
var grassCount = 1000;
var eatgrassCount = 500;
var predatorCount = 300;
var creatorCount = 20;
var deceiverCount = 200;
var amenakerCount = 10;
var erk = 90;
var bar = 70;
var tackCount = 0;

function click(evt) {
    console.log(evt.pageX, evt.pageY);
}
window.onclick = click;

function setup() {

    for (var i = 0; i < bar; i++) {
        matrix.push([]);
        for (var j = 0; j < erk; j++) {
            matrix[i][j] = 0;
        }
    }

    fillChars(grassCount, 1);
    fillChars(eatgrassCount, 2)
    fillChars(predatorCount, 3)
    fillChars(creatorCount, 4)
    fillChars(deceiverCount, 5)
    fillChars(amenakerCount, 6)

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
    //console.log(tackCount);

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
    }
    else if(tackCount < 20){
        gr1Color = "lightgreen";
    }
    else if(tackCount < 30){
        gr1Color = "orange";
    }
    else if(tackCount){

    }

    

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {

            if (tackCount < 10) {

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
                else if (matrix[i][j] == 6) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }


            }


            else if (tackCount < 20) {

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
                else if (matrix[i][j] == 6) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }

            }

            else if (tackCount < 30) {

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
                else if (matrix[i][j] == 6) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }

            }

            else if (tackCount < 40) {

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
                else if (matrix[i][j] == 6) {
                    fill("black");
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

    
    for (var i in amArr) {

        amArr[i].eat();
    }
    

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