// オブジェクトの作成
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
  
// Object メソッド
// キーのリストを取得
console.log(Object.keys(person)); 
// ["firstName","lastName"]

// 値のリストを取得
console.log(Object.values(person)); 
// ["John", "Doe"]

// エントリーのリストを取得
console.log(Object.entries(person)); 
// [["firstName","John"], ["lastName", "Doe"]]

// オブジェクトの拡張（マージ）
let location = {
  city: "New York",
  country: "USA"
};

// person と location オブジェクトを personDetails に結合
let personDetails = Object.assign(person, location);

console.log(personDetails);