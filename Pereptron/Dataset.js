var Dataset = (function () {
    function Dataset(numberOfPoints) {
        this.points = Array(numberOfPoints);
        for (var i = 0; i < this.points.length; i++) {
            this.points[i] = new Point(random(0, width), random(0, height));
        }
    }
    return Dataset;
}());
export default Dataset;
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.label = x < y ? 1 : -1;
    }
    Point.prototype.show = function () {
        push();
        this.label === 1 ? fill(66, 135, 245) : fill(255, 13, 0);
        ellipse(this.x, this.y, 8, 8);
        pop();
    };
    return Point;
}());
export { Point };
