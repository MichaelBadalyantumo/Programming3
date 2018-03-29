var tiv = 3;

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

        return super.move(ch);

    }



    eat(cel1) {
        cel1 = Math.floor(Math.random(0) * 15);
        
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
            if (frameCount > 2 & frameCount < 8) {
                this.mul();
                this.multiply = 0;
            }

            else if (frameCount > 24 & frameCount < 26) {
                this.mul();
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
          
            if (cel1 < 10) {
                this.die();
                
                
            }
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
            console.log("sdfsdf");
        }
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