/**
* The Vehicle Class.
*
* author  Evgeny Vovk
* version 1.0
* since   2024-03-25
*/

export class Vehicle {
  private color: string
  private licencePlate: string
  readonly numberOfDoors: number
  readonly maxSpeed: number
  readonly _speed: number

  /*
  * Constructor
  */
  constructor(color, licencePlate, numberOfDoors, maxSpeed) {
    this.color = color
    this.licencePlate = licencePlate
    this.numberOfDoors = numberOfDoors
    this.maxSpeed = maxSpeed
    this._speed = 0
  }

    // License plate number getter and setter
    get licensePlateNumber(): string {
        return this._licensePlateNumber;
    }

    // Colour getter and setter
    get colour(): string {
        return this._colour;
    }

    // Speed getter
    get speed(): number {
        return this._speed;
    }

    // Maximum speed getter
    get maximumSpeed(): number {
        return this._maximumSpeed;
    }

    // Number of doors getter
    get numberOfDoors(): number {
        return this._numberOfDoors;
    }

    // Print status method
    status(): void {
        console.log("Status:");
        console.log("-> Speed:", this.speed);
        console.log("-> MaxSpeed:", this.maximumSpeed);
        console.log("-> Number of doors:", this.numberOfDoors);
        console.log("-> License Plate:", `"${this.licensePlateNumber}"`);
        console.log("-> Color:", this.colour);
    }

    // Accelerate method
    accelerate(accelerationPower: number, accelerationTime: number): void {
        this._speed += accelerationPower * accelerationTime
        // Ensure speed doesn't exceed maximum speed
        if (this._speed > this._maximumSpeed) {
            this._speed = this._maximumSpeed
        }
    }

    // Brake method
    brake(breakPower: number, breakTime: number): void {
        this._speed -= breakPower * breakTime
        // Ensure speed doesn't go below 0
        if (this._speed < 0) {
            this._speed = 0
        }
    }
}
