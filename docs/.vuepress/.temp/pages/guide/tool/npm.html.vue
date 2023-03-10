<template><div><h2 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h2>
<img :src="$withBase('/images/tool/node.jpg')" alt="foo">
<p>NPM是随同NodeJS一起安装的包管理工具，是常用的前端包管理工作</p>
<p>访问 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">nodejs (opens new window)<ExternalLinkIcon/></a>官网下载安装 nodejs , 其中将内置npm命令</p>
<h2 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h2>
<p>在安装时版本号是很关键的，大家要清楚版本更新规则</p>
<h3 id="版本号说明" tabindex="-1"><a class="header-anchor" href="#版本号说明" aria-hidden="true">#</a> 版本号说明</h3>
<p>版本示例: <strong>a.b.c</strong> 表示 <strong>主版本号.次版本号.修补版本号</strong></p>
<ul>
<li>a 兼容版本，一般来讲版本<code v-pre>2.0.0</code>不一定向<code v-pre>1.0.0</code>兼容，所以这个版本号更新要慎重</li>
<li>b 次版本号，一般为功能上的升级</li>
<li>c 修订号，一般指对程序<code v-pre>bug</code>的修复</li>
</ul>
<h3 id="指定版本" tabindex="-1"><a class="header-anchor" href="#指定版本" aria-hidden="true">#</a> 指定版本</h3>
<p>可以通过<code v-pre>^ 、~ 、*</code>来指定版本号</p>
<ul>
<li><code v-pre>^</code>表示与版本兼容，指从最左边非0算起，该数值不能变
<ol>
<li>版本号<code v-pre>^2.1.0</code>：指<code v-pre>&gt;= 2.1.0</code>但<code v-pre>&lt; 3.0.0</code></li>
<li>版本号<code v-pre>^0.2.1</code>：指<code v-pre>&gt;= 0.2.1</code>但<code v-pre>&lt; 0.3.0</code></li>
<li>版本号<code v-pre>^0.1.0</code>：指<code v-pre>&gt;= 0.1.0</code>但<code v-pre>&lt; 0.2.0</code></li>
</ol>
</li>
<li><code v-pre>~</code>表示次版本号的更新规则，指从最右边非 0 算起，该数值不能变
<ol>
<li><code v-pre>~2.1.0</code>：指<code v-pre>&gt;=2.1.0</code>但<code v-pre>&lt;2.2.0</code></li>
<li><code v-pre>~2.2.0</code>：指<code v-pre>&gt;=2.0.0</code>但<code v-pre>=2.0.0</code>因为次版本号为0</li>
</ol>
</li>
<li><code v-pre>*</code>表示任意版本，永远更新最新版本</li>
<li><code v-pre>-</code>表示版本区间
<ul>
<li><code v-pre>1.2.1-1.6.5</code>：指 <code v-pre>1.2.1与1.6.5</code>间的任意版本</li>
</ul>
</li>
</ul>
<h3 id="锁定版本" tabindex="-1"><a class="header-anchor" href="#锁定版本" aria-hidden="true">#</a> 锁定版本</h3>
<p>每次更新版本后会生成yarn.lock文件，用于记录当前项目的使用的软件版本号，这样别人执行 <code v-pre>yarn</code>安装包时与项目开发者使用的是相同版本，来保证程序的稳定运行</p>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h3>
<p><strong>全局安装</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install -g &lt;Module Name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装软件包，但不修改package.json 文件，以后使用npm install 时不会自动安装</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install &lt;Module Name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>生产环境</strong></p>
<ul>
<li>在<code v-pre>package.json</code>文件<code v-pre>dependencies</code>属性下增加记录</li>
<li><code v-pre>npm install</code>是会自动安装该软件包</li>
<li>使用<code v-pre>npm install --production</code>或者<code v-pre>NODE_ENV</code>变量值为<code v-pre>production</code>时，安装该软件包</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save <span class="token operator">&lt;</span>module name<span class="token operator">></span>

<span class="token comment">//简写</span>
npm install <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>开发环境</strong></p>
<ul>
<li>在package.json文件devDependencies属性下增加记录</li>
<li>npm install 时会自动安装该软件包</li>
<li>使用npm install --production或者NODE_ENV变量值为production时，不会安装该软件包</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev <span class="token operator">&lt;</span>Module Name<span class="token operator">></span>
    
<span class="token comment">//简写</span>
npm install <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看软件" tabindex="-1"><a class="header-anchor" href="#查看软件" aria-hidden="true">#</a> 查看软件</h3>
<p>查看安装的模块列表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看本地已安装的包信息</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm ls tailwindcss
或
npm ls | grep tailwind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看包信息</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm info tailwindcss
或
npm view tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出项目的依赖</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出项目的依赖，并限制显示的依赖深度</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm list --depth=2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新软件" tabindex="-1"><a class="header-anchor" href="#更新软件" aria-hidden="true">#</a> 更新软件</h3>
<p>更新npm自身</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install npm -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新所有软件包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新指定软件包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm update &lt;Module Name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载软件" tabindex="-1"><a class="header-anchor" href="#卸载软件" aria-hidden="true">#</a> 卸载软件</h3>
<p>删除全局软件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm uninstall -g &lt;Module Name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除项目中软件包</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm uninstall &lt;Module Name>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h3>
<p>node安装后会提供npx命令，使用npx命令可以直接调用模块命令。</p>
<p>下面是不使用npx调用mockjs中的random命令方式</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>node_modules/mockjs/bin/random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用npx可以简化调用，他会在<code v-pre>node_modules/.bin</code> 目录和环境变量<code v-pre>$PATH</code>中查找命令并执行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npx random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


