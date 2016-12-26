# slice-cli

**生成日常切图所需项目目录(sass|gulp|browser-sync|autoprefixer|base64) 一键产出交付页面**
**本机安装环境依赖: node git**

```
├── js
└── images
└── css
└── sass
└── fonts
└── jpegs
└── psd
└── html
└── pages 
```
### 说明:
* sass目录 存放scss样式文件,自动生成平级的css目录
* html目录 存放html视图文件,在这个目录下面,编写html
* pages目录 对应html目录自动生成的.html文件,执行 slice run,可在浏览器里预览

### 功能:
* 自动添加浏览器私有前缀
* 代码热更新,浏览器自动刷新
* 支持base64,只需在资源引用处加上'?base64'
* 自动生成css sprite, 例:slice build -s images/slice 将自动合并images目录下的slice目录下的所有图片

### 使用方法
```
npm install slice-cli -g
```


### 1.初始化项目
```
slice init
```

### 2.执行 `slice init` 之后，会出现一个输入项：选择一个项目模板
目前只有针对两种不同客户端的模板(手机移动端和传统pc端)
* touch
* pc

### 3.选择了项目模板之后，又会出现一个输入项：项目名称，也就是项目的目录名称 这个目录将是项目的根目录。
    
### 进入刚才已经初始化的项目目录    
```
cd  your Project_Name
```

### 项目根目录下的说明：
```
html //html文件夹目录,页面的添加修改都在此文件夹
pages //浏览器中预览的html
```

html 可以包含html代码片断([gulp-file-inlcude](https://github.com/coderhaoxin/gulp-file-include)),例:

```
@@include("common.html"); //包含相对于当前html文件的目录下common.html文件
```   


### 在浏览器里预览
```
slice run [Project-Name] //Poject-Name是可选的,若在项目的根目录下，直接运行 slice run 即可
```


### 指定 slice 配置文件
```
    slice config //显示配置文件路径
    
    slice config -l //显示最新的配置文件内容
    
    slice config -d <file> //重新指定配置文件路径
```


### 构建产出项目(交付给小伙伴) Project-Name 可选
```
slice build [Project-Name]

```

### 构建zip包 Project-Name 可选
```
slice build [Project-Name] -z 
```

### 构建css雪碧图，需指定匹配的图片目录
```
slice build -s images/slice/
```

### 说明：
* [Project-Name] 项目目录路径是可选的，若在项目的根目录下，可省略
* 构建雪碧图的目录，必须指定在image/slice目录下
* slice run -i 此条命令，URL将以本机局域网IP的方式，运行slice环境
* images、html、sass,三个目录下的文件名若以"_"开头，则执行slice build后，不会编译生成对应的实体文件

