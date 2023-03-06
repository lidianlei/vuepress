<template><div><h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h1>
<h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<p>获取元素</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，创建 context 对象</p>
<p><em>getContext(&quot;2d&quot;) 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法</em></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"red"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>fillRect(<em>x,y,width,height</em>) 方法定义了矩形当前的填充方式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">175</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="颜色、样式和阴影" tabindex="-1"><a class="header-anchor" href="#颜色、样式和阴影" aria-hidden="true">#</a> 颜色、样式和阴影</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-fillstyle.html" target="_blank" rel="noopener noreferrer">fillStyle<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回用于填充绘画的颜色、渐变或模式</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-strokestyle.html" target="_blank" rel="noopener noreferrer">strokeStyle<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回用于笔触的颜色、渐变或模式</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-shadowcolor.html" target="_blank" rel="noopener noreferrer">shadowColor<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回用于阴影的颜色</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-shadowblur.html" target="_blank" rel="noopener noreferrer">shadowBlur<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回用于阴影的模糊级别</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-shadowoffsetx.html" target="_blank" rel="noopener noreferrer">shadowOffsetX<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回阴影与形状的水平距离</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-shadowoffsety.html" target="_blank" rel="noopener noreferrer">shadowOffsetY<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回阴影与形状的垂直距离</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-createlineargradient.html" target="_blank" rel="noopener noreferrer">createLinearGradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建线性渐变（用在画布内容上）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-createpattern.html" target="_blank" rel="noopener noreferrer">createPattern()<ExternalLinkIcon/></a></td>
<td style="text-align:left">在指定的方向上重复指定的元素</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-createradialgradient.html" target="_blank" rel="noopener noreferrer">createRadialGradient()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建放射状/环形的渐变（用在画布内容上）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-addcolorstop.html" target="_blank" rel="noopener noreferrer">addColorStop()<ExternalLinkIcon/></a></td>
<td style="text-align:left">规定渐变对象中的颜色和停止位置</td>
</tr>
</tbody>
</table>
<h3 id="线条样式" tabindex="-1"><a class="header-anchor" href="#线条样式" aria-hidden="true">#</a> 线条样式</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-linecap.html" target="_blank" rel="noopener noreferrer">lineCap<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回线条的结束端点样式</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-linejoin.html" target="_blank" rel="noopener noreferrer">lineJoin<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回两条线相交时，所创建的拐角类型。</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-linewidth.html" target="_blank" rel="noopener noreferrer">lineWidth<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回当前的线条宽度</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-miterlimit.html" target="_blank" rel="noopener noreferrer">miterLimit<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回最大斜接长度</td>
</tr>
</tbody>
</table>
<h3 id="矩形" tabindex="-1"><a class="header-anchor" href="#矩形" aria-hidden="true">#</a> 矩形</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-rect.html" target="_blank" rel="noopener noreferrer">rect()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建矩形</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-fillrect.html" target="_blank" rel="noopener noreferrer">fillRect()<ExternalLinkIcon/></a></td>
<td style="text-align:left">绘制&quot;被填充&quot;的矩形</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-strokerect.html" target="_blank" rel="noopener noreferrer">strokeRect()<ExternalLinkIcon/></a></td>
<td style="text-align:left">绘制矩形（无填充）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-clearrect.html" target="_blank" rel="noopener noreferrer">clearRect()<ExternalLinkIcon/></a></td>
<td style="text-align:left">在给定的矩形内清除指定的像素</td>
</tr>
</tbody>
</table>
<h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-fill.html" target="_blank" rel="noopener noreferrer">fill()<ExternalLinkIcon/></a></td>
<td style="text-align:left">填充当前绘图（路径）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-stroke.html" target="_blank" rel="noopener noreferrer">stroke()<ExternalLinkIcon/></a></td>
<td style="text-align:left">绘制已定义的路径</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-beginpath.html" target="_blank" rel="noopener noreferrer">beginPath()<ExternalLinkIcon/></a></td>
<td style="text-align:left">起始一条路径，或重置当前路径</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-moveto.html" target="_blank" rel="noopener noreferrer">moveTo()<ExternalLinkIcon/></a></td>
<td style="text-align:left">把路径移动到画布中的指定点，不创建线条</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-closepath.html" target="_blank" rel="noopener noreferrer">closePath()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建从当前点回到起始点的路径</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-lineto.html" target="_blank" rel="noopener noreferrer">lineTo()<ExternalLinkIcon/></a></td>
<td style="text-align:left">添加一个新点，然后在画布中创建从该点到最后指定点的线条</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-clip.html" target="_blank" rel="noopener noreferrer">clip()<ExternalLinkIcon/></a></td>
<td style="text-align:left">从原始画布剪切任意形状和尺寸的区域</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-quadraticcurveto.html" target="_blank" rel="noopener noreferrer">quadraticCurveTo()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建二次贝塞尔曲线</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-beziercurveto.html" target="_blank" rel="noopener noreferrer">bezierCurveTo()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建三次贝塞尔曲线</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-arc.html" target="_blank" rel="noopener noreferrer">arc()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建弧/曲线（用于创建圆形或部分圆）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-arcto.html" target="_blank" rel="noopener noreferrer">arcTo()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建两切线之间的弧/曲线</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-ispointinpath.html" target="_blank" rel="noopener noreferrer">isPointInPath()<ExternalLinkIcon/></a></td>
<td style="text-align:left">如果指定的点位于当前路径中，则返回 true，否则返回 false</td>
</tr>
</tbody>
</table>
<h3 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-scale.html" target="_blank" rel="noopener noreferrer">scale()<ExternalLinkIcon/></a></td>
<td style="text-align:left">缩放当前绘图至更大或更小</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-rotate.html" target="_blank" rel="noopener noreferrer">rotate()<ExternalLinkIcon/></a></td>
<td style="text-align:left">旋转当前绘图</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-translate.html" target="_blank" rel="noopener noreferrer">translate()<ExternalLinkIcon/></a></td>
<td style="text-align:left">重新映射画布上的 (0,0) 位置</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-transform.html" target="_blank" rel="noopener noreferrer">transform()<ExternalLinkIcon/></a></td>
<td style="text-align:left">替换绘图的当前转换矩阵</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-settransform.html" target="_blank" rel="noopener noreferrer">setTransform()<ExternalLinkIcon/></a></td>
<td style="text-align:left">将当前转换重置为单位矩阵。然后运行 transform()</td>
</tr>
</tbody>
</table>
<h3 id="文本" tabindex="-1"><a class="header-anchor" href="#文本" aria-hidden="true">#</a> 文本</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-font.html" target="_blank" rel="noopener noreferrer">font<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回文本内容的当前字体属性</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-textalign.html" target="_blank" rel="noopener noreferrer">textAlign<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回文本内容的当前对齐方式</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-textbaseline.html" target="_blank" rel="noopener noreferrer">textBaseline<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回在绘制文本时使用的当前文本基线</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-filltext.html" target="_blank" rel="noopener noreferrer">fillText()<ExternalLinkIcon/></a></td>
<td style="text-align:left">在画布上绘制&quot;被填充的&quot;文本</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-stroketext.html" target="_blank" rel="noopener noreferrer">strokeText()<ExternalLinkIcon/></a></td>
<td style="text-align:left">在画布上绘制文本（无填充）</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-measuretext.html" target="_blank" rel="noopener noreferrer">measureText()<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回包含指定文本宽度的对象</td>
</tr>
</tbody>
</table>
<h3 id="图像绘制" tabindex="-1"><a class="header-anchor" href="#图像绘制" aria-hidden="true">#</a> 图像绘制</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-drawimage.html" target="_blank" rel="noopener noreferrer">drawImage()<ExternalLinkIcon/></a></td>
<td style="text-align:left">向画布上绘制图像、画布或视频</td>
</tr>
</tbody>
</table>
<h3 id="像素操作" tabindex="-1"><a class="header-anchor" href="#像素操作" aria-hidden="true">#</a> 像素操作</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-imagedata-width.html" target="_blank" rel="noopener noreferrer">width<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回 ImageData 对象的宽度</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-imagedata-height.html" target="_blank" rel="noopener noreferrer">height<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回 ImageData 对象的高度</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-imagedata-data.html" target="_blank" rel="noopener noreferrer">data<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回一个对象，其包含指定的 ImageData 对象的图像数据</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-createimagedata.html" target="_blank" rel="noopener noreferrer">createImageData()<ExternalLinkIcon/></a></td>
<td style="text-align:left">创建新的、空白的 ImageData 对象</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-getimagedata.html" target="_blank" rel="noopener noreferrer">getImageData()<ExternalLinkIcon/></a></td>
<td style="text-align:left">返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-putimagedata.html" target="_blank" rel="noopener noreferrer">putImageData()<ExternalLinkIcon/></a></td>
<td style="text-align:left">把图像数据（从指定的 ImageData 对象）放回画布上</td>
</tr>
</tbody>
</table>
<h3 id="合成" tabindex="-1"><a class="header-anchor" href="#合成" aria-hidden="true">#</a> 合成</h3>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-globalalpha.html" target="_blank" rel="noopener noreferrer">globalAlpha<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回绘图的当前 alpha 或透明值</td>
</tr>
<tr>
<td style="text-align:left"><a href="https://www.runoob.com/tags/canvas-globalcompositeoperation.html" target="_blank" rel="noopener noreferrer">globalCompositeOperation<ExternalLinkIcon/></a></td>
<td style="text-align:left">设置或返回新图像如何绘制到已有的图像上</td>
</tr>
</tbody>
</table>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">save()</td>
<td style="text-align:left">保存当前环境的状态</td>
</tr>
<tr>
<td style="text-align:left">restore()</td>
<td style="text-align:left">返回之前保存过的路径状态和属性</td>
</tr>
<tr>
<td style="text-align:left">createEvent()</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">getContext()</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">toDataURL()</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="项目模板" tabindex="-1"><a class="header-anchor" href="#项目模板" aria-hidden="true">#</a> 项目模板</h2>
<p>因为使用到了 Typescript，所以我们使用 vite 创建 typescript 项目，并选择使用 <code v-pre>vanilla</code> 模板来开发</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ yarn create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目安装执行结果</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>执行结果
✔ Project name: 
✔ Select a framework: › vanilla
✔ Select a variant: › vanilla-ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录结构</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>├── images				 		//图片文件
│   └── p2.jpeg
├── index.html				//项目模板文件
├── package.json			//项目配置文件
├── src
│   ├── main.ts				//项目主文件，我们在这里编码
│   ├── style.css			//公共样式
│   └── vite-env.d.ts	//TS类型声明文件
├── tsconfig.json			//TS配置文件
└── yarn.lock					//扩展包版本锁定文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="矩形绘制" tabindex="-1"><a class="header-anchor" href="#矩形绘制" aria-hidden="true">#</a> 矩形绘制</h2>
<p>使用 strokeRect 方法绘制边框矩形</p>
<h3 id="实心矩形-fillrect" tabindex="-1"><a class="header-anchor" href="#实心矩形-fillrect" aria-hidden="true">#</a> 实心矩形 fillRect</h3>
<p>使用<code v-pre>fillRect</code>方法可以绘制实心矩形，下面是 fillRect 方法的参数说明</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">x</td>
<td style="text-align:left">矩形左上角的 x 坐标</td>
</tr>
<tr>
<td style="text-align:left">y</td>
<td style="text-align:left">矩形左上角的 y 坐标</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">矩形的宽度，以像素计</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">矩形的高度，以像素计</td>
</tr>
</tbody>
</table>
<p>纯色填充画布</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#16a085'</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空心矩形-strokerect" tabindex="-1"><a class="header-anchor" href="#空心矩形-strokerect" aria-hidden="true">#</a> 空心矩形 strokeRect</h3>
<p>使用<code v-pre>strokeRect</code>方法可以绘制空心矩形</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token comment">//画布对象</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//定义填充颜色</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'#16a085'</span><span class="token punctuation">;</span>
<span class="token comment">//线条宽度</span>
ctx<span class="token punctuation">.</span>lineWidth<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">;</span>
<span class="token comment">//边角类型： bevel 斜角  round圆角  miter 尖角</span>
ctx<span class="token punctuation">.</span>lineJoin<span class="token operator">=</span><span class="token string">"round"</span>
<span class="token comment">//绘制矩形边框</span>
ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="圆形绘制" tabindex="-1"><a class="header-anchor" href="#圆形绘制" aria-hidden="true">#</a> 圆形绘制</h2>
<h3 id="arc" tabindex="-1"><a class="header-anchor" href="#arc" aria-hidden="true">#</a> arc</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>圆的中心的 x 坐标。</td>
</tr>
<tr>
<td><em>y</em></td>
<td>圆的中心的 y 坐标。</td>
</tr>
<tr>
<td><em>r</em></td>
<td>圆的半径。</td>
</tr>
<tr>
<td><em>sAngle</em></td>
<td>起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。</td>
</tr>
<tr>
<td><em>eAngle</em></td>
<td>结束角，以弧度计。</td>
</tr>
<tr>
<td><em>counterclockwise</em></td>
<td>可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针</td>
</tr>
</tbody>
</table>
<h3 id="绘制空心圆" tabindex="-1"><a class="header-anchor" href="#绘制空心圆" aria-hidden="true">#</a> 绘制空心圆</h3>
<p><strong>beginPath() 方法开始一条路径，或重置当前的路径</strong></p>
<p><strong>stroke()绘制已定义的路径</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token comment">//画布对象</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//填充画布颜色</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>lineWidth<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绘制实心圆" tabindex="-1"><a class="header-anchor" href="#绘制实心圆" aria-hidden="true">#</a> 绘制实心圆</h3>
<p><strong>fill() 填充当前绘图（路径）</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'#canvas'</span><span class="token punctuation">)</span><span class="token operator">!</span>
<span class="token comment">//画布对象</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//填充画布颜色</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle<span class="token operator">=</span><span class="token string">"f1c40f"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>lineWidth<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token operator">*</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点绘制" tabindex="-1"><a class="header-anchor" href="#节点绘制" aria-hidden="true">#</a> 节点绘制</h2>
<ul>
<li><code v-pre>beginPath()</code>重置绘制路径</li>
<li><code v-pre>lineTo()</code>开始绘制线条</li>
<li><code v-pre>moveTo()</code>把路径移动到画布中的指定点，但不会创建线条（<code v-pre>lineTo()</code>方法绘制线条）</li>
<li><code v-pre>closePath()</code>闭合线条绘制，即当前点链连接到线条开始绘制点</li>
<li><code v-pre>lineWidth</code>线条宽度</li>
<li><code v-pre>storkeStyle</code>线条的样式，可以是颜色、渐变</li>
<li><code v-pre>stroke()</code>根据上面方法定义的节点绘制处线条</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//填充画布颜色</span>
ctx<span class="token punctuation">.</span>fillStyle<span class="token operator">=</span><span class="token string">"red"</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>el<span class="token punctuation">.</span>width<span class="token punctuation">,</span>el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
<span class="token comment">//开始画线</span>
ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//移动起始点</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">//下一个节点</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment">//下一个节点</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment">//闭合节点</span>
ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//线宽</span>
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">//线颜色</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"f1c40f"</span>
<span class="token comment">//画线</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2>
<p>使用<code v-pre>canvas</code>的<code v-pre>createLinearGradient()</code>方法可以创建线性的渐变对象，用于实现线性渐变效果</p>
<h3 id="createlineargradient" tabindex="-1"><a class="header-anchor" href="#createlineargradient" aria-hidden="true">#</a> createLinearGradient</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>x0</td>
<td>渐变开始点的<code v-pre>X</code>坐标</td>
</tr>
<tr>
<td>y0</td>
<td>渐变开始点的<code v-pre>Y</code>坐标</td>
</tr>
<tr>
<td>x1</td>
<td>渐变结束点的<code v-pre>X</code>坐标</td>
</tr>
<tr>
<td>y1</td>
<td>渐变结束点的<code v-pre>Y</code>坐标</td>
</tr>
</tbody>
</table>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//定义渐变的开始与结束坐标</span>
<span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//当以渐变位置与颜色，参数一为位置从0~1之间，参数二为即变颜色</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渐变填充</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
<span class="token comment">//设置线的宽度</span>
ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token comment">//绘制矩形</span>
ctx<span class="token punctuation">.</span><span class="token function">strokeRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渐变填充" tabindex="-1"><a class="header-anchor" href="#渐变填充" aria-hidden="true">#</a> 渐变填充</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//定义渐变的开始与结束坐标</span>
<span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//定义渐变位置与颜色参数一为从0~1之间，参数二为即变颜色</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span>
<span class="token comment">//定义填充颜色</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient
<span class="token comment">//绘制矩形</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清空区域" tabindex="-1"><a class="header-anchor" href="#清空区域" aria-hidden="true">#</a> 清空区域</h2>
<p><strong><code v-pre>clearRect</code>在给定的矩形内清除指定的像素</strong></p>
<p>将红色画布上清除一块区域，清除后的内容是透明的</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"skyblue"</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="填充文字" tabindex="-1"><a class="header-anchor" href="#填充文字" aria-hidden="true">#</a> 填充文字</h2>
<p><strong>使用<code v-pre>canvas</code>的 <code v-pre>fillText</code>方法绘制填充文字</strong></p>
<h3 id="filltext" tabindex="-1"><a class="header-anchor" href="#filltext" aria-hidden="true">#</a> fillText</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>text</td>
<td>规定在画布上输出的文本</td>
</tr>
<tr>
<td>x</td>
<td>开始绘制文本的<code v-pre>X</code>坐标位置（相对于画布）</td>
</tr>
<tr>
<td>y</td>
<td>开始绘制文本的<code v-pre>Y</code>坐标（相对于画布）</td>
</tr>
<tr>
<td>maxWidth</td>
<td>可选，允许的最大文本宽度，以像素计算</td>
</tr>
</tbody>
</table>
<h3 id="textbaseline" tabindex="-1"><a class="header-anchor" href="#textbaseline" aria-hidden="true">#</a> textBaseline</h3>
<p><strong><code v-pre>textBaseline</code>用于定义文字基线</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>alphabetic</td>
<td>默认，文本基线是普通的字母基线</td>
</tr>
<tr>
<td>top</td>
<td>文本基线是<code v-pre>em</code>方框的顶端</td>
</tr>
<tr>
<td>hanging</td>
<td>文本基线是悬挂基线</td>
</tr>
<tr>
<td>middle</td>
<td>文本基线是<code v-pre>em</code>方框的正中</td>
</tr>
<tr>
<td>ideographic</td>
<td>文本基线是表意基线</td>
</tr>
<tr>
<td>bottom</td>
<td>文本基线是<code v-pre>em</code>方框的低端</td>
</tr>
</tbody>
</table>
<h3 id="textalign" tabindex="-1"><a class="header-anchor" href="#textalign" aria-hidden="true">#</a> textAlign</h3>
<p><strong><code v-pre>textAlign</code>用于文本的对齐方式的属性</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>文本左对齐</td>
</tr>
<tr>
<td>right</td>
<td>文本右对齐</td>
</tr>
<tr>
<td>center</td>
<td>文本居中对齐</td>
</tr>
<tr>
<td>start</td>
<td>文本对齐节点开始的地方（左对齐指本地从左向右，右对齐指本地从右向左）</td>
</tr>
<tr>
<td>end</td>
<td>文本对齐界线结束的地方 （左对齐指本地从左向右，右对齐指本地从右向左）</td>
</tr>
</tbody>
</table>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//填充样式</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'red'</span>
<span class="token comment">//文字大小与字体设置</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'30px CascadiaMono'</span>
<span class="token comment">//定义文字基线</span>
ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">'top'</span>
<span class="token comment">//文字居中</span>
ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">'left'</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="激变文字" tabindex="-1"><a class="header-anchor" href="#激变文字" aria-hidden="true">#</a> 激变文字</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">// 定义渐变的开始与结束坐标</span>
<span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 定义渐变位置与颜色，参数一为位置是从 0～1 之间，参数二为激变颜色</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'#1abc9c'</span><span class="token punctuation">)</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">)</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">)</span>
<span class="token comment">//渐变填充</span>
ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
<span class="token comment">//文字大小与字体设置</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">'30px CascadiaMono'</span>
ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span><span class="token string">"TYPESCRIPT"</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">250</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片填充" tabindex="-1"><a class="header-anchor" href="#图片填充" aria-hidden="true">#</a> 图片填充</h2>
<p><strong>createPattern() 在指定的方向上重复指定的元素</strong></p>
<h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>image</td>
<td>规定要使用的图片、画布或视频元素</td>
</tr>
<tr>
<td>repeat</td>
<td>默认，该模式在水平和垂直向重复</td>
</tr>
<tr>
<td>repeat-x</td>
<td>该模式只在水平方向重复</td>
</tr>
<tr>
<td>repeat-y</td>
<td>该模式只在垂直方向重复</td>
</tr>
<tr>
<td>no-repeat</td>
<td>该模式指显示一次（不重复）</td>
</tr>
</tbody>
</table>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//创建图片对象</span>
<span class="token keyword">const</span> img<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token comment">//图片加载后处理</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">//第二个参数："repeat|repeat-x|repeat-y|no-repeat"</span>
  <span class="token keyword">const</span> pat <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createPattern</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token string">'repeat'</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
  <span class="token comment">//指定填充方式为贴图</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> pat
  <span class="token comment">//开始填充</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片缩放" tabindex="-1"><a class="header-anchor" href="#图片缩放" aria-hidden="true">#</a> 图片缩放</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//创建图片对象</span>
<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'icon.jpeg'</span>
<span class="token comment">//图片加载后处理</span>
img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>width <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalWidth <span class="token operator">*</span> <span class="token function">scale</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
  el<span class="token punctuation">.</span>height <span class="token operator">=</span> img<span class="token punctuation">.</span>naturalHeight <span class="token operator">*</span> <span class="token function">scale</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> el<span class="token punctuation">)</span>
  <span class="token comment">//绘制图片</span>
  ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//取最小缩放比例</span>
<span class="token keyword">function</span> <span class="token function">scale</span><span class="token punctuation">(</span>img<span class="token operator">:</span> HTMLImageElement<span class="token punctuation">,</span> el<span class="token operator">:</span> HTMLCanvasElement<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>width <span class="token operator">/</span> img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">,</span> el<span class="token punctuation">.</span>height <span class="token operator">/</span> img<span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绘制像素" tabindex="-1"><a class="header-anchor" href="#绘制像素" aria-hidden="true">#</a> 绘制像素</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//创建图片对象</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>el<span class="token punctuation">.</span>width<span class="token punctuation">,</span>el<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//向画中绘制点</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//随机生成坐标</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
  <span class="token comment">//绘制 5*5 白板</span>
  ctx<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"#fff"</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">querySelector</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token comment">//创建图片对象</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"#000"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>el<span class="token punctuation">.</span>width<span class="token punctuation">,</span>el<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//向画出中绘制点</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>index<span class="token operator">&lt;</span><span class="token number">15</span><span class="token punctuation">;</span>index<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">//随机设置绘制位置</span>
  <span class="token comment">//随机设置圆的半径</span>
  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> el<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token number">5</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span>
  
  <span class="token comment">//随机设置填充颜色</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'yellow'</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'#16a085'</span><span class="token punctuation">,</span> <span class="token string">'#2ecc71'</span><span class="token punctuation">,</span> <span class="token string">'#f1c40f'</span><span class="token punctuation">,</span> <span class="token string">'#9b59b6'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


