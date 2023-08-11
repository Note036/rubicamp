class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    };
    typeTyre() {
        return `tyre       : ${this.brand} ${this.size} inch`
    }
};

class Car extends Tyre {
    constructor(brand, size, varian, door, seat, warranty) {
        super(brand, size);
        this.varian = varian; this.door = door; this.seat = seat;
        this.warranty = warranty;
    };
    carModel() {
        return `varian     : ${this.varian}`
    };
    seriNumber() {
        return `sn         : ${Car.serialNumber()}`
    }
    countDoor() {
        return `door       : ${this.door}`
    };
    countSeat() {
        return `seat       : ${this.seat} seater`
    };
    guarantee() {
        return `warranty   : ${this.warranty} year`
    }
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
};

const car1 = new Car('Dunlop', 15, 'Agya', 5, 5, 1);
const car2 = new Car('Bridgestone', 17, 'Rush', 5, 5, 3);

class CarFactory extends Car {
    constructor(brand, size, varian, door, seat, warranty) {
        super(brand, size, varian, door, seat, warranty);
        this.cars = [];
        this.count = 1
        this.rand = Math.floor(Math.random() * 6);
        this.rand2 = Math.floor(Math.random() * 6);
    };
    produce(year) {
        for (let i = 0; i < this.rand; i++) {
            this.cars.push(
                [`no. ${this.count}`,
                car1.carModel(),
                car1.seriNumber(),
                car1.countDoor(),
                car1.countSeat(),
                car1.typeTyre(),
                `year       : ${year}`,
                car1.guarantee()]
            ); this.count++
        }
        for (let i = 0; i < this.rand2; i++) {
            this.cars.push(
                [`no. ${this.count}`,
                car2.carModel(),
                car2.seriNumber(),
                car2.countDoor(),
                car2.countSeat(),
                car2.typeTyre(),
                `year       : ${year}`,
                car2.guarantee()]
            ); this.count++
        } return this.cars
    };
    result() {
        console.log("hasil produksi :\n");
        for(let x of this.cars) console.log(`\n${x.join("\n")}\n`)
    };
    guaranteeSimulation(simulationYear) {
        console.log("Hasil simulasi garansi semua mobil pada tahun 2025 :\n");
        for (let x of this.cars) {
            if((x[6].replace(/\s/g, '').slice(5) * 1) + 
            (x[7].replace(/\s/g, '')[9] * 1) == simulationYear) x.push("\nStatus on 2025 this guarantee status active\n")
            else x.push("\nStatus on 2025 this guarantee status expired\n")
            console.log(x.join('\n'))
        }
    };


}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaranteeSimulation(2025);