var Perceptron = (function () {
    function Perceptron(numberOfWeight) {
        this.lr = 0.1;
        this.weights = Array(numberOfWeight);
        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }
    }
    Perceptron.prototype.Calculate = function (inputs) {
        if (inputs.length > this.weights.length) {
            throw 'Number of inputs must be equal to number of weights';
        }
        var sum = 0;
        for (var i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return this.Activate(sum);
    };
    Perceptron.prototype.Activate = function (sum) {
        return sum > 0 ? 1 : -1;
    };
    Perceptron.prototype.Train = function (inputs, target) {
        var guess = this.Calculate(inputs);
        var error = target - guess;
        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr;
        }
    };
    return Perceptron;
}());
export default Perceptron;
