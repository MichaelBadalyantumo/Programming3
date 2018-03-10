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
            }
            else if (ch === 2) {
                var norXotaker = new Eatgrass(x, y, 2);
                eatArr.push(norXotaker);
                matrix[y][x] = 2;
            }
            else if (ch === 3) {


                var norpredator = new Predator(x, y, 3);
                preArr.push(norpredator);

                matrix[y][x] = 3;
            }


        }

    }

    newDirections1() {
        this.directions1 = [
            [this.x + 2, this.y],
            [this.x - 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    newDirections() {
     
        return super.newDirections();

    }


    getDirections1(t) {
        this.newDirections1();
        var found = [];

        for (var i in this.directions1) {
            var x = this.directions1[i][0];
            var y = this.directions1[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions1[i]);
                }
            }
        }
        return found;
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
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
            //this.create()
            this.multiply = 0;
        }

    }





}