class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    };
};

class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty, year, sn) {
        super(brand, size);
        this.varian = varian; this.door = door; this.seat = seat;
        this.warranty = warranty; this. year = year; this.sn = sn;
    };
};

class car1 extends Car {}

class car2 extends Car {}

class CarFactory {
    constructor() {
        this.cars = []; this.agya; this.rush; this.count = 1;
        this.rand = Math.floor(Math.random() * 6);
        this.rand2 = Math.floor(Math.random() * 6);
    };
    produce(year) {
        for (let i = 0; i < 2; i++) {
            this.cars.push(this.agya = new car1('Dunlop', 15, 'Agya', 5, 5, 1, year, CarFactory.serialNumber()));
        }
        for (let i = 0; i < 2; i++) {
            this.cars.push(this.rush = new car1('Bridgestone', 17, 'Rush', 5, 5, 3, year, CarFactory.serialNumber()));
        } return this.cars
    };
    result() {
        console.log("hasil produksi :");
        for (let car of this.cars) {
            console.log(
                `
no. ${this.count}
varian      : ${car.varian}
sn          : ${car.sn}
door        : ${car.door}
seat        : ${car.seat} seater
tyre        : ${car.brand} ${car.size} inch
year        : ${car.year}
warranty    : ${car.warranty} year
`
            )
            this.count++
        }
    };
    guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :");
        this.count = 1;
        for (let car of this.cars) {
            console.log(
                `
no. ${this.count}
varian      : ${car.varian}
sn          : ${car.sn}
door        : ${car.door}
seat        : ${car.seat} seater
tyre        : ${car.brand} ${car.size} inch
year        : ${car.year}
warranty    : ${car.warranty} year
`
            );
            if (car.year + car.warranty >= simulationYear) console.log(`Status on ${simulationYear} this guarantee status active`)
            else console.log(`Status on ${simulationYear} this guarantee status expired`)
            this.count++;
        } 
    };
    static serialNumber() {
        const chars = "1234567890abcdefghijklmnopqrstuvwxyz";
        let serialNum = "", indexRandom, charRandom
        for (let i = 0; i < 36; i++) {
            indexRandom = Math.floor(Math.random() * chars.length);
            charRandom = chars.slice(indexRandom, indexRandom + 1);
            if (i == 8 || i == 13 || i == 18 || i == 23) {
                indexRandom = -1;
                charRandom = "-"
            }
            serialNum += charRandom;
        } return serialNum
    }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);