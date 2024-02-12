/**
```
問題: ジェネリック型を使用したマップの実装
要件:
あなたはキーと値のペアを管理するカスタムマップの実装を担当しています。このマップはジェネリック型を使用して柔軟性を持たせる必要があります。

MyMap<K, V>クラスの作成:
ジェネリック型パラメータ:
K: マップのキーの型
V: マップの値の型
コンストラクタ:
初期キー(initialKey: K)と初期値(initialValue: V)を受け取り、内部ストレージに保存します。
メソッド:
get(key: K): V: 指定されたキーに対応する値を返します。
set(key: K, value: V): void: キーと値のペアをマップに追加します。
merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1>: 別のMyMapインスタンスを現在のマップにマージし、新しいマップを返します。
static of<K, V>(k: K, v: V): MyMap<K, V>: キーと値のペアから新しいMyMapインスタンスを作成し、返します。
タスク:
上記の要件に従って、MyMap<K, V>クラスを定義してください。内部ストレージとしてMap<K, V>を使用すると便利です。
MyMapクラスのインスタンスをいくつか作成し、get, set, merge, ofメソッドを使用してその動作をデモするコードを書いてください。
```
 */

class MyMap<K, V>{
  private map = new Map<K, V>()

  constructor(
    initialKey: K,
    initialValue: V
  ) {
    this.set(initialKey, initialValue)
  }

  get(key: K): V | undefined {
    return this.map.get(key)
  }

  set(key: K, Value: V): void {
    this.map.set(key, Value)
  }

  merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
    const tmp = new MyMap<K | K1, V | V1>(null as any, null as any);
    for (const [key, value] of this.map) {
      tmp.set(key, value);
    }
    for (const [key, value] of map.map) {
      tmp.set(key, value);
    }
    return tmp;
  }

  static of<K, V>(k: K, v: V): MyMap<K, V> {
    return new MyMap(k, v)
  }
}

let a = MyMap.of("k", 1);
let b = MyMap.of("k", true);
console.log(a.get("k")); // 1
b.set("k", false);
let mergedMap = a.merge(b);
console.log(mergedMap.get("k")); // false

