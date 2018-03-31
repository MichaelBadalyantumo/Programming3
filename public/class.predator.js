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

        if (cord & frameCount > 0 & frameCount < 30) {
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
                    break;
                }
            }
            if (frameCount > 3 & frameCount > 7) {
                this.mul();
                this.multiply = 0;
            }

            else if (frameCount > 23 & frameCount < 27) {
                this.mul();
                this.multiply = 0;
            }

                   
        
           
            

            if (this.energy < 2) {
                this.die();
                

            }

        }  else if(frameCount > 0 & frameCount < 30){
            this.move();
            
           
        }
        else{
            
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







}