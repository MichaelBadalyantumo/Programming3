//խոտի կլասը
class Deceiver extends liveform {
    constructor(x, y, index) {
        super(x, y, index);
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0;

    }

    newDirections() {

        return super.newDirections();

    }


    getDirections(t) {


        return super.getDirections(t);



    }

    mul() {
        this.multiply++;
        if (frameCount > 13 & frameCount < 17) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var nordavajan = new Deceiver(x, y, this.index);
                deArr.push(nordavajan);

                matrix[y][x] = 5;
                this.multiply = 0;
            }
        }
    }



}