---
title: Classes -- Extended
navGroup: .lessons
heading: Classes - Extended
code: |
    class Person {
      constructor(first, last) {
        this.first = first;
        this.last = last;
      }

      toString() {
        return `${this.first} ${this.last}`;
      }
    }

    class SuperPerson extends Person {
      constructor(first, last, power) {
        super(first, last);
        this.superPower = power;
      }

      toString() {
        return `${super.toString()} with the power of ${this.superPower}`;
      }
    }

    let brian = new SuperPerson('Brian', 'Genisio', 'code');

    console.log(brian.toString());
---

Classes can be extended using the `extends` keyword.  Methods can be overridden by re-defining them but the parent implementation can be called with `super()`;
Class có thể được thừa kế sử dụng từ khóa `extends`. Những phương thức được ghi đè (overridden) bởi việc khai báo lại hàm, nhưng vẫn có thể thực thi phương thức ở lớp cha bằng cách gọi `super()`. Tương tự như trong Java chúng ta cũng dùng `super`, hoặc trong PHP thì `parent()`. Như bạn thấy, Javascript đã hoàn thiện hơn với ES6/ES2015 không thua gì các ngôn ngữ mạnh khác nhé.

```javascript
class SuperPerson extends Person {
  constructor(first, last, power) {
    super(first, last);
    this.superPower = power;
  }

  toString() {
    return `${super.toString()} with the power of ${this.superPower}`;
  }
}
```

### Hãy thử đoạn code sau!
