//題目 1: 使用 const 和 let 聲明變數

//請創建一個 TypeScript 檔案，聲明一個不可改變的常數 const 和一個可以改變的變數 let。請將兩者進行賦值，並嘗試更改它們的值，觀察 TypeScript 如何處理錯誤。

//要求：
//聲明一個常數 const age: number = 25。
//聲明一個變數 let name: string = "Alice"，並更改變數的值。

const age: number = 25;
let personName: string = "Alice";

personName = "Scarlett";

console.log(`${personName}`);
console.log(`${age}`);
