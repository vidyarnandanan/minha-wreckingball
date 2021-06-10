class chain{
    constructor(bodyA, pointB){
        
       
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 500
        }
        
        this.pointB=pointB
        this.chain= Constraint.create(options)
        World.add(world, this.chain)
    } 

    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)

    }


}