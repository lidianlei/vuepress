<template><div><h2 id="viewport" tabindex="-1"><a class="header-anchor" href="#viewport" aria-hidden="true">#</a> viewport</h2>
<p>移动端浏览器将网页放置在虚拟的 viewport 中，不同手机分辨率对视口进行缩放即可全屏显示内容。不同浏览器定义的 viewport 尺寸不同</p>
<h3 id="视口概念" tabindex="-1"><a class="header-anchor" href="#视口概念" aria-hidden="true">#</a> 视口概念</h3>
<p>所以 viewport 也可以理解为屏幕有多少像素来显示内容，这和电脑端是不同的。</p>
<ul>
<li>电脑端是显示器的多大分辨率多少就用多少像素来显示</li>
<li>移动端是 viewport 分辨率多少就用多少像素来显示</li>
<li>viewport 是可以改变的，就像显示器的分辨率可以改变一样</li>
</ul>
<h3 id="查看尺寸" tabindex="-1"><a class="header-anchor" href="#查看尺寸" aria-hidden="true">#</a> 查看尺寸</h3>
<p>主流浏览器的默认 viewport 大小（因为浏览器间不统一，所以也没有必要关注下面的尺寸，只做为了解就行）</p>
<table>
<thead>
<tr>
<th>浏览器</th>
<th>尺寸</th>
</tr>
</thead>
<tbody>
<tr>
<td>Safari iPhone</td>
<td>980px</td>
</tr>
<tr>
<td>Opera</td>
<td>850px</td>
</tr>
<tr>
<td>Android WebKit</td>
<td>800px</td>
</tr>
<tr>
<td>IE</td>
<td>974px</td>
</tr>
</tbody>
</table>
<p>可以在控制台查看到 viewport 大小</p>
<h3 id="改变视口" tabindex="-1"><a class="header-anchor" href="#改变视口" aria-hidden="true">#</a> 改变视口</h3>
<p>使用<code v-pre>&lt;meta name=&quot;viewport&quot; content=&quot;width=2000px&quot; /&gt;</code>可以调整视口，这有点像设置相同尺寸桌面显示不同的分辨率</p>
<h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3>
<p>@media 是根据分辨率来响应式布局的，所以 viewport 尺寸的不同将影响媒体查询的使用</p>
<p>下面代码用于在分辨率小于 500px 时更改内容颜色，但是因为没有设置 viewport，而使用浏览器默认的视口，这会造成在手机上无法进行响应操作，因为 viewport 尺寸大于 500px</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面当我们设置好 viewport 后就可以进行响应处理了，下面是将 viewport 设置为 500px</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=500<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设备尺寸" tabindex="-1"><a class="header-anchor" href="#设备尺寸" aria-hidden="true">#</a> 设备尺寸</h3>
<p>像上面通过人为设置像素值，显示是不可取的。如果响应布局当然希望 viewport 与设备尺寸一至，可喜的是，系统为我们提供了<code v-pre>device-width</code>变量值用于识别设备宽度。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h3>
<p>用在 meta 标签上的属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>initial-scale=1</td>
<td>初始缩放比例</td>
</tr>
<tr>
<td>minimum-scale=.5</td>
<td>允许用户最小缩放比例</td>
</tr>
<tr>
<td><em>maximum-scale</em>=2.5</td>
<td>允许用户最大缩放比例</td>
</tr>
<tr>
<td>user-scalable=yes</td>
<td>是否允许用户绽放</td>
</tr>
</tbody>
</table>
<blockquote>
<p>mac 用户在 chrome 中使用 option+shift+鼠标按住移动进行缩放</p>
</blockquote>
<h3 id="js-延迟" tabindex="-1"><a class="header-anchor" href="#js-延迟" aria-hidden="true">#</a> JS 延迟</h3>
<p>设置 <code v-pre>user-scalable=no</code> 时可以<code v-pre> js</code> 解决 <code v-pre>300 </code>延迟的问题，你也可以理解为当设置 <code v-pre>user-scalable=yes </code>时，系统要识别两只手指，所以要有个宽容时间</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0,user-scalable=yes<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rem-em" tabindex="-1"><a class="header-anchor" href="#rem-em" aria-hidden="true">#</a> rem/em</h2>
<p>em 理解为继承（相对）单位，它需要一个参考的继承属性</p>
<h3 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h3>
<p>字体大小是可以继承的</p>
<ul>
<li>span 没有设置字体大小，将继续父级 article 标签定义的大小 15px</li>
<li>strong 定义了 2em 字体大小，因为使用了 em 单位即是父级 15px X 2=30px</li>
</ul>
<blockquote>
<p>可以通过 edge 或 chrome 浏览器调试工具的已计算标签查看</p>
</blockquote>
<h3 id="多级继承" tabindex="-1"><a class="header-anchor" href="#多级继承" aria-hidden="true">#</a> 多级继承</h3>
<p>下面代码是多层次的嵌套，如果使用 em 单位定义 font-size 会向上一直查找定义了 font-size 的父级来进行计算。直到找到 html 标签为止。</p>
<p>所以下面的 strong 定义的 <code v-pre>2em</code> 计算结果依然是 <code v-pre>30px</code>即 <code v-pre>article </code>标签的 font-size:15px 乘以 2。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">strong</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="padding-margin" tabindex="-1"><a class="header-anchor" href="#padding-margin" aria-hidden="true">#</a> padding/margin</h3>
<p><code v-pre>font-size</code> 本身是可以继承的，所以 <code v-pre>em </code>参考父级元素定义的 <code v-pre>font-size</code>。但 <code v-pre>padding/margin</code> 在 CSS 中不会继承父级定义的<code v-pre>padding/margin</code></p>
<p>如果 <code v-pre>padding/margin</code> 使用 <code v-pre>em</code>单位将参考本元素的<code v-pre>font-size</code></p>
<p>下面示例中最终 <code v-pre>strong</code>标签的 <code v-pre>padding</code>与 <code v-pre>margin</code>都是 <code v-pre>60px</code>，因为定义了 <code v-pre>2em</code>所以最终结果为当前标签的 font-size*2</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">article</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">strong</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>css/span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">></span></span>vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h3>
<p>rem 本向也有 em 的特性即参考继承，只不过它只参考根元素（root）即 html 标签定义的 font-size。</p>
<ul>
<li>为 <code v-pre>html</code>标签定义了 <code v-pre>font-size:30px</code>，页面中使用 <code v-pre>rem</code>单位的元素将 <code v-pre>30px</code> 为参考，即 <code v-pre>1rem=30px</code></li>
<li><code v-pre>span</code>标签使用了<code v-pre>font-size:2em</code>，会参考父级 <code v-pre>article</code> 定义的 <code v-pre>font-size</code>，最后计算结果为 <code v-pre>font-size:30px</code></li>
<li><code v-pre>strong</code>标签定义了<code v-pre>font-size:2rem</code>，会参考<code v-pre>html </code>标签的<code v-pre>font-size</code>，最后计算结果为<code v-pre>60px</code></li>
<li><code v-pre>strong</code>标签定义了 <code v-pre>padding:2rem</code>，计算结果也是<code v-pre>60px</code></li>
<li><code v-pre>strong</code>标签定义了 <code v-pre>margin:2em</code>，将会参考本身元素的<code v-pre>font-size</code>，上面已经说明<code v-pre>strong 的 font-size</code>为 60px，所以最终<code v-pre>margin </code>结果为<code v-pre>120px</code></li>
</ul>
<h3 id="使用建议" tabindex="-1"><a class="header-anchor" href="#使用建议" aria-hidden="true">#</a> 使用建议</h3>
<p><code v-pre>em</code>与<code v-pre>rem</code>都是不错的响应单位，根据需要进行选择。<code v-pre>em</code>具有继承特性，<code v-pre>rem</code>的参考元素是唯一 HTML，所以<code v-pre>rem</code>操作简单。<code v-pre>em</code>继承关系会相对复杂。</p>
<p>布局上的 <code v-pre>margin/paddin</code> 使用 <code v-pre>rem</code>是不错的选择，字体大小等使用<code v-pre>em </code>与<code v-pre>rem</code>都可以</p>
<h2 id="尺寸响应" tabindex="-1"><a class="header-anchor" href="#尺寸响应" aria-hidden="true">#</a> 尺寸响应</h2>
<h3 id="自动响应" tabindex="-1"><a class="header-anchor" href="#自动响应" aria-hidden="true">#</a> 自动响应</h3>
<p>实际操作中不同设备只能取宽或高一个尺寸为响应处理，一般情况下我们取宽度响应，高度自动处理。小尺寸时高度产生垂直滚动条，这并不影响什么</p>
<p><strong>计算公式</strong></p>
<p>使用<code v-pre>rem</code>单位来处理响应，因为改变<code v-pre>rem</code>单位会影响所有使用<code v-pre>rem</code>的元素，这确实非常的方便。</p>
<ul>
<li><code v-pre>rem</code>是在根元素中定义的 font-size</li>
<li><code v-pre>rem</code>用来在多个设备响应处理时使用</li>
<li><code v-pre>html</code>元素也可以使用:root 选择器选择</li>
</ul>
<p>设计稿为<code v-pre>375px</code>宽，下面公式表示<code v-pre>1px</code>所占的屏幕尺寸宽度，有以下几点需要说明</p>
<ul>
<li><code v-pre>100vw</code>表示<code v-pre>100%</code>视口宽度</li>
<li>因为使用了<code v-pre>vw</code>宽度系统会根据不同设备自动计算<code v-pre>rem</code></li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw / 375<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


