"use strict";
/**
 * 問題: 車両管理システム
 * 要件: 車両(Vehicle)クラスの作成
  * 属性:
   * make (メーカー名): 文字列
   * model (モデル名): 文字列
   * year (製造年): 数値
  * メソッド:
   * コンストラクタ: 全ての属性を引数として受け取り、インスタンスに設定する。
   * getInfo(): 車両の詳細情報（メーカー、モデル、製造年）を文字列で返す。
  * トラック(Truck)クラスの作成:
   * Vehicle クラスを継承。
   * 追加属性:
    * payload (積載量): 数値（キログラム単位）
  * 追加メソッド:
    * コンストラクタ: Vehicleの属性とpayloadを引数として受け取り、設定する。
    * getInfo(): VehicleのgetInfo()メソッドをオーバーライドし、積載量も含めた車両の詳細情報を文字列で返す。
  * タスク:
   * 上記の要件に従って、VehicleクラスとTruckクラスをTypeScriptで定義してください。
   * VehicleとTruckのインスタンスをそれぞれ作成し、getInfo()メソッドを使用して詳細情報をログに出力してください。
   * この問題を通じて、TypeScriptにおけるクラスの基本的な定義、継承、メソッドのオーバーライドについての理解を深めることができます。

 * 追加問題: メソッドチェーンをサポートする車両管理
  * 要件: あなたは車両管理システムにメソッドチェーンをサポートする機能を追加するタスクを任されました。
        具体的には、Vehicleクラスにメソッドチェーンを通じて複数の設定を行えるようにする機能を実装します。
  * メソッドチェーンをサポートするためのメソッドをVehicleクラスに追加:
   * setColor(color: string): this: 車両の色を設定します。メソッドチェーンをサポートするため、this型を戻り値とします。
   * setOwner(owner: string): this: 車両の所有者を設定します。同様にthis型を戻り値とします。
  * トラック(Truck)クラスにもメソッドチェーンをサポート:
   * TruckクラスはVehicleから継承しているため、setColorとsetOwnerメソッドは自動的にメソッドチェーンをサポートします。
   * TruckクラスにsetPayload(payload: number): thisメソッドを追加して、積載量を設定できるようにします。このメソッドもthis型を戻り値とします。
  * タスク:
   * 上記の要件に従って、VehicleクラスとTruckクラスにメソッドチェーンをサポートするメソッドを追加してください。
   * VehicleとTruckのインスタンスを作成し、新たに追加したメソッドを利用してメソッドチェーンで複数の設定を行い、
   * 最後にgetInfo()メソッドを使用して詳細情報をログに出力してください。
 */
class Vehicle {
    // コンストラクタ: 全ての属性を引数として受け取り、インスタンスに設定する。
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // getInfo(): 車両の詳細情報（メーカー、モデル、製造年, 色, Owner）を文字列で返す。
    getInfo() {
        return `メーカー: ${this.make}, モデル: ${this.model}, 製造年: ${this.year}` +
            (this.color ? `, 色: ${this.color}` : '') +
            (this.owner ? `, 所有者: ${this.owner}` : '');
    }
    // メソッドチェーンをサポートするためのメソッドを追加
    setColor(color) {
        this.color = color;
        return this;
    }
    setOwner(owner) {
        this.owner = owner;
        return this;
    }
}
// トラック(Truck)クラスの作成
class Truck extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
    }
    // getInfo(): VehicleのgetInfo()メソッドをオーバーライドし、積載量も含めた車両の詳細情報を文字列で返す。
    getInfo() {
        return `${super.getInfo()}, 積載量: ${this.payload}kg`;
    }
    // メソッドチェーンをサポート
    setPayload(payload) {
        this.payload = payload;
        return this;
    }
}
// VehicleとTruckのインスタンスをそれぞれ作成し、getInfo()メソッドを使用して詳細情報をログに出力してください。
const vehicle = new Vehicle('Toyota', 'Prius', 2020).setColor('Red').setOwner('John');
console.log(vehicle.getInfo()); // メーカー: Toyota, モデル: Prius, 製造年: 2020
const truck = new Truck('Isuzu', 'Giga', 2018).setColor('Blue').setOwner('Mike').setPayload(5000);
console.log(truck.getInfo()); // メーカー: Isuzu, モデル: Giga, 製造年: 2018, 色: Blue, Owner: Mike, 積載量: 5000kg
