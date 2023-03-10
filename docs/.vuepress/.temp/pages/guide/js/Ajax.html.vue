<template><div><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<p>浏览器天生具发送<code v-pre>HTTP</code>请求的能力，比如在在址栏输入内容，提交<code v-pre>FORM</code>表单等。本章来学习通过<code v-pre>JS</code>程序来管理<code v-pre>HTTP</code>请求的能力。</p>
<p>使用<code v-pre>JS</code>脚本发送<code v-pre>HTTP</code>请求，不会带来页面的刷新，所以用户体验非常好</p>
<h2 id="xhlhttprequest" tabindex="-1"><a class="header-anchor" href="#xhlhttprequest" aria-hidden="true">#</a> XHLHttpRequest</h2>
<p>使用<code v-pre>XMLHttpRequest</code>发送请求，是一种存在很久的方案。现代浏览器支持使用<code v-pre>fetch</code>的异步请求方式，<code v-pre>fetch</code>基于<code v-pre>promise</code>异步操作体验更好</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>使用<code v-pre>XMLHttpRequest</code>发送请求需要执行以下几步</p>
<ol>
<li>使用<code v-pre>new XMLHttpRequest</code>创建<code v-pre>xhr</code>对象</li>
<li><code v-pre>xhr.open</code>初始化请求参数</li>
<li><code v-pre>xhr.send</code>发送网络请求</li>
<li><code v-pre>xhr.onload</code>监听请求结果</li>
<li><code v-pre>xhr.onerror</code>请求中断等错误发生时的处理</li>
</ol>
<h3 id="响应类型" tabindex="-1"><a class="header-anchor" href="#响应类型" aria-hidden="true">#</a> 响应类型</h3>
<p>通过设置<code v-pre>xhr.responseType</code>对响应结果进行声明，来对结果自动进行处理</p>
<p>可以使用的响应类型</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>响应结果为文本</td>
</tr>
<tr>
<td>json</td>
<td>响应结果为<code v-pre>JSON</code>，系统会自动将结果转为<code v-pre>JSON</code>对象</td>
</tr>
<tr>
<td>blob</td>
<td>二进制数据响应</td>
</tr>
<tr>
<td>document</td>
<td><code v-pre>XML DOCUMENT</code>内容</td>
</tr>
</tbody>
</table>
<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'web.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送表单" tabindex="-1"><a class="header-anchor" href="#发送表单" aria-hidden="true">#</a> 发送表单</h3>
<p>使用<code v-pre>XMLHttpRequest</code>发送<code v-pre>POST</code>请求</p>
<p><strong>异步请求</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"submit"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//阻止默认事件</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"web.js"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"POST"</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装请求类" tabindex="-1"><a class="header-anchor" href="#封装请求类" aria-hidden="true">#</a> 封装请求类</h3>
<p>结合<code v-pre>Promise</code>来构建一个<code v-pre>XHR</code>异步处理类，使异步请求操作变得更简单</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">WEB</span> <span class="token punctuation">{</span>
  options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token string">"GET"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>method <span class="token operator">=</span> method<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">formatData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">formatData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">!=</span> <span class="token string">'object'</span> <span class="token operator">||</span> data <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> form
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">xhr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">xhr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>method<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>responseType<span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">!==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 WEB.get 静态方法发送 GET 请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">WEB</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'web.js'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 WEB.get 静态方法发送 POST 请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">WEB</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'web.js'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> FETCH</h2>
<p><code v-pre>FETCH</code>是<code v-pre>JS</code>升级后提供的更简便的网络请求的操作方法，内部使用<code v-pre>Promise</code>来完成的异步请求</p>
<ul>
<li><code v-pre>response.json()</code>接收<code v-pre>JSON</code>类型数据</li>
<li><code v-pre>response.text()</code>接收<code v-pre>TEXT</code>类型数据</li>
<li><code v-pre>response.blog()</code>接收<code v-pre>Blog</code>二进制数据</li>
</ul>
<h3 id="请求步骤" tabindex="-1"><a class="header-anchor" href="#请求步骤" aria-hidden="true">#</a> 请求步骤</h3>
<p>使用<code v-pre>fetch</code>方法发送异步请求需要分以下两个步骤</p>
<h4 id="响应头解析" tabindex="-1"><a class="header-anchor" href="#响应头解析" aria-hidden="true">#</a> 响应头解析</h4>
<p>第一步对服务器返回的响应头进行解析，会接到<code v-pre>Request</code>类创建的对象实例，里面包含以下属性</p>
<ul>
<li><code v-pre>status.HTTP</code>状态码</li>
<li><code v-pre>ok:</code>状态码为<code v-pre>200-299</code>时为<code v-pre>true</code>的布尔值</li>
</ul>
<h4 id="响应内容解析" tabindex="-1"><a class="header-anchor" href="#响应内容解析" aria-hidden="true">#</a> 响应内容解析</h4>
<p>第二部对返回的保存在<code v-pre>resonse.body</code>中的响应结果进行解析，支持以下几种方式对结果进行解析</p>
<ul>
<li>response.json()接收 JSON 类型数据</li>
<li>response.text()接收 TEXT 类型数据</li>
<li>response.blog()接收 Blog 二进制数据</li>
</ul>
<blockquote>
<p>以上方法不能同时使用，因为使用一个方法后数据已经被处理，其他方法就不可以操作了</p>
</blockquote>
<h4 id="发送请求" tabindex="-1"><a class="header-anchor" href="#发送请求" aria-hidden="true">#</a> 发送请求</h4>
<p>使用<code v-pre>fetch</code>发送<code v-pre>GET</code>请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">web.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">articles</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>articles<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code v-pre>fetch</code>结果是 <code v-pre>promise</code>所以也可以使用<code v-pre>async/await</code>操作</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">web.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> articles <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>articles<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h3>
<p>发送 POST 请求需要设置请求头 Request header</p>
<h4 id="发送请求-1" tabindex="-1"><a class="header-anchor" href="#发送请求-1" aria-hidden="true">#</a> 发送请求</h4>
<ul>
<li>发送的 JSON 类型需要设置请求头为 <code v-pre>application/json;charset=utf-8</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">web.js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'web'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> articles <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>articles<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


