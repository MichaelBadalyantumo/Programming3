class Predator extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 5;
        this.tiv = 3;
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
            statistics.eatingpredator++;
            changeView(statistics);

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);

                    break;
                }
            }
            if (tackCount > 3 & tackCount < 7) {
                this.mul();

                this.multiply = 0;
                statistics.mulingpredator++;
                changeView(statistics);
            }

            else if (tackCount > 23 & tackCount < 27) {
                this.mul();
                this.multiply = 0;
                statistics.mulingpredator++;
                changeView(statistics);
            }
            else if (cel4 < -30 & tackCount > 30 & tackCount < 40) {
                this.celdie();

                statistics.dieingpredator++;
                changeView(statistics);
            }





            if (this.energy < 2) {
                this.die();
                statistics.dieingpredator++;
                changeView(statistics);

            }

        } else if (tackCount > 0 & tackCount < 30) {
            this.move();
            this.energy--;

        }
        else {

        }
    }





    mul() {

        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norpredator = new Predator(x, y, this.index);
            preArr.push(norpredator);

            matrix[y][x] = 3;
            this.multiply = 0;

        }
    }

    die() {

        matrix[this.y][this.x] = 0;
        for (var i in preArr) {
            if (this.x == preArr[i].x && this.y == preArr[i].y) {
                preArr.splice(i, 1);

                break;
            }
        }
    }


    celdie() {

        matrix[this.y][this.x] = 0;
        for (var i in preArr) {
            if (this.x == preArr[i].x && this.y == preArr[i].y) {
                preArr.splice(i, 20);

                break;
            }
        }
    }




}