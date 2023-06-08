### 一、开始准备

- 创建工作目录：mkdir workroom
- 进入工作目录：cd workroom
- 安装git命令：sudo yum install git
- 在工作目录克隆实验所需项目：git clone git@github.com:loongsonedu/bigdata-demo-react-springboot.git

### 二、环境准备

##### 安装jdk环境

- 查看jdk版本命令：java -version
- 运行Java的jar包命令：找到jar包所在位置，输入sudo java -jar 要运行jar包的名字.jar

### 三、项目运行

- 输入 ：cd bigdata-demo-react-sprintboot/bigdata-demo-springboot/jar/进入jar包目录
- 修改脚本权限：chmod 775 startdemo.sh
- 启动后端运行脚本：./startdemo.sh
