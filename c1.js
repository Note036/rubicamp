function sum() {
    console.log(Object.values(arguments).reduce((total,value) => total + value))
};

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);