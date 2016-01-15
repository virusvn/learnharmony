---
title: Block Scope (let)
navGroup: .lessons
next: lessons/block-scope-const
nextText: There's another way to do block scoping.  Learn about "const" next.
heading: Block Scope ("let" keyword)
code: |
    function blockScoped() {
        if(true) {
            let zed = 'alive'; 
        }

        console.log("Zed is " + zed);
    }

    blockScoped();
    
---

Trước khi ES6/ES2015 ra đời, khóa khởi tạo biến (`var`) luôn được sử dụng trong phạm vi hàm. Nó không quan tâm ví trị bạn khai báo biến, nhưng  biến thì luôn tồn tại trong phạm vi của hàm khai báo (lý do là Javascript luôn di chuyển tất cả các dòng khai báo biến bắt đầu từ (`var`) lên trên đầu của hàm). Do vậy, điều này làm cho bạn có thể viết code sử dụng biến ngay cả những vị trí mà bạn không mong nó hoạt động:

```javascript
function fnScoped() {
    if(true) {
        var zed = 'alive'; // zed is "hoisted" to the function block
    }

    if(true) {
        console.log('zed is ' + zed); // zed is alive
    }
}
```

Trong ES6/ES2015 từ khóa `let` cho phép bạn khai báo biến nội trong phạm vi của khối mà nó khai báo (không phải là hàm nhé). Điều này khiến cho code được hoạt động đúng như bạn mong muốn, và cấu trúc sẽ chặt chẽ hơn, không còn sử dụng biến 1 cách tùy tiện nữa:

```javascript
function blockScoped() {
    if(true) {
        let zed = 'alive'; // zed is not "hoisted" out of this block
    }

    console.log('zed is ' + zed); // Uncaught ReferenceError: zed is not defined
}
```

Vì vậy, bạn hãy sử dụng từ khóa `let` thay vì `var`, trừ khi bạn muốn biến hoạt động trong toàn bộ hàm - nhưng thật sự là rất hiếm trường hợp như vậy.

### Hãy thử đoạn code sau!
