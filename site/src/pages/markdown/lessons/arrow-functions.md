---
title: Arrow Functions
navGroup: .lessons
first: true
next: lessons/arrow-functions-context
nextText: |
    Nhưng thật sự thì Arrow Functions không giống hoàn toàn function bình thường.
    Hãy tìm hiểu tại sao!
heading: Arrow Functions
code: |
    var values = [1, 2, 3, 4, 5, 6];

    var even = values.filter(x => x % 2 === 0);
    var evenSquares = even.map(x => x * x);

    console.log(even, evenSquares);
---

Arrow Function là cách viết ngắn gọn của hàm vô danh trong Javascript. Trong đa số các trường hợp thì nó chỉ giống như hàm vô danh nhưng với cú pháp gọn nhẹ hơn.

Một hàm chuẩn thường được viết như sau:

```
var myFunction = function(arg) { 
    return arg.toUpperCase(); 
};
```

Với Arrow Functions, bạn có thể viết theo cách ES6 với kết quả tương tự: 
```
var myFunction = (arg) => arg.toUpperCase();
```

### Bạn sẽ sử dụng Arrow Functions lúc nào?
Arrow Functions thực sự tiện lợi khi truyền một hàm vô danh cho một hàm khác. Ví dụ, cú pháp của filtering và mapping trở nên ngắn gọn hơn rất nhiều.

### Hãy thử đoạn code sau!


