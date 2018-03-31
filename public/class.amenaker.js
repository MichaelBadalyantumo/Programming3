class Amenaker extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 5;

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

        var emptyCord1 = this.getDirections1(1);
        var emptyCord2 = this.getDirections1(2);
        var emptyCord3 = this.getDirections1(3);
        var emptyCord4 = this.getDirections1(5);

        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);
        var cord3 = random(emptyCord3);
        var cord4 = random(emptyCord4);





        if (cord2) {
            this.multiply++;
            this.energy++;
            var x = cord2[0];
            var y = cord2[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                     break;
                }
            }


        }

        else if (cord1) {
            this.multiply++;
            this.energy++;
            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                     break;
                }
            }

        }

        else if (cord3) {
            this.multiply++;
            this.energy++;
            var x = cord3[0];
            var y = cord3[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in preArr) {
                if (x == preArr[i].x && y == preArr[i].y) {
                    preArr.splice(i, 1);
                     break;
                }
            }

        }

        else if (cord4) {
            this.multiply++;
            this.energy++;
            var x = cord4[0];
            var y = cord4[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in deArr) {
                if (x == deArr[i].x && y == deArr[i].y) {
                    deArr.splice(i, 1);
                     break;
                }
            }

        }

        else {
            this.move();
           

        }
    }
}