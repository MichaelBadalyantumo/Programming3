class Eatgrass extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 5;
        this.tiv = 2;

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
            statistics.eatingeatgrass++;
            changeView(statistics);


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                    break;

                }
            }

            if (cel2 > 30 & tackCount > 10 & tackCount < 20) {
                this.celdie();

            }
            else if (tackCount > 11 & tackCount < 19) {
                this.mul();

            }
            else if (tackCount == 35) {
                this.mul();

            }
            else if (this.energy < 2) {
                this.die();
                statistics.dieingeatgrass++;
                changeView(statistics);
            }
        }

        else {
            this.move();
            this.energy--;
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
            statistics.mulingeatgrass++;
            changeView(statistics);
        }

    }
    die() {

        if (this.energy < 3) {
            matrix[this.y][this.x] = 0;
            for (var i in eatArr) {
                if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                    eatArr.splice(i, 1);

                    break;
                }
            }

        }



    }

    celdie() {

        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 20);
                break;

            }


        }
    }


}