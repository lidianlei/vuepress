<template><div><h1 id="栅格" tabindex="-1"><a class="header-anchor" href="#栅格" aria-hidden="true">#</a> 栅格</h1>
<h2 id="容器声明" tabindex="-1"><a class="header-anchor" href="#容器声明" aria-hidden="true">#</a> 容器声明</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*块级*/</span>
<span class="token property">display</span><span class="token punctuation">:</span>grid<span class="token punctuation">;</span> 
<span class="token comment">/*行级容器*/</span>
<span class="token property">display</span><span class="token punctuation">:</span>inline-grid<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划分行列" tabindex="-1"><a class="header-anchor" href="#划分行列" aria-hidden="true">#</a> 划分行列</h2>
<p>栅格有点类似表格，也 <code v-pre>行</code> 和 <code v-pre>列</code>。使用 <code v-pre>grid-template-columns</code> 规则可划分列数，使用 <code v-pre>grid-template-rows</code> 划分行数</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*划分为列数*/</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span>
<span class="token comment">/*划分行数*/</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="固定宽度" tabindex="-1"><a class="header-anchor" href="#固定宽度" aria-hidden="true">#</a> 固定宽度</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 5px silver<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 100px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="百分比" tabindex="-1"><a class="header-anchor" href="#百分比" aria-hidden="true">#</a> 百分比</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 25% 25% 25% 25%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重复设置" tabindex="-1"><a class="header-anchor" href="#重复设置" aria-hidden="true">#</a> 重复设置</h3>
<p>使用 <code v-pre>repeat</code> 统一设置值，第一个参数为重复数量，第二个参数是重复值</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*可以设置多个值来定义重复*/</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 100px 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动填充" tabindex="-1"><a class="header-anchor" href="#自动填充" aria-hidden="true">#</a> 自动填充</h3>
<p>自动填充是根据容器尺寸，自动设置元素尺寸</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比例划分" tabindex="-1"><a class="header-anchor" href="#比例划分" aria-hidden="true">#</a> 比例划分</h3>
<p>使用 <code v-pre>fr</code> 单位设置元素在空间中所占的比例，下面按<code v-pre>1份-2份</code> 分成两组共四列</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr 2fr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重复定义" tabindex="-1"><a class="header-anchor" href="#重复定义" aria-hidden="true">#</a> 重复定义</h4>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr 2fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动空间" tabindex="-1"><a class="header-anchor" href="#自动空间" aria-hidden="true">#</a> 自动空间</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 20vw auto 30vw<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合定义" tabindex="-1"><a class="header-anchor" href="#组合定义" aria-hidden="true">#</a> 组合定义</h3>
<p><code v-pre>grid-tempalte</code> 是 <code v-pre>grid-template-rows</code>、<code v-pre>grid-template-columns</code>、<code v-pre>grid-template-areas</code> 的三个属性的简写</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span> / <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="minmax" tabindex="-1"><a class="header-anchor" href="#minmax" aria-hidden="true">#</a> minmax</h3>
<p>使用 <code v-pre>minmax</code> 方法可以设置取值范围,列在行高在 <code v-pre>最小100px ~ 最大1fr</code> 间取值</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="间距定义" tabindex="-1"><a class="header-anchor" href="#间距定义" aria-hidden="true">#</a> 间距定义</h2>
<h3 id="行间距" tabindex="-1"><a class="header-anchor" href="#行间距" aria-hidden="true">#</a> 行间距</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*使用 `row-gap` 设置行间距*/</span>
<span class="token property">row-gap</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列间距" tabindex="-1"><a class="header-anchor" href="#列间距" aria-hidden="true">#</a> 列间距</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*使用 column-gap 定义列间距*/</span>
<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合定义-1" tabindex="-1"><a class="header-anchor" href="#组合定义-1" aria-hidden="true">#</a> 组合定义</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*使用 `gap` 规则可以一次定义行、列间距，如果间距一样可以只设置一个值*/</span>
<span class="token property">gap</span><span class="token punctuation">:</span> 20px 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元素定位" tabindex="-1"><a class="header-anchor" href="#元素定位" aria-hidden="true">#</a> 元素定位</h2>
<table>
<thead>
<tr>
<th>样式属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>grid-row-start</td>
<td>行开始栅格线</td>
</tr>
<tr>
<td>grid-row-end</td>
<td>行结束栅格线</td>
</tr>
<tr>
<td>grid-column-start</td>
<td>列开始栅格线</td>
</tr>
<tr>
<td>grid-column-end</td>
<td>列结束栅格线</td>
</tr>
</tbody>
</table>
<p>属性值</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Line</td>
<td>栅格络</td>
</tr>
<tr>
<td>span 数值</td>
<td>栅格包含的栅格数量</td>
</tr>
<tr>
<td>span 区域名称</td>
<td>栅格包含到指定的区域名称</td>
</tr>
<tr>
<td>auto</td>
<td>自动设置，默认为一个网格宽度和高度</td>
</tr>
</tbody>
</table>
<h3 id="根据偏移量" tabindex="-1"><a class="header-anchor" href="#根据偏移量" aria-hidden="true">#</a> 根据偏移量</h3>
<p>使用 <code v-pre>span</code> 可以设置包含栅格的数量或包含到的区域名称</p>
<table>
<thead>
<tr>
<th>示例</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>grid-row-end:2</td>
<td>向下包含 2 行</td>
</tr>
<tr>
<td>grid-row-start:2</td>
<td>向上包含 2 行</td>
</tr>
<tr>
<td>grid-column-end:2</td>
<td>向右包含 2 行</td>
</tr>
<tr>
<td>grid-column-start:2</td>
<td>向左包含 2 行</td>
</tr>
</tbody>
</table>
<h3 id="简写模式" tabindex="-1"><a class="header-anchor" href="#简写模式" aria-hidden="true">#</a> 简写模式</h3>
<p>可以使用 <code v-pre>grid-row</code> 设置行开始栅格线，使用 <code v-pre>grid-column</code> 设置结束栅格线</p>
<p>上例中的居中对齐元素，可以使用以下简写的方式声明（推荐）</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">grid-row</span><span class="token punctuation">:</span> 2/4<span class="token punctuation">;</span>
<span class="token property">grid-column</span><span class="token punctuation">:</span> 2/4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid-area" tabindex="-1"><a class="header-anchor" href="#grid-area" aria-hidden="true">#</a> grid-area</h3>
<p><code v-pre>grid-area</code>更加简洁是同时对 <code v-pre>grid-row</code> 与 <code v-pre>grid-column</code> 属性的组合声明</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>grid-row-start/grid-column-start/grid-row-end/grid-column-end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="未完待续" tabindex="-1"><a class="header-anchor" href="#未完待续" aria-hidden="true">#</a> 未完待续！！！</h2>
</div></template>


