//խոտակերի կլասը
var tiv = 2;
var name = "norXotaker";
var surename = "Eatgrass";
var number = "2";
var ind = "eatArr";
class Eatgrass extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 3;

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

        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;



            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);

                }
            }



        } else {
            this.move();

        }


        var emptyCord = this.getDirections(5);

        var cord = random(emptyCord);

        if (cord) {

            this.die();

        }

    }
    mul(ch) {

        return super.getDirections(ch);

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);

            }
        }
    }




}