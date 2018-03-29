//խոտակերի կլասը
var tiv = 2;
var h = document.getElementById("pElement");
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

        return super.move(ch);

    }

    dontmove(g){
        return super.dontmove(g);
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
            if (frameCount > 12 & frameCount < 18) {
                this.mul();
                this.multiply = 0;
            }

            else if (frameCount > 34 & frameCount < 36) {
                this.mul();
                this.multiply = 0;
            }

            else if (cel4 <= -30) {
                this.dontmove();
                console.log("dont");
                
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
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

            matrix[y][x] = 2;
            this.multiply = 0;
            
        }
        console.log("mil");
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