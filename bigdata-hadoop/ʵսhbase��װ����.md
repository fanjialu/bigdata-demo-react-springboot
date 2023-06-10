# hbase  on Linux 安装文档

### 1.1 下载安装包

```
wget   http://archive.apache.org/dist/hbase/1.4.13/hbase-1.4.13-bin.tar.gz
```

### 1.2 安装jdk

步骤(略)

### 1.3 解压hbase

```
tar -zxvf hbase-1.2.5-bin.tar.gz 
```

### 1.4 设置环境变量

```
export HBASE_HOME=/opt/hbase/hbase-1.4.13
export PATH=$PATH:$HBASE_HOME/bin
source ~/.bashrc
```

### 1.5 修改HBASE的参数

```
/opt/hbase/hbase-1.4.13/conf/hbase-env.sh
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
```

### 1.6 HBASE的配置

```
<configuration>
   <property>
      <name>hbase.rootdir</name>
      <value>hdfs://localhost:8030/hbase</value>
   </property>
	
   <property>
      <name>hbase.zookeeper.property.dataDir</name>
      <value>/home/hadoop/zookeeper</value>
   </property>
   
   <property>
     <name>hbase.cluster.distributed</name>
     <value>true</value>
   </property>
</configuration>
```

### 1.7 HBASE的启动

```
/opt/hbase/hbase-1.4.13/bin/start-hbase.sh
```



