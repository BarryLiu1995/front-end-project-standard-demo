# AngularProjectTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.



## 项目目录说明

```
|-- src
    |-- app-routing.module.ts
    |-- app.component.html
    |-- app.component.scss
    |-- app.component.spec.ts
    |-- app.component.ts
    |-- app.module.ts
    |-- mock
    |   |-- index.ts
    |   |-- mock-data.ts
    |-- shared
    |   |-- api.ts
    |   |-- can-deactivate.guard.ts
    |   |-- shared.module.ts
    |   |-- animations
    |   |-- components
    |   |-- pipes
    |   |-- service
    |   |   |-- data.service.ts
    |   |   |-- dialog.service.ts
    |   |   |-- http-error-handler.service.ts
    |   |   |-- http.service.ts
    |   |   |-- selective-preloading-strategy.service.ts
    |   |-- type
    |       |-- crisis-center.ts
    |       |-- heroes.ts
    |       |-- types.ts
    |-- workspace
        |-- admin
        |   |-- admin-routing.module.ts
        |   |-- admin.module.ts
        |   |-- admin
        |   |   |-- admin.component.html
        |   |   |-- admin.component.scss
        |   |   |-- admin.component.spec.ts
        |   |   |-- admin.component.ts
        |   |-- admin-dashboard
        |   |   |-- ......
        |   |-- manage-crises
        |   |   |--......
        |   |-- manage-heroes
        |       |-- ......
        |-- auth
        |   |-- auth-routing.module.ts
        |   |-- auth.guard.ts
        |   |-- auth.module.ts
        |   |-- auth.service.ts
        |   |-- login
        |       |-- login.component.html
        |       |-- login.component.scss
        |       |-- login.component.spec.ts
        |       |-- login.component.ts
        |-- compose-message
        |   |-- compose-message.component.html
        |   |-- compose-message.component.scss
        |   |-- compose-message.component.spec.ts
        |   |-- compose-message.component.ts
        |-- crisis-center
        |   |-- crisis-center-routing.module.ts
        |   |-- crisis-center.module.ts
        |   |-- crisis-detail-resolver.service.ts
        |   |-- crisis-center
        |   |   |-- crisis-center.component.html
        |   |   |-- crisis-center.component.scss
        |   |   |-- crisis-center.component.spec.ts
        |   |   |-- crisis-center.component.ts
        |   |-- crisis-center-home
        |   |   |-- crisis-center-home.component.html
        |   |   |-- crisis-center-home.component.scss
        |   |   |-- crisis-center-home.component.spec.ts
        |   |   |-- crisis-center-home.component.ts
        |   |-- crisis-detail
        |   |   |-- ......
        |   |-- crisis-list
        |       |-- ......
        |-- heroes
        |   |-- heroes-routing.module.ts
        |   |-- heroes.module.ts
        |   |-- hero-detail
        |   |   |-- hero-detail.component.html
        |   |   |-- hero-detail.component.scss
        |   |   |-- hero-detail.component.spec.ts
        |   |   |-- hero-detail.component.ts
        |   |-- hero-list
        |       |-- ......
        |-- not-found
            |-- not-found.component.html
            |-- not-found.component.scss
            |-- not-found.component.spec.ts
            |-- not-found.component.ts



```



如上图所示，项目源代码目录 `src/app` 下有个根模块 AppModule，同时该根模块还拥有 $(n+1)$ 个子模块 SharedModule 工具模块和 $n$ 个业务模块。其中 SharedModule 模块提供项目其他 $n$ 个业务模块所需用到的自定义组件、动画、指令、管道等，同时需要注意的是将 SharedModule 的 `exports` 属性将对应可声明对象（组件、指令、管道）声明出去，供项目其余的 $n$ 个业务模块使用。而业务模块主要根据业务功能分模块，同时业务的路由配置也写在模块内，特别是当一个业务模块有子页面时，则模块内可根据子页面再进行细分，如上图中的 crisis-center、heroes 模块。同时业务模块中的登录模块，404模块的路由配置在根模块这一级别。

而 `app/mock` 目录下则为开发过程中 mock 数据接口的相关文件：`index.ts` 以及 `mock-data.ts`。其中 `index.ts` 中编写项目所使用的第三方库 @delon/mock 的 mock 数据的逻辑代码，而 `mock-data.ts` 中则使用第三方库 mockjs 去编写对应接口返回的数据。具体可查看代码进行理解。



## 相关命令使用

```shell
# 使用 angular cli的 generate 命令生产组件、动画、指令......
npm run generate -- component tool/components/slidebar -m=tool --export

# 以生产环境配置文件进行本地运行
npm start -- --configuration=production

# 以预生产环境配置文件进行本地运行
npm start -- --configuration=staging

# 打包生产环境代码
npm run build

# 打包预生产环境代码
npm run staging

# 打包开发环境代码
npm run dev

# 以热替换方式开启本地开发环境
npm run hmr
```



## Icon 资源使用

项目中如有需要用到 icon 的地方，可以使用 Ng-Zorro 自带 icon 或者通过 Ng-Zorro 使用自定义的 iconfont 图标库中的图表。具体使用方法可以参见 [Icon 图标|NG-ZORRO](https://ng.ant.design/components/icon/zh#components-icon-demo-custom)



## 环境配置文件

`src/environments` 文件夹下的环境配置文件分别为本地开发环境 `environment.ts`、预生产环境 `environment.staging.ts`、生产环境 `environment.prod.ts`。其中我们一般将本地开发环境的 baseURL 字段设为空，预生产环境的 baseURL 字段设为后端接口部署的机子 IP，生产环境的 baseURL 字段则为相对路径。

例如在生产环境中，项目前后端同时部署于同一个服务器，此时的请求接口的地址全称为`http://<ip>:<port>/api/<接口路径>`。如果在预生产环境中，此时的请求接口的地址全称为`http://funhouse.barryliu1995.studio/api/<接口地址>`。如果是在本地开发环境中，此时的请求接口的地址全称为`<接口地址>`，此时是通过 mock 接口获取数据。

目前多环境配置的预设场景为：本地开发环境使用 mock 接口，测试环境使用另外一台机子的测试接口，正式环境使用相对路径（预设为生产环境下，后端和前端代码部署到同一台机子上）。使用者可根据实际情况修改 `baseURL` 字段值。

同时我们也推荐遵循这样一种开发流程——前后端在准备开发项目时先商量好接口形状及其各种相关情况该如何处理。前端根据商量好的接口形状使用 mockjs 造数据，在开发业务的同时对接相应的 API 接口。待整个前后端开发任务基本结束后，再在本地环境下启动预生产配置下的开发环境测试接口对接是否有异常情况。此开发流程模式可以尽量避免前端与后端的开发任务耦合在一起，各自相互独立，可以加快整体的开发速度。



## Typscript 规范

1. 缩进使用两个空格的形式
2. 函数之间间隔一行

其余规范则直接遵循项目 `tslint` 的所指定的规范，如比较时使用全等或全不等、字符串使用单引号、每行代码的长度不长于最大长度......



## SCSS规范

默认使用 BEM 规范，具体可查阅 [CSS — BEM 命名规范](https://juejin.im/post/5b925e616fb9a05cdd2ce70d)

其余规范则直接遵循项目 `tslint` 的所指定的规范，如比较时使用全等或全不等、字符串使用单引号、每行代码的长度不长于最大长度......



## HTML 规范
在属性上，使用双引号，不要使用单引号；

其余规范则直接遵循项目 `tslint` 的所指定的规范，如比较时使用全等或全不等、字符串使用单引号、每行代码的长度不长于最大长度......




## 命名规范

### 项目命名

全部采用小写方式，以划线分隔，例如：

* front-end-project-standard-demo（前端项目规范示例）
* big-data-analysis-platform（大数据分析平台）
* monitoring-platform（监控平台）



### 目录命名
全部采用小写，同时只用单英文词进行命名，如workspace、library、mock、pipes等



### 组件命名

组件文件夹命名以单个小写英文单词为主，例如 login、main、map 等。如果需要多个英文单词命名文件夹，则使用“-”连字，例如 not-found。

而组件命名则使用大驼峰命名风格，例如 WorkspaceModule、SharedModule、LoadingAnimation、LoginComponent、NumberPipe 等




### 变量命名
1. 'ID'在变量名中全大写
2. 'URL'在变量名中全大写
3. 'Android'在变量名中大写第一个字母
4. 'iOS'在变量名中小写第一个，大写后两个字母
5. 常量全大写，用下划线连接，如 `MOCK_MODULE`



## 接口字段规范

这里讨论的规范主要指 HTTP 响应码和响应主体中 code 字段两者该如何使用的问题，参考 [前后端分离项目，接口返回200但是里面返回500合理吗？|知乎](https://www.zhihu.com/question/309888255) 讨论的问题。

在本代码模板中封装的 HTTP 错误处理中有一个机制——当 HTTP 响应发生错误时会返回一个默认空值以解决在浏览器控制台显示如下的报错信息：

> ERROR TypeError: Cannot read property 'xxx' of undefined

如果某个未带上业务所需信息的 HTTP 请求所返回的响应码为 200，但在响应报文主体数据的 code 字段返回内部自行规定的状态码，同时 data 字段为空对象。则会让代码模板中 HTTP 请求错误机制失效，因此我们建议 HTTP 响应状态一切按 HTTP 语义，即在响应报文的响应行指明对应的状态码。我们支持上文知乎讨论贴中的这个[回答](
https://www.zhihu.com/question/309888255/answer/588022856)。

