const cars = [
    { id: 1, make: "BMW", model: "X5", year: 2018, color: "black" },
    { id: 2, make: "Mercedes-Benz", model: "C-Class", year: 2019, color: "silver" },
    { id: 3, make: "Audi", model: "A4", year: 2017, color: "blue" },
    { id: 4, make: "Toyota", model: "Corolla", year: 2016, color: "white" },
    { id: 5, make: "Honda", model: "Accord", year: 2020, color: "red" }
];

function getCars() {
    return cars;
}

function getCarInformation(id) {
    const car = cars.find(car => car.id === id);
    if (!car) return "Car doesn't exist";
    return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
}

function getCarAge(id) {
    const car = cars.find(car => car.id === id);
    if (!car) return "Car doesn't exist";
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - car.year;
    return `Car is ${carAge} years old.`;
}

module.exports = { getCars, getCarInformation, getCarAge };
