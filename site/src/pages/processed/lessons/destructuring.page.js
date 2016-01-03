export var page = {
    "title": "Variable Destructuring",
    "navGroup": ".lessons",
    "next": "lessons/destructuring-arrays",
    "nextText": "Destructuring isn't just for objects.  You can Destructure Arrays too!",
    "heading": "Object Destructuring",
    "code": "let person = {\n    first: 'Marsellus',\n    last: 'Wallace',\n    spouse: {\n        first: 'Mia',\n        last: 'Wallace'\n    }\n};\n\nlet {first: husband, last, spouse: { first: wife } } = person;\nconsole.log(wife, husband, last);",
    "intro": "<p>Variable Destructuring is a syntactical convenience designed to help you destructure objects and arrays.  </p>\n<p>Let&#39;s say you have a person object:</p>\n<pre><code><span class=\"hljs-keyword\">var</span> person = {\n    first: <span class=\"hljs-string\">'Marsellus'</span>,\n    last: <span class=\"hljs-string\">'Wallace'</span>\n};\n</code></pre><p>You can easily assign variables to these properties using destructuring:</p>\n<pre><code>let {<span class=\"hljs-keyword\">first</span>, <span class=\"hljs-keyword\">last</span>} = person;\nconsole.<span class=\"hljs-command\">log</span>(<span class=\"hljs-keyword\">first</span>, <span class=\"hljs-keyword\">last</span>);\n</code></pre><p>You can also assign the variables using different names:</p>\n<pre><code><span class=\"hljs-built_in\">let</span> {first: fn, last: <span class=\"hljs-built_in\">ln</span>} = person;\nconsole.<span class=\"hljs-built_in\">log</span>(fn, <span class=\"hljs-built_in\">ln</span>);\n</code></pre><p>This is particularly useful when you have a function that returns two values:</p>\n<pre><code>function getResult() {\n    <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-number\">1234</span>,\n        error: null\n    };\n}\n\n<span class=\"hljs-keyword\">let</span> {<span class=\"hljs-literal\">result</span>, error} = getResult();\n</code></pre><p>But you can also use destructuring to pass variables in:</p>\n<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">doHTTP</span><span class=\"hljs-params\">({host, port, path})</span> <span class=\"hljs-comment\">{\n    console.log(host, port, path);\n}</span>\n\n<span class=\"hljs-title\">doHTTP</span><span class=\"hljs-params\">({\n    host: <span class=\"hljs-string\">'learnharmony.org'</span>,\n    port: 80,\n    path: <span class=\"hljs-string\">'/'</span>\n})</span>;</span>\n</code></pre><p>You can even destructure deeply:</p>\n<pre><code><span class=\"hljs-keyword\">let</span> person = {\n    first: <span class=\"hljs-string\">'Marsellus'</span>,\n    last: <span class=\"hljs-string\">'Wallace'</span>,\n    spouse: {\n        first: <span class=\"hljs-string\">'Mia'</span>,\n        last: <span class=\"hljs-string\">'Wallace'</span>\n    }\n};\n\n<span class=\"hljs-keyword\">let</span> {first: husband, last, spouse: { first: wife } } = person;\nconsole.log(wife, husband, last);\n</code></pre>"
};