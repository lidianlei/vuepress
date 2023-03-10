<template><div><h1 id="元素权重" tabindex="-1"><a class="header-anchor" href="#元素权重" aria-hidden="true">#</a> 元素权重</h1>
<h2 id="元素权重-1" tabindex="-1"><a class="header-anchor" href="#元素权重-1" aria-hidden="true">#</a> 元素权重</h2>
<p>元素会被多个样式一层层作用，这就是层叠样式表的来源。如果多个样式做用在元素上就会产生优先级权重问题</p>
<p>使用类、ID、伪类都有不同的权重，具体应用哪条规则要看权限大小。</p>
<ul>
<li>相同权重的规则应用最后出现的</li>
<li>可以使用 <code v-pre>!important</code> 强制提升某个规则的权限</li>
</ul>
<h2 id="权重应用" tabindex="-1"><a class="header-anchor" href="#权重应用" aria-hidden="true">#</a> 权重应用</h2>
<table>
<thead>
<tr>
<th>规则</th>
<th>粒度</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID</td>
<td>0100</td>
</tr>
<tr>
<td>class，类属性值</td>
<td>0010</td>
</tr>
<tr>
<td>标签,伪元素</td>
<td>0001</td>
</tr>
<tr>
<td>*</td>
<td>0000</td>
</tr>
<tr>
<td>行内样式</td>
<td>1000</td>
</tr>
</tbody>
</table>
<h2 id="强制优先级" tabindex="-1"><a class="header-anchor" href="#强制优先级" aria-hidden="true">#</a> 强制优先级</h2>
<blockquote>
<p>有时在规则冲突时，为了让某个规则强制有效可以使用 <code v-pre>!important</code>。</p>
<p>两条规则权限一样，默认应用第二个规则，但第一个规则使用了<code v-pre>!important</code> 提升了权限，所以被应用。</p>
</blockquote>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> LESS</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token selector">article</span> <span class="token punctuation">{</span>
        <span class="token selector">h1</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*生成的css*/</span>
<span class="token selector">main article h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承规则" tabindex="-1"><a class="header-anchor" href="#继承规则" aria-hidden="true">#</a> 继承规则</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>​	子元素可以继承父元素设置的样式</p>
<ul>
<li>子元素并不是全部样式，比如边框、高度等并不会继承</li>
<li>继承的规则没有权重</li>
</ul>
</div>
<h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h2>
<p>在开发中使用<code v-pre>*</code> 选择器会有一个问题。因为通配符的权限为 0，而继承的规则没有权重。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>css <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>管理系统<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>h2</code> 中的 span 并没有继承 <code v-pre>h2</code> 的颜色，就是因为继承没有权重。而使用了 <code v-pre>*</code> 权重为 0 的规则</p>
</div></template>


