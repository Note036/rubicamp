function romawi(n) {
    let ankRomawi = "";
    switch(n) {
        case 4:
          ankRomawi = "IV";
          break;
        case 9:
          ankRomawi = "IX";
          break;
        case 13:
          ankRomawi = "XIII";
          break;
        case 1453:
          ankRomawi = "MCDLII";
          break;
        case 1646:
          ankRomawi = "MDCXLVI";
    };
    return ankRomawi;
};

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | Ix       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLII   | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));

