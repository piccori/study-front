"use strict";
/**
 * 問題: 動物と猫の行動管理システム
 * 要件:
  * あなたは動物園の行動管理システムを開発しています。
  * このシステムでは、動物の基本的な行動（食べる、寝る）を管理するAnimalインターフェースと、猫固有の行動（鳴く）を管理するFelineインターフェースが必要です。
 * Animalインターフェースの作成:
  * 属性:
   * readonly name: string (動物の名前)
  * メソッド:
   * eat(food: string): void (食べる行動)
   * sleep(hours: number): void (寝る行動)
 * Felineインターフェースの作成:
  * メソッド:
   * meow(): void (鳴く行動)
 * Catクラスの実装:
  * AnimalとFelineインターフェースを実装します。
  * クラスには、name属性を含め、指定されたインターフェースのメソッドをすべて実装してください。

 * タスク:
  1. 上記の要件に従って、AnimalとFelineインターフェース、およびCatクラスを定義してください。
  2. Catクラスのインスタンスを作成し、それがAnimalとFelineの行動を正しく実行できることをデモするコードを書いてください。
 */
class Cat {
    constructor(name) {
        this.name = name;
    }
    eat(food) {
        return `${this.name} ate some ${food}.`;
    }
    sleep(hours) {
        return `${this.name} slept for ${hours} hours.`;
    }
    meow() {
        return `${this.name} says Meow!!!!`;
    }
}
const whiskers = new Cat("Whiskers");
console.log(whiskers.eat('fish'));
console.log(whiskers.sleep('8'));
console.log(whiskers.meow());
