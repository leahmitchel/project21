class Ground{
     constructor(x,y,width,height){
        var option = {isStatic:true}
        this.body = Matter.Bodies.rectangle(x,y,width,height,option)
        this.width= width
        this.height= height
        Matter.World.add(world,this.body)
     }
     display(){
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

     }
}