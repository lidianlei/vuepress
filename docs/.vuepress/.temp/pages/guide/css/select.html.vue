<template><div><h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1>
<h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th>示例</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">.class</td>
<td>.intro</td>
<td style="text-align:left">选择 class=&quot;intro&quot; 的所有元素</td>
</tr>
<tr>
<td style="text-align:left">#id</td>
<td>#firstname</td>
<td style="text-align:left">选择 id=&quot;firstname&quot; 的所有元素</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td>*</td>
<td style="text-align:left">选择所有元素</td>
</tr>
<tr>
<td style="text-align:left">element</td>
<td>p</td>
<td style="text-align:left">选择所有元素</td>
</tr>
<tr>
<td style="text-align:left">element,element</td>
<td>div,p</td>
<td style="text-align:left">选择所有元素和所有元素</td>
</tr>
<tr>
<td style="text-align:left">element element</td>
<td>div p</td>
<td style="text-align:left">选择元素内部的所有元素</td>
</tr>
<tr>
<td style="text-align:left">element&gt;element</td>
<td>div&gt;p</td>
<td style="text-align:left">选择父元素为元素的所有元素</td>
</tr>
<tr>
<td style="text-align:left">element+element</td>
<td>div+p</td>
<td style="text-align:left">选择紧接在元素之后的所有元素</td>
</tr>
</tbody>
</table>
<h3 id="标签选择" tabindex="-1"><a class="header-anchor" href="#标签选择" aria-hidden="true">#</a> 标签选择</h3>
<p>使用 <code v-pre>*</code> 可为所有元素设置样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*通配符选择器*/</span>
<span class="token selector">*</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/*根据标签为元素设置样式*/</span>
<span class="token selector">h1</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*同时设置多个元素组合*/</span>
<span class="token selector">h1,h2</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">span.class</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  //将类选择器指定为具体标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">#container</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构选择器" tabindex="-1"><a class="header-anchor" href="#结构选择器" aria-hidden="true">#</a> 结构选择器</h2>
<table>
<thead>
<tr>
<th style="text-align:left">选择器</th>
<th>示例</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">element element</td>
<td>div p</td>
<td style="text-align:left">选择元素内部的所有元素</td>
</tr>
<tr>
<td style="text-align:left">element&gt;element</td>
<td>div&gt;p</td>
<td style="text-align:left">选择父元素为元素的所有元素</td>
</tr>
<tr>
<td style="text-align:left">element+element</td>
<td>div+p</td>
<td style="text-align:left">选择紧接在元素之后的元素</td>
</tr>
<tr>
<td style="text-align:left">element~element2</td>
<td>p~ul</td>
<td style="text-align:left">选择元素同级并在元素后面的所有元素</td>
</tr>
</tbody>
</table>
<h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器" aria-hidden="true">#</a> 后代选择器</h3>
<p><code v-pre>HTML</code>中元素是以父子级、兄弟关系存在的，后代选择器指元素后的元素（不只是子元素，而是后代元素）</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main article h2,main h1</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子元素选择器" tabindex="-1"><a class="header-anchor" href="#子元素选择器" aria-hidden="true">#</a> 子元素选择器</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main article>h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="紧邻兄弟选元素" tabindex="-1"><a class="header-anchor" href="#紧邻兄弟选元素" aria-hidden="true">#</a> 紧邻兄弟选元素</h3>
<p>用于选择紧挨着的同级兄弟元素</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main article+h2</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后面兄弟元素" tabindex="-1"><a class="header-anchor" href="#后面兄弟元素" aria-hidden="true">#</a> 后面兄弟元素</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main article~*</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h2>
<p>根据属性来为元素设置样式也是常用的场景</p>
<table>
<thead>
<tr>
<th>选择器</th>
<th>示例</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>[attribute]</td>
<td>[target]</td>
<td>带有<code v-pre>target </code>属性所有元素</td>
</tr>
<tr>
<td>[attribute=value]</td>
<td>[target=_blank]</td>
<td><code v-pre>target</code>属性等于&quot;_blank&quot;的所有元素</td>
</tr>
<tr>
<td>[attribute~=value]</td>
<td>[title~=value]</td>
<td><code v-pre>title</code>属性包含单词“value”的所有元素</td>
</tr>
<tr>
<td>[attribute|=value]</td>
<td>[title|=value]</td>
<td><code v-pre>title</code>属性值为<code v-pre>value</code>的单词或<code v-pre>value-class</code>以<code v-pre>-</code>连接的独立单词</td>
</tr>
<tr>
<td>[attribute*=value]</td>
<td>a[src*=“value”]</td>
<td><code v-pre>src</code>属性中包含<code v-pre>value</code>字母的每个<code v-pre>a</code>元素</td>
</tr>
<tr>
<td>[attribute^=value]</td>
<td>a[src^=&quot;https&quot;]</td>
<td><code v-pre>src</code>属性值以“https”开头的每个<code v-pre>a</code>元素</td>
</tr>
<tr>
<td>[attribute$=value]</td>
<td>a[src$=&quot;.jpeg&quot;]</td>
<td><code v-pre>src</code>属性以“.jpeg”结尾的所有<code v-pre>a</code>元素</td>
</tr>
</tbody>
</table>
<p>为具有 <code v-pre>class</code> 属性的 h1 标签设置样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1[class]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>约束多个属性</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h1[class][id]</span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具有属性值设置样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a[href="https://www.baidu.com/"]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>^</code> 以指定值开头的元素</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h2[name^="https"]</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器</h2>
<p>为元素的不同状态或不确定存在的元素设置样式规则。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>同级别的第几个，不区分类别</p>
</div>
<table>
<thead>
<tr>
<th>状态</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>:first-child</td>
<td>p:first-child</td>
<td>选中同级别的第一个标签</td>
</tr>
<tr>
<td>:last-child</td>
<td>p:last-child</td>
<td>选中同级别中的最后一个标签</td>
</tr>
<tr>
<td>:nth-child(n)</td>
<td>p:nth-child(n)</td>
<td>选中同级别中的第n个标签</td>
</tr>
<tr>
<td>:nth-last-child(n)</td>
<td>p:nth-last-child(n)</td>
<td>选中同级别中的倒数第n个标签</td>
</tr>
<tr>
<td>:only-child</td>
<td>p:only-child</td>
<td>选中父元素中唯一的标签</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>同级别同类型的第几个</p>
</div>
<table>
<thead>
<tr>
<th>状态</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>:first-of-type</td>
<td>p:first-of-type</td>
<td>选中同级别同类型的第一个标签</td>
</tr>
<tr>
<td>:last-of-type</td>
<td>p:last-of-type</td>
<td>选中同级别中同类型的最后一个标签</td>
</tr>
<tr>
<td>:nth-of-type(n)</td>
<td>p:nth-of-type(n)</td>
<td>选中同级别中同类型的第n个标签</td>
</tr>
<tr>
<td>:nth-last-of-type(n)</td>
<td>p:nth-last-of-type(n)</td>
<td>选中同级别同类型的倒数第n个标签</td>
</tr>
<tr>
<td>:only-of-type</td>
<td>p:only-of-type</td>
<td>选中父元素唯一类型的某个标签</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>其他</p>
</div>
<table>
<thead>
<tr>
<th>状态</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>:nth-child(odd)</td>
<td>p:nth-child(odd)</td>
<td>选中同级别中所有的奇数</td>
</tr>
<tr>
<td>:nth-child(even)</td>
<td>p:nth-child(even)</td>
<td>选中同级别中的所有偶数</td>
</tr>
<tr>
<td>:nth-child(xn+y)</td>
<td>p:nth-child(xn+y)</td>
<td>x和y是用户自定义的，而n是一个计数器，从0开始递增</td>
</tr>
<tr>
<td>:nth-of-type(n)</td>
<td>p:nth-of-type(2)</td>
<td>选择属于其父元素第二个 p 元素的每个 p 元素。</td>
</tr>
<tr>
<td>:nth-of-type(odd)</td>
<td>p:nth-of-type(odd)</td>
<td>选中同级别中同类型的所有奇数</td>
</tr>
<tr>
<td>:nth-of-type(even)</td>
<td>p:nth-of-type(even)</td>
<td>选中同级别中同类型的所有偶数</td>
</tr>
<tr>
<td>:nth-of-type(xn+y)</td>
<td>p:nth-of-type(xn+y)</td>
<td>x和y是用户自定义的, 而n是一个计数器, 从0开始递增</td>
</tr>
<tr>
<td>:not(selector)</td>
<td>:not(p)</td>
<td>选择非 p 元素的每个元素</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>伪类选择器</p>
</div>
<table>
<thead>
<tr>
<th>状态</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>:link</td>
<td>a:link</td>
<td>选择所有未被访问的链接</td>
</tr>
<tr>
<td>:visited</td>
<td>a:visited</td>
<td>选择所有已被访问的链接</td>
</tr>
<tr>
<td>:hover</td>
<td>a:hover</td>
<td>鼠标移动到元素上时</td>
</tr>
<tr>
<td>:active</td>
<td>a:active</td>
<td>点击正在发生时</td>
</tr>
<tr>
<td>:focus</td>
<td>input::focus</td>
<td>选择获得焦点的 input 元素</td>
</tr>
<tr>
<td>:root</td>
<td>:root</td>
<td>选择文档的根元素即html</td>
</tr>
<tr>
<td>:empty</td>
<td>p:empty</td>
<td>选择没有子元素的每个元素（包括文本节点</td>
</tr>
</tbody>
</table>
<h3 id="超链接伪类" tabindex="-1"><a class="header-anchor" href="#超链接伪类" aria-hidden="true">#</a> :超链接伪类</h3>
<p>定义链接的不同状态</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a:link</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red
<span class="token punctuation">}</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green
<span class="token punctuation">}</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue
<span class="token punctuation">}</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> yellow
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不只是链接可以使用伪类，其他元素也可以使用</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input:active</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> :target</h3>
<p>用于控制具有锚点目标元素的样式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div:target</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> :root</h3>
<p>根元素选择伪类即选择 html</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="empty" tabindex="-1"><a class="header-anchor" href="#empty" aria-hidden="true">#</a> :empty</h3>
<p>没有内容和空白的元素</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">:empty</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表单" tabindex="-1"><a class="header-anchor" href="#表单" aria-hidden="true">#</a> 表单</h2>
<table>
<thead>
<tr>
<th>选择器</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>:enabled</td>
<td>input:enabled</td>
<td>选择每个启用的<code v-pre>input</code>元素</td>
</tr>
<tr>
<td>:disabled</td>
<td>input:enabled</td>
<td>选择每个禁用的<code v-pre>input</code>元素</td>
</tr>
<tr>
<td>:checked</td>
<td>input:checked</td>
<td>选择每个被选中的<code v-pre>input</code>元素</td>
</tr>
<tr>
<td>:required</td>
<td>input:required</td>
<td>包含<code v-pre>required</code>属性的元素</td>
</tr>
<tr>
<td>:optional</td>
<td>input:optional</td>
<td>不包含<code v-pre>required</code>属性的元素</td>
</tr>
<tr>
<td>:valid</td>
<td>input:valid</td>
<td>验证通过的表单元素</td>
</tr>
<tr>
<td>:invalid</td>
<td>input:invalid</td>
<td>验证不通过的表单</td>
</tr>
</tbody>
</table>
<h2 id="字符伪类" tabindex="-1"><a class="header-anchor" href="#字符伪类" aria-hidden="true">#</a> 字符伪类</h2>
<table>
<thead>
<tr>
<th>状态</th>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>::first-letter</td>
<td>p::first-letter</td>
<td>选择每个<code v-pre>p</code>元素的首字母</td>
</tr>
<tr>
<td>::first-line</td>
<td>p::first-line</td>
<td>选择每个<code v-pre>p</code>元素的首行</td>
</tr>
<tr>
<td>::before</td>
<td>p::before</td>
<td>在每个<code v-pre>p</code>元素的内容之前插入内容</td>
</tr>
<tr>
<td>::after</td>
<td>p::after</td>
<td>在每个 p 元素的内容之后插入内容</td>
</tr>
</tbody>
</table>
<h3 id="首字母大写" tabindex="-1"><a class="header-anchor" href="#首字母大写" aria-hidden="true">#</a> 首字母大写</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">p::first-letter</span> <span class="token punctuation">{</span>
    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="段落首行处理" tabindex="-1"><a class="header-anchor" href="#段落首行处理" aria-hidden="true">#</a> 段落首行处理</h3>
<div class="language-CSS line-numbers-mode" data-ext="CSS"><pre v-pre class="language-CSS"><code>p::first-line {
    font-size:20px;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在元素前添加" tabindex="-1"><a class="header-anchor" href="#在元素前添加" aria-hidden="true">#</a> 在元素前添加</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'⇰'</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">span::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'⟲'</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加属性内容" tabindex="-1"><a class="header-anchor" href="#添加属性内容" aria-hidden="true">#</a> 添加属性内容</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h2::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
//&lt;h2 title=<span class="token string">"css"</span>>web前端&lt;/h2>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


