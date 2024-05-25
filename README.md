# EVcarProject
# Electric Car Interaction Project

## Project Overview

This project demonstrates the implementation of a Car class and an Electric Vehicle (EV) class using HTML and JavaScript. The EV class extends the Car class with additional properties and methods specific to electric vehicles. An interactive HTML interface allows users to accelerate and brake both traditional cars and electric cars.

## HTML Structure

- index.html: The main HTML file contains input fields for car make, speed, and charge (for EVs). It also includes buttons to accelerate and brake the vehicles, and displays the current status of the cars.

### Key Elements:

- Input fields for entering car details (make, speed, charge for EVs).
- Buttons to trigger acceleration and braking actions.
- Divs to display the current status of the cars.

## JavaScript Code

### Car Class (Car.js)

**javascript**
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is accelerating. Current speed: ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is braking. Current speed: ${this.speed} km/h`);
    }
}