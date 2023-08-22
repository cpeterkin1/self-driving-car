class Car {
    constructor(x, y, width, height) {
        this.x=x;
        this.y=y
        this.width=width
        this.height=height

        this.speed=0
        this.acceleration=0.2
        this.maxSpeed=3;
        this.friction=0.05

        this.controls = new Controls();
    }

    // left off at 23:37 of video -- 8/19/23

    /* DIFFERENT CAR TYPES IDEA */

    // new Car(100,100,30,50,'ferrari')
    // new Car(100,100,30,50,'mclaren')
    // new Car(100,100,30,50,'mercedes')
    // new Car(100,100,30,50,'red bull')

    /*constructor(x, y, width, height, type) {
        this.x=x;
        this.y=y
        this.width=width
        this.height=height

        switch (type) {
            case 'ferrari':
                this.acceleration=0.25
                this.maxSpeed = 3.3
                this.friction = 0.05 // 'Aerodynamics' in UI
                this.color = red
                break;
            case 'mclaren':
                this.acceleration=0.26
                this.maxSpeed = 3.2
                this.friction = 0.03
                this.color = yellow
                break;
            case 'mercedes':
                this.acceleration=0.23
                this.maxSpeed = 3.4
                this.friction = 0.05
                this.color = ? teal ?
                break;
            case 'red bull':
                this.acceleration=0.27
                this.maxSpeed = 3.3
                this.friction = 0.05
                this.color = ? dark blue ?
                break;
        }

        this.speed=0
        // this.acceleration=0.2
        // this.maxSpeed=3;
        // this.friction=0.05

        this.controls = new Controls();
    }*/

    update(){
        if (this.controls.forward) {
            this.speed+=this.acceleration
        }
        if (this.controls.reverse) {
            this.speed-=this.acceleration
        }
        if (this.speed>this.maxSpeed) {
            this.speed=this.maxSpeed
        }
        if (this.speed<-this.maxSpeed/2) {
            this.speed=-this.maxSpeed/2
        }
        if (this.speed>0) {
            this.speed-=this.friction
        }
        if (this.speed<0) {
            this.speed+=this.friction
        }

        this.y-=this.speed
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        )
        ctx.fill();
    }

}