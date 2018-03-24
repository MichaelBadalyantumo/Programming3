var tiv = 3;
var name = "norpredator";
var surename = "Predator";
var number = "3";
var ind = "preArr";

class Predator extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 5;
    }
    newDirections() {

        return super.newDirections();

    }



    getDirections(t) {


        return super.getDirections(t);



    }




    move(ch) {

        return super.getDirections(ch);

    }



    eat() {

        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);

                }
            }
            if (this.multiply == 50) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy > 2) {
                this.die();

                
            }
        }
    }




    mul(g) {
        console.log("mul");
        return super.mul(g);
           
    }


    die() {

        matrix[this.y][this.x] = 0;
        for (var i in preArr) {
            if (this.x == preArr[i].x && this.y == preArr[i].y) {
                preArr.splice(i, 1);

            }
        }
    }


}