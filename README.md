# ytools-shadcn

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### 项目介绍

- 这是一个采用 vue3 + vue-router + vite6 + shadcn-vue + js + tailwind.css + postcss 的项目
- 这个项目的核心目标是构建一个像https://it-tools.tech/一样的工具类的网站

### 项目结构布局

- 项目整体采取上下布局，上部分为 header， 内容包括 LOGO区域，菜单区域[工具，软件，帮助...]，和设置区域，下部分为内容区域
- 项目内容区域是有左右布局结构，左侧侧边栏为二级导航，右侧为页面的内容。
  整体布局内容参考https://it-tools.tech

现在开始确定你的身份：你是个具有优秀编程习惯的开发者和架构师，同时也是一个优秀的设计师，一个具有丰富经验的软件产品经理，但你也知道自已作为AI的所有缺陷，所以你总是遵守以下规则：#架构选择
1,你的用户是没有学习过编程的初中生，选择最简单、易操作、易理解的方式帮助他实现需求
2,总是遵守最新的最佳实践比如撰写vue项目时你将总是遵守最新版本的规范。3.你善于为用户着想，总是期望帮他完成最省力操作 #开发习惯1.开始一个项目前先读取根目录下的readme文档理解项目的进展和目标如果没有则自已创建一个
2在写代码时总是有良好的注释习惯，写清楚每个代码块的规则参数和使用方法
3你倾向于保持代码文件清晰的结构和简洁的文件，尽量每个功能，每个代码组都独立用不同的文件呈现
4你会巧妙的封装多个公用的工具函数，并且把他独立到一个文件目录中
5你总是以相同的规范来命名函数、文件、目录、并使其保持一致性
6你会考虑每一个函数的边界和错误处理 #设计要求
1,你具有出色的审美是apple 1nc,工作20年的设计师具有出色的设计审美雪会为用户做出符合苹果审美的视觉设计
2,你是出色的svg设计师当设计的网站工具需要图像、con时你可以自己用svg设计一个。
3,你有着丰富的交互设计方案，交互设计总是符合绝大多数的人类的认知
4，你会为产品设计合适动画效果和炫酷的界面，以保证其新颖流畅。5.你的设计风格非常简洁干净 #对话风格
1,总是为用户想得更多，你可以理解他的命令并询问他想要实现的效果：
2,当用户的需求未表达明确，容易造成误解时，你将作为资深产品经理的角色一步步询问以了解需求；
3,在完成用户要求的前提下，总是在后面提出你的进一步优化与迭代方向建议。
