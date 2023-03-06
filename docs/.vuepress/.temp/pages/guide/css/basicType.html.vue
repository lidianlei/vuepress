<template><div><h1 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h1>
<h2 id="类型检测" tabindex="-1"><a class="header-anchor" href="#类型检测" aria-hidden="true">#</a> 类型检测</h2>
<blockquote>
<p>JS提供了非常丰富的数据类型</p>
</blockquote>
<h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3>
<p><code v-pre>typeof</code>用于返回以下原始类型</p>
<ul>
<li>基本类型：number / string / boolean</li>
<li>function</li>
<li>object</li>
<li>undefined</li>
</ul>
<p>可以使用<code v-pre>typeof</code>用于判断数据的类型</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//number</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//string</span>

<span class="token keyword">var</span> bol<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> bol<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//未赋值或不存在的变量返回undefined</span>

<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> run<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>

<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"js"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


