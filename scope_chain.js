// スコープチェーン
// JavaScriptでは、内側のスコープから外側のスコープへと順に変数を探していきます。
let outerVar = "I am outside";
function outerFunction() {
  let innerVar = "I am inside";
  function innerFunction() {
    console.log(outerVar); // "I am outside" - 外側のスコープから変数を参照
    console.log(innerVar); // "I am inside" - 同じスコープ内の変数を参照
  }  
  innerFunction();
}
outerFunction();

// グローバルスコープ
// グローバルスコープにある変数は、プログラムのどこからでもアクセス可能です。
let globalVar = "I am a global variable";
function checkScope() {
  console.log(globalVar); // "I am a global variable"
}
checkScope();
// "I am a global variable"

// ブロック・スコープ
// let や const で宣言された変数は、
// その変数が宣言されたブロック（{}で囲まれた範囲）内でのみアクセス可能です
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // "I am a block-scoped variable"
}