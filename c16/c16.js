class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    };
};

class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty) {
        super(brand, size);
        this.varian = varian; this.door = door; this.seat = seat;
        this.warranty = warranty;
    };
};

class car1 extends Car {
    constructor() {
        super('Dunlop', 15, 'Agya', 5, 5, 1);
    }
}

class car2 extends Car {
    constructor() {
        super("Bridgestone", 17, "Rush", 5, 5, 3)
    }
}

const agya = new car1();
const rush = new car2()

class CarFactory {
    constructor() {
        this.cars = [];
        this.seri = [];
        this.years = [];
        this.count = 1;
        this.rand = Math.floor(Math.random() * 6);
        this.rand2 = Math.floor(Math.random() * 6);
    };
    produce(year) {
        
        for (let i = 0; i < this.rand; i++) {
            this.years.push(year);
            this.seri.push(CarFactory.serialNumber());
            this.cars.push(agya);
        }
        for (let i = 0; i < this.rand2; i++) {
            this.years.push(year);
            this.seri.push(CarFactory.serialNumber());
            this.cars.push(rush);
        } return this.cars
    };
    result() {
        console.log("hasil produksi :");
        for (let i = 0; i < this.cars.length; i++) {
            console.log(
                `
no. ${this.count}
varian      : ${this.cars[i].varian}
sn          : ${this.seri[i]}
door        : ${this.cars[i].door}
seat        : ${this.cars[i].seat} seater
tyre        : ${this.cars[i].brand} ${this.cars[i].size} inch
year        : ${this.years[i]}
warranty    : ${this.cars[i].warranty} year
`
            )
            this.count++
        }
    };
    guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :");
        this.count = 1;
        for (let i = 0; i < this.cars.length; i++) {
            console.log(
                `
no. ${this.count}
varian      : ${this.cars[i].varian}
sn          : ${this.seri[i]}
door        : ${this.cars[i].door}
seat        : ${this.cars[i].seat} seater
tyre        : ${this.cars[i].brand} ${this.cars[i].size} inch
year        : ${this.years[i]}
warranty    : ${this.cars[i].warranty} year
`
            );
            if (this.years[i] + this.cars[i].warranty >= simulationYear) console.log("Status on 2025 this guarantee status active")
            else console.log("Status on 2025 this guarantee status expired")
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
        }
        return serialNum
    }

}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);