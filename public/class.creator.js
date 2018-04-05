
class Creator extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.tiv = 4;
        this.eatCount = 0;
        this.energy = 10;
    }

    create(ch) {
        var emptyCord = this.getDirections1(0);

        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            if (ch === 1) {
                var norXot = new Grass(x, y, 1);
                xotArr.push(norXot);
                matrix[y][x] = 1;
            } else if (ch === 2) {
                var norXotaker = new Eatgrass(x, y, 2);
                eatArr.push(norXotaker);
                matrix[y][x] = 2;
            } else if (ch === 3) {


                var norpredator = new Predator(x, y, 3);
                preArr.push(norpredator);

                matrix[y][x] = 3;

            }
            else if (ch === 5) {
                var nordavajan = new Deceiver(x, y, 5);
                deArr.push(nordavajan);
                matrix[y][x] = 5;
            }


        }

    }

    newDirections1(d) {

        return super.newDirections1(d);

    }





    getDirections1(e) {


        return super.getDirections1(e);



    }








    move(ch) {

        return super.move(ch);

    }



    eat() {

        var emptyCord = this.getDirections1(1);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatingcreator++;
            changeView(statistics);


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                    this.create(2);
                    break;
                }
            }



        } else {
            this.move();

        }


        var emptyCord = this.getDirections1(2);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatingcreator++;
            changeView(statistics);


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);


                    this.create(3);
                    break;
                }
            }



        } else {
            this.move();


        }



        var emptyCord = this.getDirections1(3);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            statistics.eatingcreator++;
            changeView(statistics);


            for (var i in preArr) {
                if (x == preArr[i].x && y == preArr[i].y) {
                    preArr.splice(i, 1);
                    this.create(5);

                    break;
                }
            }



        } else {
            this.move();


        }


        if (this.multiply == 1) {

            this.multiply = 0;
        }

    }




}