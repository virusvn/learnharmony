export var page = {
    "title": "Arrow Functions (context)",
    "navGroup": ".lessons",
    "next": "lessons/destructuring",
    "prev": "lessons/arrow-functions",
    "nextText": "Tiếp theo, chúng ta sẽ tìm hiểu về Destructuring.",
    "heading": "Arrow Functions -- Context",
    "code": "var ctx = { foo: 'bar' };\n\n// this === window\nlet printThis = () => {\n  if (this !== ctx) {\n    console.log(\"Context is not changed\");\n  }\n  else {\n    console.log(\"Context changed\", this);\n  }\n}\n\nprintThis();\nprintThis.call(ctx);\nprintThis.apply(ctx);\nprintThis.bind(ctx)();",
    "intro": "<h3 id=\"arrow-functions-v-function-b-nh-th-ng-kh-c-nhau-nh-th-n-o-\">Arrow Functions và Function bình thường khác nhau như thế nào?</h3>\n<p>Có 2 điểm khác biệt:</p>\n<ol>\n<li><p><strong>Ngữ cảnh hàm (this) có phạm vi lexial</strong>\nCơ bản, <code>this</code> là <code>this</code> từ cái phạm vi mà khai báo hàm này, không phải là ngữ cảnh gọi hàm. Các ngữ cảnh như (<code>call</code>, <code>apply</code>, <code>bind</code>, etc) hoàn toàn không có ảnh hưởng gì lên giá trị của <code>this</code>.  Xem thêm ở ví dụ bên dưới.</p>\n</li>\n<li><p><strong>Arrow Functions không phải là định nghĩa hàm</strong>\nBạn không thể sử dụng từ khóa &quot;new&quot; cho Arrow Functions.  Nói một cách khác, kết quả là bị lỗi:</p>\n<pre><code><span class=\"hljs-keyword\">let</span> <span class=\"hljs-type\">NotGood</span> = <span class=\"hljs-literal\">()</span> =&gt; {};\n<span class=\"hljs-keyword\">let</span> wontWork = new <span class=\"hljs-type\">NotGood</span><span class=\"hljs-literal\">()</span>;\n</code></pre></li>\n</ol>\n<blockquote>\n<p>Chú ý: REPL này sẽ không hiển thị cảnh báo lỗi này, nên đừng để bị rối lên vì đặc tả của ES6 không cho phép điều này.</p>\n</blockquote>\n"
};