export var page = {
    "title": "Arrow Functions",
    "navGroup": ".lessons",
    "first": true,
    "next": "lessons/arrow-functions-context",
    "nextText": "Nhưng thật sự thì Arrow Functions không giống hoàn toàn function bình thường.\nHãy tìm hiểu tại sao!\n",
    "heading": "Arrow Functions",
    "code": "var values = [1, 2, 3, 4, 5, 6];\n\nvar even = values.filter(x => x % 2 === 0);\nvar evenSquares = even.map(x => x * x);\n\nconsole.log(even, evenSquares);",
    "intro": "<p>Arrow Function là cách viết ngắn gọn của hàm vô danh trong Javascript. Trong đa số các trường hợp thì nó chỉ giống như hàm vô danh nhưng với cú pháp gọn nhẹ hơn.</p>\n<p>Một hàm chuẩn thường được viết như sau:</p>\n<pre><code><span class=\"hljs-keyword\">var</span> myFunction = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(arg)</span> </span>{ \n    <span class=\"hljs-keyword\">return</span> arg.toUpperCase(); \n};\n</code></pre><p>Với Arrow Functions, bạn có thể viết theo cách ES6 với kết quả tương tự: </p>\n<pre><code>var myFunction = <span class=\"hljs-function\"><span class=\"hljs-params\">(arg)</span> =&gt;</span> arg.toUpperCase();\n</code></pre><h3 id=\"b-n-s-s-d-ng-arrow-functions-l-c-n-o-\">Bạn sẽ sử dụng Arrow Functions lúc nào?</h3>\n<p>Arrow Functions thực sự tiện lợi khi truyền một hàm vô danh cho một hàm khác. Ví dụ, cú pháp của filtering và mapping trở nên ngắn gọn hơn rất nhiều.</p>\n<h3 id=\"h-y-th-o-n-code-sau-\">Hãy thử đoạn code sau!</h3>\n"
};