<template><div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> Yarn</h2>
<p>Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快</p>
<p>访问 <a href="https://yarnpkg.com/getting-started" target="_blank" rel="noopener noreferrer">yarnpkg.com (opens new window)<ExternalLinkIcon/></a>下载安装Yarn</p>
<h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h2>
<h3 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h3>
<p>全局安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新yarn到最新版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">set</span> version latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>苹果用户可以使用brew进行安装</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token parameter variable">-v</span>
<span class="token function">yarn</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新yarn</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">set</span> version latest
<span class="token function">yarn</span> <span class="token builtin class-name">set</span> version from sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="国内镜像" tabindex="-1"><a class="header-anchor" href="#国内镜像" aria-hidden="true">#</a> 国内镜像</h3>
<p>修改国内镜像后可以加快软件包安装速度</p>
<p>查看当前使用的镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置为淘宝镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yrm" tabindex="-1"><a class="header-anchor" href="#yrm" aria-hidden="true">#</a> yrm</h3>
<p>yrm是管理镜像的工具，可以列出可以使用的镜像，非常方便。</p>
<p>安装yrm</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> yrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装yrm</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> yrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出可以使用的镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yrm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用淘宝镜像</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试镜像速度</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>yrm <span class="token builtin class-name">test</span> taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<p>访问命令列表</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化新项目</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据package.json来安装项目依赖的软件包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>
<span class="token comment"># 或</span>
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h3>
<p><strong>全局安装</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>生产环境</strong></p>
<ul>
<li>在package.json文件dependencies属性下增加记录</li>
<li>yarn 时会自动安装该软件包</li>
<li>使用 yarn install --production或者NODE_ENV变量值为production时，安装该软件包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>开发环境</strong></p>
<ul>
<li>在package.json文件devDependencies属性下增加记录</li>
<li>npm install 时会自动安装该软件包</li>
<li>使用npm install --production或者NODE_ENV变量值为production时，不会安装该软件包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span> –dev
<span class="token comment">#或</span>
<span class="token function">yarn</span> <span class="token parameter variable">-D</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装package.json中的软件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> 
<span class="token comment"># 或</span>
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看软件" tabindex="-1"><a class="header-anchor" href="#查看软件" aria-hidden="true">#</a> 查看软件</h3>
<h3 id="查看软件-1" tabindex="-1"><a class="header-anchor" href="#查看软件-1" aria-hidden="true">#</a> 查看软件</h3>
<p>列出当前项目的依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看本地已安装的包信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> list <span class="token operator">|</span> <span class="token function">grep</span> tailwind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出项目的依赖，并限制显示的依赖深度</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> list <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程软件包信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> info tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看软件包的README</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> info tailwindcss readme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新软件" tabindex="-1"><a class="header-anchor" href="#更新软件" aria-hidden="true">#</a> 更新软件</h3>
<p>更新所有软件包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新指定软件包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> upgrade <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新<code v-pre>yarn</code>自身</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">set</span> version latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接更新到最新版本，忽略package.json中的版本规则 （慎用）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> upgrade <span class="token parameter variable">--latest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载软件" tabindex="-1"><a class="header-anchor" href="#卸载软件" aria-hidden="true">#</a> 卸载软件</h3>
<p>删除全局软件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> remove  <span class="token parameter variable">-g</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除项目中软件包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> remove  <span class="token punctuation">[</span>package<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制" aria-hidden="true">#</a> 缓存控制</h3>
<p>列出已缓存的每个包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> cache list 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全局缓存位置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> cache <span class="token function">dir</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清除缓存</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> cache clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


