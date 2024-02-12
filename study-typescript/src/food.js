"use strict";
/**
 * 食品情報管理システム
 * 要件:
   * あなたは食品情報を管理するシステムの開発を任されました。
   * このシステムでは、食品の基本的な属性（カロリー、美味しさ）と、特定の食品カテゴリ（寿司、ケーキ）に特有の属性を管理する必要があります。
 * Foodインターフェースの作成:
    * 属性:
      - calories: 数値（カロリー）
      - tasty: 真偽値（美味しいかどうか）
    * Sushiインターフェースの作成:
      -  Foodインターフェースを拡張
      - 追加属性:
        - salty: 真偽値（塩辛いかどうか）
    * Cakeインターフェースの作成:
      - Foodインターフェースを拡張
      - 追加属性:
        - sweet: 真偽値（甘いかどうか）
 * タスク:
  - 上記の要件に従って、Food, Sushi, Cakeのインターフェースを定義してください。
  - SushiとCakeのインスタンスをそれぞれ作成し、それらの属性をコンソールに出力する関数を実装してください。
  - TypeScriptではインターフェースを直接インスタンス化できないため、オブジェクトリテラルを使用して具体的な食品の例を作成します。
 */
// Sushiインスタンスの作成
const sushi = {
    calories: 300,
    tasty: true,
    salty: true,
};
// Cakeインスタンスの作成
const cake = {
    calories: 400,
    tasty: true,
    sweet: true,
};
// コンソールに出力する関数の実装
function printFoodInfo(food) {
    console.log(`Calories: ${food.calories}`);
    console.log(`Tasty: ${food.tasty}`);
}
printFoodInfo(sushi);
printFoodInfo(cake);
