<template><div><h2 id="关键帧" tabindex="-1"><a class="header-anchor" href="#关键帧" aria-hidden="true">#</a> 关键帧</h2>
<p>使用<code v-pre>@keyframes</code> 规则配置动画中的各个帧</p>
<ul>
<li>from 表示起始点</li>
<li>to 表示终点</li>
<li>可以使用百分数如 20%动画运行到 20%时间时</li>
</ul>
<p>使用 <code v-pre>@keyframes</code> 定义了动画叫 <code v-pre>cssAnimations</code> 并配置了两个帧动作<code v-pre>from/to</code> ，然后在 div 元素中使用<code v-pre>animation-name</code> 引用了动画并使用<code v-pre>animation-duration</code>声明执行三秒</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> cssAnimations</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间点" tabindex="-1"><a class="header-anchor" href="#时间点" aria-hidden="true">#</a> 时间点</h3>
<p>帧动画需要定义在不同时间执行的动作，开始与结束可以使用 <code v-pre>form/to</code> 或 <code v-pre>0%/100%</code> 声明。</p>
<ul>
<li>必须添加百分号，25%是正确写法</li>
<li>时间点没有顺序要求，即 100%写在 25%前也可以</li>
<li>未设置<code v-pre>0%</code>与<code v-pre>100%</code> 时将使用元素原始状态</li>
</ul>
<h3 id="同时声明" tabindex="-1"><a class="header-anchor" href="#同时声明" aria-hidden="true">#</a> 同时声明</h3>
<p>时间点可以动画样式一样时可以一起声明，下面将 25%/75%背景一起声明</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> temp</span> <span class="token punctuation">{</span>
    <span class="token selector">25%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>300%<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">75%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 300%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">25%,
    75%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%,
    100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用动画" tabindex="-1"><a class="header-anchor" href="#使用动画" aria-hidden="true">#</a> 使用动画</h2>
<p>使用<code v-pre>animation-name</code> 规则可以在元素身上同时使用多个动画。</p>
<ul>
<li>使用多个动画时用逗号分隔</li>
<li>多个动画有相同属性时，后面动画的属性优先使用</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> scale<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画时间" tabindex="-1"><a class="header-anchor" href="#动画时间" aria-hidden="true">#</a> 动画时间</h2>
<p>使用 <code v-pre>animation-duration</code> 可以声明动画播放的时间，即把所有帧执行一遍所需要的时间。</p>
<ul>
<li>可以使用 m 秒，ms 毫秒时间单位</li>
<li>可为不同动画单独设置执行时间</li>
<li>如果动画数量大于时间数量，将重新从时间列表中计算</li>
</ul>
<h3 id="炫彩背景" tabindex="-1"><a class="header-anchor" href="#炫彩背景" aria-hidden="true">#</a> 炫彩背景</h3>
<p>声明三个动画，使用 <code v-pre>animation-duration</code>为每个动画设置不同执行的时间</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> scale<span class="token punctuation">,</span> colors<span class="token punctuation">,</span> rotate<span class="token punctuation">;</span>
    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">,</span> 5s<span class="token punctuation">,</span> 1s<span class="token punctuation">;</span>
    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> scale</span> <span class="token punctuation">{</span>
    <span class="token selector">from</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> colors</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #e67e22<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #16a085<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
    <span class="token selector">0%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">100%</span> <span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性重叠" tabindex="-1"><a class="header-anchor" href="#属性重叠" aria-hidden="true">#</a> 属性重叠</h2>
<p>如果多个帧动画设置了相同的属性，不同浏览器的对待方式略有不同。比如 chrome/edge 最新版本对动画的计算就有变化</p>
<h2 id="动画属性" tabindex="-1"><a class="header-anchor" href="#动画属性" aria-hidden="true">#</a> 动画属性</h2>
<p>不是所有 css 属性都有过渡效果，<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank" rel="noopener noreferrer">查看支持动画的 CSS 属性 (opens new window)<ExternalLinkIcon/></a>，一般来讲有中间值的属性都可以设置动画如宽度、透明度等</p>
<h2 id="重复动画" tabindex="-1"><a class="header-anchor" href="#重复动画" aria-hidden="true">#</a> 重复动画</h2>
<p>使用<code v-pre>animation-iteration-count</code> 规则设置动画重复执行次数，设置值为 <code v-pre>infinite</code> 表示无限循环执行。</p>
<ul>
<li>可同时设置元素的多个动画重复，使用逗号分隔</li>
<li>如果动画数量大于重复数量定义，后面的动画将重新计算重复</li>
</ul>
<h2 id="动画方向" tabindex="-1"><a class="header-anchor" href="#动画方向" aria-hidden="true">#</a> 动画方向</h2>
<p>使用 <code v-pre>animation-direction</code> 控制动画运行的方向。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>从 0%到 100%运行动画</td>
</tr>
<tr>
<td>reverse</td>
<td>从 100%到 0%运行动画</td>
</tr>
<tr>
<td>alternate</td>
<td>先从 0%到 100%，然后从 100%到 0%</td>
</tr>
<tr>
<td>alternate-reverse</td>
<td>先从 100%到 0%，然后从 0%到 100%</td>
</tr>
</tbody>
</table>
<h2 id="延迟动画" tabindex="-1"><a class="header-anchor" href="#延迟动画" aria-hidden="true">#</a> 延迟动画</h2>
<p>使用 <code v-pre>animation-delay</code> 规则定义动画等待多长时间后执行</p>
<h2 id="动画速率" tabindex="-1"><a class="header-anchor" href="#动画速率" aria-hidden="true">#</a> 动画速率</h2>
<h3 id="系统属性" tabindex="-1"><a class="header-anchor" href="#系统属性" aria-hidden="true">#</a> 系统属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">linear</td>
<td style="text-align:left">规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。</td>
</tr>
<tr>
<td style="text-align:left">ease</td>
<td style="text-align:left">开始慢，然后快，慢下来，结束时非常慢（cubic-bezier(0.25,0.1,0.25,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-in</td>
<td style="text-align:left">开始慢，结束快（等于 cubic-bezier(0.42,0,1,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-out</td>
<td style="text-align:left">开始快，结束慢（等于 cubic-bezier(0,0,0.58,1)）</td>
</tr>
<tr>
<td style="text-align:left">ease-in-out</td>
<td style="text-align:left">中间快，两边慢（等于 cubic-bezier(0.42,0,0.58,1)）</td>
</tr>
<tr>
<td style="text-align:left">cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)</td>
<td style="text-align:left">在 cubic-bezier 函数中定义自己的值</td>
</tr>
</tbody>
</table>
<ul>
<li>可以在帧中单独定义，将影响当前帧的速率</li>
</ul>
<h3 id="贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线" aria-hidden="true">#</a> 贝塞尔曲线</h3>
<p>需要设置四个值 <code v-pre>cubic-bezier(&lt;x1&gt;, &lt;y1&gt;, &lt;x2&gt;, &lt;y2&gt;)</code>，来控制曲线速度，可在 <a href="https://cubic-bezier.com/" target="_blank" rel="noopener noreferrer">https://cubic-bezier.com (opens new window)<ExternalLinkIcon/></a>网站在线体验效果</p>
<img :src="$withBase('/images/flex/05.png')" alt="foo">
<h2 id="步进速度" tabindex="-1"><a class="header-anchor" href="#步进速度" aria-hidden="true">#</a> 步进速度</h2>
<p>过渡使用阶梯化呈现，有点像现实生活中的机械舞，下面是把过渡分五步完成。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>steps(n,start)</td>
<td>设置 n 个时间点，第一时间点变化状态</td>
</tr>
<tr>
<td>steps(n,end)</td>
<td>设置 n 个时间点，第一时间点初始状态</td>
</tr>
<tr>
<td>step-start</td>
<td>等于 steps(1,start)，可以理解为从下一步开始</td>
</tr>
<tr>
<td>step-end</td>
<td>等于 steps(1,end)，可以理解为从当前步开始</td>
</tr>
</tbody>
</table>
<h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h3>
<p><code v-pre>steps(n,start)</code> 可以简单理解为从第二个开始，<code v-pre>steps(n,end)</code> 从第一个开始</p>
<h3 id="step-start" tabindex="-1"><a class="header-anchor" href="#step-start" aria-hidden="true">#</a> step-start</h3>
<p>step-start<code v-pre>效果等于</code>steps(1,start)<code v-pre> ,</code>step-end<code v-pre>效果等同于</code>steps(1,end)</p>
<h2 id="播放状态" tabindex="-1"><a class="header-anchor" href="#播放状态" aria-hidden="true">#</a> 播放状态</h2>
<p>使用 <code v-pre>animation-play-state</code> 可以控制动画的暂停与运行。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>paused</td>
<td>暂停</td>
</tr>
<tr>
<td>running</td>
<td>运行</td>
</tr>
</tbody>
</table>
<h2 id="填充模式" tabindex="-1"><a class="header-anchor" href="#填充模式" aria-hidden="true">#</a> 填充模式</h2>
<p><code v-pre>animation-fill-mode</code> 用于定义动画播放结束后的处理模式，是回到原来状态还是停止在动画结束状态。</p>
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
<td>需要等延迟结束，起始帧属性才应用</td>
</tr>
<tr>
<td>backwards</td>
<td>动画效果在起始帧，不等延迟结束</td>
</tr>
<tr>
<td>forwards</td>
<td>结束后停留动画的最后一帧</td>
</tr>
<tr>
<td>both</td>
<td>包含 backwards 与 forwards 规则，即动画效果在起始帧，不等延迟结束，并且在结束后停止在最后一帧</td>
</tr>
</tbody>
</table>
<h2 id="组合定义" tabindex="-1"><a class="header-anchor" href="#组合定义" aria-hidden="true">#</a> 组合定义</h2>
<p>和 CSS 中的其他属性一样，可以使用<code v-pre>animation</code>组合定义帧动画。animation 属性是一个简写属性，用于设置六个动画属性：</p>
<ul>
<li>animation-name</li>
<li>animation-duration</li>
<li>animation-timing-function</li>
<li>animation-delay</li>
<li>animation-iteration-count</li>
<li>animation-direction</li>
</ul>
<p>必须存在 <code v-pre>animation-duration</code>属性，否则过渡时间为 0 没有动画效果</p>
</div></template>


