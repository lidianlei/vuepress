<template><div><h1 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h1>
<img :src="$withBase('/images/boxModel.png')" alt="foo">
<h2 id="外边距" tabindex="-1"><a class="header-anchor" href="#外边距" aria-hidden="true">#</a> 外边距</h2>
<p>边距顺序依次为：上、右、下、左。</p>
<h3 id="居中设置" tabindex="-1"><a class="header-anchor" href="#居中设置" aria-hidden="true">#</a> 居中设置</h3>
<p><code v-pre>margin</code> 设置 auto 后，浏览器会自动</p>
<h3 id="边距合并" tabindex="-1"><a class="header-anchor" href="#边距合并" aria-hidden="true">#</a> 边距合并</h3>
<p>相邻元素的纵向外边距会进行合并</p>
<h2 id="内边距" tabindex="-1"><a class="header-anchor" href="#内边距" aria-hidden="true">#</a> 内边距</h2>
<p>内边距使用 <code v-pre>padding</code> 进行定义，使用语法与 <code v-pre>margin</code> 相似</p>
<h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> BOX-SIZING</h2>
<p>宽度与高度包括内边距与边框</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 10px #ddd<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>50px<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="边框设计" tabindex="-1"><a class="header-anchor" href="#边框设计" aria-hidden="true">#</a> 边框设计</h2>
<h3 id="样式选择" tabindex="-1"><a class="header-anchor" href="#样式选择" aria-hidden="true">#</a> 样式选择</h3>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">定义无边框。</td>
</tr>
<tr>
<td style="text-align:left">dotted</td>
<td style="text-align:left">定义点状边框。在大多数浏览器中呈现为实线。</td>
</tr>
<tr>
<td style="text-align:left">dashed</td>
<td style="text-align:left">定义虚线。在大多数浏览器中呈现为实线。</td>
</tr>
<tr>
<td style="text-align:left">solid</td>
<td style="text-align:left">定义实线。</td>
</tr>
<tr>
<td style="text-align:left">double</td>
<td style="text-align:left">定义双线。双线的宽度等于 border-width 的值。</td>
</tr>
<tr>
<td style="text-align:left">groove</td>
<td style="text-align:left">定义 3D 凹槽边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">ridge</td>
<td style="text-align:left">定义 3D 垄状边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">定义 3D inset 边框。其效果取决于 border-color 的值。</td>
</tr>
<tr>
<td style="text-align:left">outset</td>
<td style="text-align:left">定义 3D outset 边框。其效果取决于 border-color 的值。</td>
</tr>
</tbody>
</table>
<p>一次定义四个边</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*样式顺序为上、右、下、左，可以分别进行定义*/</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> outset solid dotted double<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单独设置一边样式</strong></p>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-style</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-style</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-style</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-style</td>
<td>左边</td>
</tr>
<tr>
<td>border-style</td>
<td>四边</td>
</tr>
</tbody>
</table>
<h3 id="边框宽度" tabindex="-1"><a class="header-anchor" href="#边框宽度" aria-hidden="true">#</a> 边框宽度</h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-width</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-width</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-width</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-width</td>
<td>左边</td>
</tr>
<tr>
<td>border-width</td>
<td>四边</td>
</tr>
</tbody>
</table>
<h3 id="边框颜色" tabindex="-1"><a class="header-anchor" href="#边框颜色" aria-hidden="true">#</a> 边框颜色</h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-color</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right-color</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom-color</td>
<td>下边</td>
</tr>
<tr>
<td>border-left-color</td>
<td>左边</td>
</tr>
<tr>
<td>border-color</td>
<td>四边</td>
</tr>
</tbody>
</table>
<h3 id="简写规则" tabindex="-1"><a class="header-anchor" href="#简写规则" aria-hidden="true">#</a> 简写规则</h3>
<table>
<thead>
<tr>
<th>规则</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top</td>
<td>顶边</td>
</tr>
<tr>
<td>border-right</td>
<td>右边</td>
</tr>
<tr>
<td>border-bottom</td>
<td>下边</td>
</tr>
<tr>
<td>border-left</td>
<td>左边</td>
</tr>
<tr>
<td>border</td>
<td>四边</td>
</tr>
</tbody>
</table>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*设置底部边框*/</span>
<span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 5px red<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行元素边框" tabindex="-1"><a class="header-anchor" href="#行元素边框" aria-hidden="true">#</a> 行元素边框</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">em</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="圆角边框" tabindex="-1"><a class="header-anchor" href="#圆角边框" aria-hidden="true">#</a> 圆角边框</h3>
<p>使用 <code v-pre>border-radius</code> 规则设置圆角，可以使用<code v-pre>px | %</code> 等单位。也支持四个边分别设置</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-left-radius</td>
<td>上左</td>
</tr>
<tr>
<td>border-top-right-radius</td>
<td>上右</td>
</tr>
<tr>
<td>border-bottom-left-radius</td>
<td>下载</td>
</tr>
<tr>
<td>border-bottom-right-radius</td>
<td>下右</td>
</tr>
</tbody>
</table>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token comment">/*行元素绘制圆角*/</span>
<span class="token selector">em</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="轮廓线" tabindex="-1"><a class="header-anchor" href="#轮廓线" aria-hidden="true">#</a> 轮廓线</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>元素在获取焦点时产生，并且轮廓线不占用空间。可以使用伪类 <code v-pre>:focus</code> 定义样式</p>
<ul>
<li>轮廓线显示在边框外面</li>
<li>轮廓线不影响页面布局</li>
</ul>
</div>
<h3 id="线条样式" tabindex="-1"><a class="header-anchor" href="#线条样式" aria-hidden="true">#</a> 线条样式</h3>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">默认。定义无轮廓。</td>
</tr>
<tr>
<td style="text-align:left">dotted</td>
<td style="text-align:left">定义点状的轮廓。</td>
</tr>
<tr>
<td style="text-align:left">dashed</td>
<td style="text-align:left">定义虚线轮廓。</td>
</tr>
<tr>
<td style="text-align:left">solid</td>
<td style="text-align:left">定义实线轮廓。</td>
</tr>
<tr>
<td style="text-align:left">double</td>
<td style="text-align:left">定义双线轮廓。双线的宽度等同于 outline-width 的值。</td>
</tr>
<tr>
<td style="text-align:left">groove</td>
<td style="text-align:left">定义 3D 凹槽轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">ridge</td>
<td style="text-align:left">定义 3D 凸槽轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">定义 3D 凹边轮廓。此效果取决于 outline-color 值。</td>
</tr>
<tr>
<td style="text-align:left">outset</td>
<td style="text-align:left">定义 3D 凸边轮廓。此效果取决于 outline-color 值。</td>
</tr>
</tbody>
</table>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">outline-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>
<span class="token comment">/*线宽设置*/</span>
<span class="token property">outline-width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token comment">/*线条颜色*/</span>
<span class="token property">outline-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token comment">/*组合定义*/</span>
<span class="token property">outline</span><span class="token punctuation">:</span> red solid 2px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单轮廓线" tabindex="-1"><a class="header-anchor" href="#表单轮廓线" aria-hidden="true">#</a> 表单轮廓线</h3>
<p>表单默认具有轮廓线，但有时并不好看，使用以下样式规则去除</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
    <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> DISPLAY</h2>
<h3 id="控制显示隐藏" tabindex="-1"><a class="header-anchor" href="#控制显示隐藏" aria-hidden="true">#</a> 控制显示隐藏</h3>
<p>使用 <code v-pre>display</code> 控制元素的显示机制</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>隐藏元素</td>
</tr>
<tr>
<td>block</td>
<td>显示为块元素</td>
</tr>
<tr>
<td>inline</td>
<td>显示为行元素，不能设置宽/高</td>
</tr>
<tr>
<td>inline-block</td>
<td>行级块元素，允许设置宽/高</td>
</tr>
</tbody>
</table>
<h2 id="visibility" tabindex="-1"><a class="header-anchor" href="#visibility" aria-hidden="true">#</a> Visibility</h2>
<p>控制元素的显示隐藏，在隐藏后空间位也保留。</p>
<h2 id="溢出控制" tabindex="-1"><a class="header-anchor" href="#溢出控制" aria-hidden="true">#</a> 溢出控制</h2>
<p><strong>overflow</strong></p>
<h3 id="隐藏控制" tabindex="-1"><a class="header-anchor" href="#隐藏控制" aria-hidden="true">#</a> 隐藏控制</h3>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>hidden</td>
<td>溢出内容隐藏</td>
</tr>
<tr>
<td>scroll</td>
<td>显示滚动条（有些浏览器会一直显示，有些在滚动时显示）</td>
</tr>
<tr>
<td>auto</td>
<td>根据内容自动处理滚动条</td>
</tr>
</tbody>
</table>
<h3 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出" aria-hidden="true">#</a> 文本溢出</h3>
<p><strong>单行文本溢出</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多行文本溢出控制</strong></p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尺寸定义" tabindex="-1"><a class="header-anchor" href="#尺寸定义" aria-hidden="true">#</a> 尺寸定义</h2>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>宽度</td>
</tr>
<tr>
<td>height</td>
<td>高度</td>
</tr>
<tr>
<td>min-width</td>
<td>最小宽度</td>
</tr>
<tr>
<td>min-height</td>
<td>最小高度</td>
</tr>
<tr>
<td>max-width</td>
<td>最大宽度</td>
</tr>
<tr>
<td>max-height</td>
<td>最大高度</td>
</tr>
<tr>
<td>fill-available</td>
<td>撑满可用的空间</td>
</tr>
<tr>
<td>fit-content</td>
<td>根据内容适应尺寸</td>
</tr>
</tbody>
</table>
<h3 id="min-max" tabindex="-1"><a class="header-anchor" href="#min-max" aria-hidden="true">#</a> min&amp;max</h3>
<p>正文中不希望图片太大造成溢出窗口，也不希望太小影响美观，使用以下代码可以做到约束</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> solid 2px #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div img</span> <span class="token punctuation">{</span>
    <span class="token property">min-width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fill-available" tabindex="-1"><a class="header-anchor" href="#fill-available" aria-hidden="true">#</a> fill-available</h3>
<p>在<code v-pre>chrome</code> 浏览器中使用前缀 <code v-pre>-webkit</code> 书写样式</p>
<h3 id="fit-content" tabindex="-1"><a class="header-anchor" href="#fit-content" aria-hidden="true">#</a> fit-content</h3>
<p>根据内容自动适应宽度，让元素居中显示的效果</p>
<h3 id="min-content" tabindex="-1"><a class="header-anchor" href="#min-content" aria-hidden="true">#</a> min-content</h3>
<p>使用<code v-pre>min-content</code> 将容器尺寸按最小元素宽度设置</p>
<h3 id="max-content" tabindex="-1"><a class="header-anchor" href="#max-content" aria-hidden="true">#</a> max-content</h3>
<p>容器尺寸按子元素最大宽度设置</p>
</div></template>


