<template><div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2>
<p>表格可以非常快速的部署数据，灵活控制表格样式是必要的。表格不能设置外边距</p>
<h3 id="定制表格" tabindex="-1"><a class="header-anchor" href="#定制表格" aria-hidden="true">#</a> 定制表格</h3>
<p>除了使用 <code v-pre>table</code> 标签绘制表格外，也可以使用样式绘制</p>
<table>
<thead>
<tr>
<th>样式规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>table</td>
<td>对应 table</td>
</tr>
<tr>
<td>table-caption</td>
<td>对应 caption</td>
</tr>
<tr>
<td>table-row</td>
<td>对表 tr</td>
</tr>
<tr>
<td>table-row-group</td>
<td>对应 tbody</td>
</tr>
<tr>
<td>table-header-group</td>
<td>对应 thead</td>
</tr>
<tr>
<td>table-footer-group</td>
<td>对应 tfoot</td>
</tr>
</tbody>
</table>
<h3 id="表格标题" tabindex="-1"><a class="header-anchor" href="#表格标题" aria-hidden="true">#</a> 表格标题</h3>
<p>通过 <code v-pre>caption-side</code> 可以设置标题位置，值可以设置为 <code v-pre>top | bootom</code></p>
<h3 id="内容对齐" tabindex="-1"><a class="header-anchor" href="#内容对齐" aria-hidden="true">#</a> 内容对齐</h3>
<p>水平对齐使用 <code v-pre>text-align</code> 文本对齐规则</p>
<h3 id="边框间距" tabindex="-1"><a class="header-anchor" href="#边框间距" aria-hidden="true">#</a> 边框间距</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*设置单元格间距，设置间距上下 10px ，左右 50px*/</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-spacing</span><span class="token punctuation">:</span> 50px 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="边框合并" tabindex="-1"><a class="header-anchor" href="#边框合并" aria-hidden="true">#</a> 边框合并</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏单元格" tabindex="-1"><a class="header-anchor" href="#隐藏单元格" aria-hidden="true">#</a> 隐藏单元格</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">empty-cells</span><span class="token punctuation">:</span> hide<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="追加内容" tabindex="-1"><a class="header-anchor" href="#追加内容" aria-hidden="true">#</a> 追加内容</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p>使用伪类 <code v-pre>::before</code> 向前添加内容，使用 <code v-pre>::after</code> 向后面添加内容</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">a::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" (坚持努力) "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提取属性" tabindex="-1"><a class="header-anchor" href="#提取属性" aria-hidden="true">#</a> 提取属性</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/*使用属性值添加内容，可以使用标准属性与自定义属性*/</span>
  <span class="token selector">a::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>www.baidu.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


