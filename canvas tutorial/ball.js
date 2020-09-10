export class Ball{
    constructor(stageWith, stageHight, radius, speed){
        this.radius = radius;
        this.vx = speed;
        this.vh = speed;

        const diameter =this.radius * 2;
        this.x = diameter + (Math.random() * stageWith - diameter);
        this.y = diameter + (Math.random() * stageHight - diameter);
    }

    draw(ctx, stageWith, stageHight){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWith, stageHight);
        
        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this,this.radius, 0, 2 * Math.PI);
        ctx.fill();    

    }

    bounceWindow(stageWith, stageHight){
        const minX = this.radius;
        const maxX = stageWith - this.radius;
        const minY = this.radius;
        const maxY = stageHight = this.radius;

        if(this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy; 
        }
    }
}