---
title: Block Scope (const)
navGroup: .lessons
next: lessons/template-strings
nextText: Now let's look at Template Strings.
heading: Block Scope ("const" keyword)
code: |
    const foo = "bar";
    console.log(foo);

    foo = "baz";
    
    
---

Ngoài [từ khóa `let`](/#lessons/block-scope-let) có phạm vi khối, thì còn thêm 1 cách khai báo giá trị trong ES6/ES2015 nữa: `const`. Cũng giống như các ngôn ngữ khác, giá trị của biến được khai báo bằng `const` không thể thay đổi được.

```javascript
const foo = "bar";
console.log(foo);

foo = "baz"; // evalutation error
```

### Hãy thử đoạn code sau!
