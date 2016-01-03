---
title: Arrow Functions (context)
navGroup: .lessons
next: lessons/destructuring
prev: lessons/arrow-functions
nextText: Tiếp theo, chúng ta sẽ tìm hiểu về Destructuring.
heading: Arrow Functions -- Context
code: |
    var ctx = { foo: 'bar' };

    // this === window
    let printThis = () => {
      if (this !== ctx) {
        console.log("Context is not changed");
      }
      else {
        console.log("Context changed", this);
      }
    }

    printThis();
    printThis.call(ctx);
    printThis.apply(ctx);
    printThis.bind(ctx)();
---

### Arrow Functions và Function bình thường khác nhau như thế nào?

Có 2 điểm khác biệt:

0. **Ngữ cảnh hàm (this) có phạm vi lexial**
Cơ bản, `this` là `this` từ cái phạm vi mà khai báo hàm này, không phải là ngữ cảnh gọi hàm. Các ngữ cảnh như (`call`, `apply`, `bind`, etc) hoàn toàn không có ảnh hưởng gì lên giá trị của `this`.  Xem thêm ở ví dụ bên dưới.

0. **Arrow Functions không phải là định nghĩa hàm**
Bạn không thể sử dụng từ khóa "new" cho Arrow Functions.  Nói một cách khác, kết quả là bị lỗi:
```
let NotGood = () => {};
let wontWork = new NotGood();
```

> Chú ý: REPL này sẽ không hiển thị cảnh báo lỗi này, nên đừng để bị rối lên vì đặc tả của ES6 không cho phép điều này.


