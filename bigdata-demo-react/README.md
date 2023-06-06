## 大数据管理平台前端

### 本地运行步骤
1. 从github上拉取代码并进入前端代码目录
```
git clone git@github.com:loongsonedu/bigdata-demo-react-sprintboot.git
```
```
cd bigdata-demo-react-sprintboot/bigdata-demo-react
```
2. 安装运行依赖
```
npm install
```
3. 运行项目
```
npm run dev
```
4. 打包项目
```
npm run build
```
5. 预览打包后的项目
```
npm run preview
```

### 龙芯服务器部署步骤

1. 在`/root/workroom`目录下从github上拉取代码并进入前端代码目录
```
 git clone git@github.com:loongsonedu/bigdata-demo-react-sprintboot.git
```
```
cd bigdata-demo-react-sprintboot/bigdata-demo-react
```
2. 下载依赖
```
npm install
```
3. 打包项目，会生成`dist`目录
```
npm run build
```
4. 通过`nginx`部署 （已配置，可跳过此步骤）
>编辑配置文件 `/etc/nginx/nginx.conf `
>添加server配置
```
 server {
    listen       8080 default_server;
    listen       [::]:8080 default_server;
    server_name  _;
    root        /root/workroom/bigdata-demo-react-springboot/bigdata-demo-react/dist;

    location / {
        root	/root/workroom/bigdata-demo-react-springboot/bigdata-demo-react/dist;
        index	index.html index.htm;
        try_files $uri $uri/  /index.html;
    }

    error_page 404 /404.html;
        location = /40x.html {
        }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
```
> 刷新nginx
```
nginx -s reload
```

