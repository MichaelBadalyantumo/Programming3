var tiv = 4;

class Creator extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;

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


        }

    }

    newDirections1() {

        return super.newDirections1();

    }


    newDirections() {

        return super.newDirections();

    }


    getDirections1(t) {


        return super.getDirections1(t);



    }



    getDirections(t) {


        return super.getDirections(t);



    }




    move(ch) {

        return super.move(ch);
        console.log("move");
    }



    eat() {

        var emptyCord = this.getDirections(1);

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



            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);

                }
            }

            this.create(2);

        } else {
            this.move();

        }


        var emptyCord = this.getDirections(2);

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



            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);

                    //console.log("eat yellow");
                    this.create(3);

                }
            }



        } else {
            this.move();


        }



        var emptyCord = this.getDirections(3);

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



            for (var i in preArr) {
                if (x == preArr[i].x && y == preArr[i].y) {
                    preArr.splice(i, 1);
                }
            }

            this.create(2);

        } else {
            this.move();


        }


        if (this.multiply == 1) {

            this.multiply = 0;
        }

    }




}