class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    };
};

class Car {
    constructor(year, sn) {
        this.varian; this.door; this.seat;
        this.warranty; this.year = year; this.sn = sn;
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
};

class Agya extends Car {
    constructor(year, sn) {
        super(year, sn)
        this.tyre = new Tyre('Dunlop', 15); this.varian = 'Agya';
        this.door = 5; this.seat = 5; this.warranty = 1
    }
}

class Rush extends Car {
    constructor(year, sn) {
        super(year, sn)
        this.tyre = new Tyre('Bridgestone', 17); this.varian = 'Rush';
        this.door = 5; this.seat = 7; this.warranty = 3
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    };
    produce(year) {
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Agya(year, Car.serialNumber()));
        }
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            this.cars.push(new Rush(year, Car.serialNumber()));
        } return this.cars
    };
    result() {
        console.log("hasil produksi :");
        this.cars.forEach((car, index) => {
            console.log(
                `
no. ${index + 1}
varian      : ${car.varian}
sn          : ${car.sn}
door        : ${car.door}
seat        : ${car.seat} seater
tyre        : ${car.brand} ${car.size} inch
year        : ${car.year}
warranty    : ${car.warranty} year
`
            )
        })
    };
    guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :");
        this.cars.forEach((car, index) => {
            console.log(
                `
no. ${index + 1}
varian      : ${car.varian}
sn          : ${car.sn}
door        : ${car.door}
seat        : ${car.seat} seater
tyre        : ${car.tyre.brand} ${car.tyre.size} inch
year        : ${car.year}
warranty    : ${car.warranty} year
`
            )
            console.log(`Status on ${simulationYear} this guarantee status ${(car.year + car.warranty >= simulationYear)? 'active' : 'expired'}`)
        })
    };
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);
