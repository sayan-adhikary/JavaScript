/*
In this task we provide you with the start of a definition for a Shape class. 
It has three properties: name, sides, and sideLength. This class only models shapes for which all sides are the same length, 
like a square or an equilateral triangle.

To complete the task:

1. Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
2. Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and 
logs the result to the console.
3. Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
4. Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.
*/

class Shape {
    name;
    sides;
    sideLength;

    //constructor
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    //methods
    calcPerimeter() {
        let cal = this.sides * this.sideLength;
        console.log(cal);
    }
}

// let square = new Shape("square", 4, 5);
// square.calcPerimeter();

// let triangle = new Shape("triangle", 3, 3);
// triangle.calcPerimeter();


/*
Now it's time to add some inheritance into the mix.

To complete the task:

Create a Square class that inherits from Shape.
Add a calcArea() method to Square that calculates its area.
Set up the Square constructor so that the name property of Square object instances is automatically set to square, 
and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to 
provide the sideLength property.
Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.
 */

class Square extends Shape {

    constructor(sideLength) {
        super("Square", 4, sideLength);
    }

    //new Method
    calcArea() {
        let area = this.sides * this.sideLength;
        console.log(area);
    }
}

let a = new Square(23);
a.calcArea();