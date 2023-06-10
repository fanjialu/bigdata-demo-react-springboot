# Hive 3.1.2  on Linux 安装文档

### 1.1 下载安装包

```
wget https://www.strategylions.com.au/mirror/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz
```

### 1.2 解压安装包

```
tar -xvf apache-hive-3.1.2-bin.tar.gz  -C ./
```

### 1.3 设置环境变量

```
vi ~/.bashrc
export JAVA_HOME=export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-8.1.10.lns8.loongarch64/jre/
export HADOOP_HOME=/data/soft/haoop
export HIVE_HOME=/data/soft/apache-hive-3.1.2-bin
export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin:$HIVE_HOME/bin

source ~/.bashrc
```

### 1.4 设置hive hdfs路径

```
hadoop fs -mkdir /tmp 
hadoop fs -mkdir -p /user/hive/warehouse 
hadoop fs -chmod g+w /tmp 
hadoop fs -chmod g+w /user/hive/warehouse
```

### 1.5 安装mysql

#### 1.5.1 安装mysql服务（略）

#### 1.5.2 创建metastore database

```
CREATE USER 'hive'@'localhost' IDENTIFIED BY 'hive' password expire never;
GRANT ALL ON *.* TO 'hive'@'localhost';
create database hive_metastore;
mysql -u hive -phive
```

- user:hive
- password:hive
- database:hive_metastore

### 1.6 配置hive metastore

#### 1.6.1 下载驱动，根据数据库版本下载对应驱动

```
[hadoop@bogon ~]$ mysql -V
mysql  Ver 8.0.21 for Linux on loongarch64 (Source distribution)
```

```
wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.22/mysql-connector-java-8.0.22.jar
```

把数据库驱动放到$HIVE_HOME/lib目录下

```
mv mysql-connector-java-8.0.22.jar $HIVE_HOME/lib/
```

### 1.7 配置hive-site文件

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
  <property>
    <name>hive.metastore.event.db.notification.api.auth</name>
    <value>false</value>
    <description>
      Should metastore do authorization against database notification related APIs such as get_next_notification.
      If set to true, then only the superusers in proxy settings have the permission
    </description>
  </property>
  <property>
    <name>hive.metastore.db.type</name>
    <value>mysql</value>
    <description>
      Expects one of [derby, oracle, mysql, mssql, postgres].
      Type of database used by the metastore. Information schema &amp; JDBCStorageHandler depend on it.
    </description>
  </property>
  <property>
    <name>hive.metastore.uris</name>
    <value>thrift://127.0.0.1:9083</value>
    <description>Thrift URI for the remote metastore. Used by metastore client to connect to remote metastore.</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionPassword</name>
    <value>hive</value>
    <description>password to use against metastore database</description>
  </property>
  <property>
    <name>hive.metastore.ds.connection.url.hook</name>
    <value/>
    <description>Name of the hook to use for retrieving the JDO connection URL. If empty, the value in javax.jdo.option.ConnectionURL is used</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionURL</name>
    <value>jdbc:mysql://localhost/hive_metastore</value>
    <description>
      JDBC connect string for a JDBC metastore.
      To use SSL to encrypt/authenticate the connection, provide database-specific SSL flag in the connection URL.
      For example, jdbc:postgresql://myhost/db?ssl=true for postgres database.
    </description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionUserName</name>
    <value>hive</value>
    <description>Username to use against metastore database</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionDriverName</name>
    <value>com.mysql.cj.jdbc.Driver</value>
    <description>Driver class name for a JDBC metastore</description>
  </property>
</configuration>
```

- javax.jdo.option.ConnectionDriverName: com.mysql.jdbc.Driver or com.mysql.cj.jdbc.Driver depends on the version of your MySQL JDBC driver.
- javax.jdo.option.ConnectionURL: jdbc:mysql://localhost/**hive_metastore**
- javax.jdo.option.ConnectionUserName: **hive**
- javax.jdo.option.ConnectionPassword: **hive**
- hive.metastore.uris: thrift://127.0.0.1:9083
- hive.metastore.db.type: mysql

### 1.8 初始化数据库（二选一）

```
 cd $HIVE_HOME/bin/
 ./metatool -dbType mysql -initSchema 
```

```
mysql>  use hive_metastore
cd /data/soft/apache-hive-3.1.2-bin/scripts/metastore/upgrade/mysql
SOURCE /data/soft/apache-hive-3.1.2-bin/scripts/metastore/upgrade/mysql/hive-schema-3.1.0.mysql.sql;
```

### 1.9 验证mysql 内数据库

```
mysql> use hive_metastore;
mysql> show tables;
```

### 1.10 在hive内创建库和表

```
hive> CREATE TABLE demo1 (id int, name string);
OK
Time taken: 3.725 seconds
hive> CREATE TABLE demo1 (id int, name string);
OK
Time taken: 3.725 seconds
hive> SHOW TABLES;
OK
demo1
Time taken: 0.111 seconds, Fetched: 1 row(s)
```



### 2  常见报错总结：

#### 2.1  hive客户端登录，报如下图：guava 版本不对

![image-20230328094344273](C:\Users\xingjitao\Documents\hadoop\pic\image-20230328094344273.png)

**解决办法**

```
[hadoop@bogon ~]$ ls $HADOOP_HOME/share/hadoop/common/lib | grep guava
guava-27.0-jre.jar
listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar
```

```
[hadoop@bogon ~]$ ls $HIVE_HOME/lib | grep guava
guava-19.0.jar
jersey-guava-2.25.1.jar
```

```
[root@bogon ~]# cd /data/soft/apache-hive-3.1.2-bin/lib/
[root@bogon lib]# rm -f guava-19.0.jar
cd /data/soft/haoop/share/hadoop/common/lib
cp guava-27.0-jre.jar  /data/soft/apache-hive-3.1.2-bin/lib/
```

#### 2.2 mysql 密码忘记

**解决办法：**

```
[root@bogon mysql]# cat /etc/my.cnf
#
# This group is read both both by the client and the server
# use it for options that affect everything
#
[client-server]

#
# include all files from the config directory
#
!includedir /etc/my.cnf.d


[mysqld]
user=mysql
skip-grant-tables
```

```
update user set authentication_string='' where user='root';
> flush privileges
```

#### 2.3  show database报错

```
FAILED: HiveException java.lang.RuntimeException: Unable to instantiate org.apache.hadoop.hive.ql.metadata.SessionHiveMetaStoreClient
```

**解决办法：后台运行 metastore**

```
 hive   --service metastore
```

#### 2.4 初始化报错

```
[hadoop@bogon ~]$ $HIVE_HOME/bin/schematool -dbType mysql -initSchema
SLF4J: Class path contains multiple SLF4J bindings.
SLF4J: Found binding in [jar:file:/data/soft/apache-hive-3.1.2-bin/lib/log4j-slf4j-impl-2.10.0.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: Found binding in [jar:file:/data/soft/haoop/share/hadoop/common/lib/slf4j-log4j12-1.7.25.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
SLF4J: Actual binding is of type [org.apache.logging.slf4j.Log4jLoggerFactory]
Metastore connection URL:        jdbc:mysql://localhost/hive_metastore
Metastore Connection Driver :    com.mysql.cj.jdbc.Driver
Metastore connection User:       hive
Starting metastore schema initialization to 3.1.0
Initialization script hive-schema-3.1.0.mysql.sql

Error: Table 'CTLGS' already exists (state=42S01,code=1050)
org.apache.hadoop.hive.metastore.HiveMetaException: Schema initialization FAILED! Metastore state would be inconsistent !!
```

**解决办法;**

刚开始手工同步的脚本，表重复，删除库，重新建库



