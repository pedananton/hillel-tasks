export function Square(size) {
    this.size = size;
}
Square.prototype.getPerimeter = function(){return this.size * 4};
Square.prototype.getArea = function(){return Math.pow(this.size, 2)};