<template><div><h1 id="浮动布局" tabindex="-1"><a class="header-anchor" href="#浮动布局" aria-hidden="true">#</a> 浮动布局</h1>
<p>float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。</p>
<h3 id="float" tabindex="-1"><a class="header-anchor" href="#float" aria-hidden="true">#</a> FLOAT</h3>
<p>使用浮动可以控制相邻元素间的排列关系。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>向左浮动</td>
</tr>
<tr>
<td>right</td>
<td>向右浮动</td>
</tr>
<tr>
<td>none</td>
<td>不浮动</td>
</tr>
</tbody>
</table>
<h3 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h3>
<p>没有设置浮动的块元素是独占一行的，浮动是对后面元素的影响</p>
<h3 id="丢失空间" tabindex="-1"><a class="header-anchor" href="#丢失空间" aria-hidden="true">#</a> 丢失空间</h3>
<p>如果只给第一个元素设置浮动，第二个元素不设置，后面的元素会占用第一个元素空间。</p>
<h3 id="使用浮动" tabindex="-1"><a class="header-anchor" href="#使用浮动" aria-hidden="true">#</a> 使用浮动</h3>
<p>两个元素都设置浮动后，会并排显示</p>
<h3 id="浮动边界" tabindex="-1"><a class="header-anchor" href="#浮动边界" aria-hidden="true">#</a> 浮动边界</h3>
<p>浮动元素边界不能超过父元素的 padding</p>
<h3 id="浮动转块" tabindex="-1"><a class="header-anchor" href="#浮动转块" aria-hidden="true">#</a> 浮动转块</h3>
<p>元素浮动后会变为块元素包括行元素如 <code v-pre>span</code>，所以浮动后的元素可以设置宽高</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动" aria-hidden="true">#</a> 清除浮动</h2>
<p>不希望元素受浮动元素影响时，可以清除浮动</p>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> CLEAR</h3>
<p>css提供了<code v-pre>clear</code>规则用于清楚元素浮动影响</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>左边远离浮动元素</td>
</tr>
<tr>
<td>right</td>
<td>右连远离浮动元素</td>
</tr>
<tr>
<td>both</td>
<td>左右都远离浮动元素</td>
</tr>
</tbody>
</table>
<h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> AFTER</h3>
<p>使用<code v-pre>::after</code>伪类父元素添加后标签，实现清楚浮动</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span><span class="token string">"block"</span><span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> OVERFLOW</h3>
<p>子元素使用浮动后将不占用空间，这时父元素高度将为零，通过添加父元素<code v-pre>overflow</code>属性可以清楚浮动</p>
<p>将会使用父元素产生 <code v-pre>BFC</code> 机制，即父元素的高度计算会包括浮动元素的高度</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h2>
<ol>
<li>首先根据设计稿确定页面大小（主要指宽度，移动端不需要考虑），如 1200px 宽度</li>
<li>水平分割页面主要区域</li>
<li>每个区域中按以上两步继续细分</li>
</ol>
<h2 id="形状浮动-shape-outside" tabindex="-1"><a class="header-anchor" href="#形状浮动-shape-outside" aria-hidden="true">#</a> 形状浮动（shape-outside）</h2>
<p>通过形状浮动可以让内容围绕图片，类似于我们在 word 中的环绕排版。要求图片是有透明度的 PNG 格式</p>
<h3 id="距离控制" tabindex="-1"><a class="header-anchor" href="#距离控制" aria-hidden="true">#</a> 距离控制</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>margin-box</td>
<td>外边距环绕</td>
</tr>
<tr>
<td>padding-box</td>
<td>内边距环绕</td>
</tr>
<tr>
<td>border-box</td>
<td>边线环绕</td>
</tr>
<tr>
<td>content-box</td>
<td>内容环绕</td>
</tr>
</tbody>
</table>
<p><strong>外边距环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 30px green<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> margin-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>边框环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 30px green<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示区域-clip-path" tabindex="-1"><a class="header-anchor" href="#显示区域-clip-path" aria-hidden="true">#</a> 显示区域（clip-path）</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>circle</td>
<td>圆形</td>
</tr>
<tr>
<td>ellipse</td>
<td>椭圆</td>
</tr>
<tr>
<td>polygon</td>
<td>多边形</td>
</tr>
</tbody>
</table>
<p><strong>圆形</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50% at center<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>椭圆</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>50% 80% at 100% 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多边形</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0<span class="token punctuation">,</span> 100% 100%<span class="token punctuation">,</span> 0 100%<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内移距离-shape-outside" tabindex="-1"><a class="header-anchor" href="#内移距离-shape-outside" aria-hidden="true">#</a> 内移距离（shape-outside）</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>50px 30px 80px 50px<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环绕模式" tabindex="-1"><a class="header-anchor" href="#环绕模式" aria-hidden="true">#</a> 环绕模式</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>circle</td>
<td>圆形环绕</td>
</tr>
<tr>
<td>ellipse</td>
<td>椭圆环绕</td>
</tr>
<tr>
<td>url</td>
<td>图片环绕</td>
</tr>
<tr>
<td>polygan</td>
<td>多边环绕</td>
</tr>
</tbody>
</table>
<p><strong>圆形环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>椭圆环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>80px 70px<span class="token punctuation">)</span> padding-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>图片环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>xj.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多边环绕</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">span.shape</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50px 0px<span class="token punctuation">,</span> 0 100px<span class="token punctuation">,</span> 100px 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50px 0px<span class="token punctuation">,</span> 0 100px<span class="token punctuation">,</span> 100px 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


