import {defineUserConfig} from 'vuepress'
import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {backToTopPlugin} from '@vuepress/plugin-back-to-top'
import {defaultTheme} from '@vuepress/theme-default'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
  port: 3000,
  lang: 'zh-CN',
  title: 'Healer、loser',
  description: '学习笔记',
  base: '/blog',
  head: [['link', {rel: 'icon', href: '/images/logo.jpg'}]],
  theme: defaultTheme({
    home: "/index.html",
    navbar: [
      // NavbarItem
      {
        text: 'Web',
        children: [
          {
            text: '个人笔记',
            children: [
              {
                text: 'HTML',
                link: '/guide/html/HTML',
              },
              {
                text: 'CSS',
                link: '/guide/css/select',
              },
              {
                text: 'js',
                link: '/guide/js/base',
              },
            ]
          }
        ],
      },
      {
        text: '软件工具',
        children: [
          {
            text: 'yarn',
            link: '/guide/tool/yarn',
          },
          {
            text: 'npm',
            link: '/guide/tool/npm',
          },
          {
            text: 'nvm',
            link: '/guide/tool/nvm',
          },
          {
            text: 'pnpm',
            link: '/guide/tool/pnpm',
          }
        ],
      },
      {
        text: 'Git',
        link: '/guide/git/git',
      },
      {
        text: 'TypeScript',
        link: '/guide/ts/config',
      },
      {
        text: 'ndoeJs',
        link: '/guide/node/config',
      },
      {
        text: 'Mysql',
        link: '/guide/mysql/baseSql',
      },
    ],
    sidebar: {
      "/guide/html": [
        "HTML",
      ],
      "/guide/css": [
        "select",
        "元素权重",
        "文本控制",
        "盒子模型",
        "背景处理",
        "表格样式",
        "float",
        "定位布局",
        "弹性布局",
        "栅格系统",
        "变形动画",
        "过度延迟",
        "帧动画",
        "媒体查询",
        "响应尺寸"
      ],
      "/guide/js": [
        "base",
        "运算符与控制流程",
        "基本类型",
        "数组类型",
        "symbol",
        "Set",
        "Map",
        "函数进阶",
        "作用域与闭包",
        "对象",
        "原型与继承",
        "类",
        "模块设计",
        "正则",
        "Promise",
        "任务管理",
        "Promise核心",
        "DOM",
        "空间坐标",
        "事件",
        "Ajax",
        "canvas",
      ],
      "/guide/tool": [
        "yarn",
        "npm",
        "nvm",
        "pnpm"
      ],
      "/guide/git": [
        "git",
      ],
      "/guide/ts": [
        "config",
        "基础类型",
        "配置与调试",
        "断言",
        "类与接口",
        "泛型",
        "装饰器",
        "模块管理",
        "webpack",
        "类型工具",
      ],
      "/guide/node": [
        "config",
        "模块管理",
        "事件循环",
        "Path模块",
        "Event模块",
        "Buffer",
        "Stream与Pipe",
        "FS模块",
        "HTTP",
        "pm2",
        "开发扩展包",
        "常用扩展包",
      ],
      "/guide/mysql":[
        "baseSql",
        "表维护",
        "数据类型",
      ]
    }
  }),
  /*插件*/
  plugins: [
    searchPlugin({
      // 配置项

    }),

    backToTopPlugin(),
  ],
})