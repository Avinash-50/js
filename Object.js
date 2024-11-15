let rectangle={
    length:1,
    breadth:2,

    draw: function() {
        console.log('draw');
    }

}

console.log(rectangle.length)

// Factory Function 

function createRectangle(len, bre){
    return rectangle ={
        length : len,
        breadth : bre,
        draw (){
            console.log('drawing rectangle');
        }
    }
}

let rectangleObj1 = (4,5);

// Constructor Function 

function Newectangle (len, bre){
    this.length=len,
    this.breadth=bre,
    this.draw= function(){
        console.log('drwaing')
    }
}
let rectangleobj = new Newectangle(4,7)
rectangleobj.color = 'yellow';       // Add pro in object

console.log(rectangleobj);

 delete rectangleobj.color;         //  Remove pro in object 
 console.log(rectangleobj);
