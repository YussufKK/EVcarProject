
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery is charged to ${this.charge}%`);
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is accelerating. Current speed: ${this.speed} km/h, Charge: ${this.charge}%`);
    }
}
