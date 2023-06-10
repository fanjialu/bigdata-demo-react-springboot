#!/bin/bash

# 定义变量
hadoop_version="3.2.3"
hadoop_install_dir="/opt/hadoop"

# 下载Hadoop安装包
wget https://downloads.apache.org/hadoop/common/hadoop-$hadoop_version/hadoop-$hadoop_version.tar.gz

echo  "hadoop包下载完成"
# 把包传到服务器上


#

# 创建用户 hadoop
#useradd hadoop

# 设置密码为 hadoop
#echo 'hadoop:hadoop' | chpasswd

echo "开始解压安装包"

# 解压安装包
tar -xzf hadoop-$hadoop_version.tar.gz

echo "解压安装包完成"

# 移动到安装目录

echo "开始移动安装包到对应路径"
mv hadoop-$hadoop_version $hadoop_install_dir

echo "解压到对应路径完成"

# 设置环境变量

#echo "export PATH=\$PATH:\$HADOOP_HOME/bin" >> ~/.bashrc

echo "设置.bashrc 环境变量"

echo 'export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-8.1.10.lns8.loongarch64/jre/' >> ~/.bashrc
echo "export HADOOP_HOME=$hadoop_install_dir" >> ~/.bashrc
echo 'export HADOOP_INSTALL=$HADOOP_HOME' >> ~/.bashrc
echo 'export HADOOP_MAPRED_HOME=$HADOOP_HOME' >> ~/.bashrc
echo 'export HADOOP_COMMON_HOME=$HADOOP_HOME' >> ~/.bashrc
echo 'export HADOOP_HDFS_HOME=$HADOOP_HOME' >> ~/.bashrc
echo 'export HADOOP_YARN_HOME=$HADOOP_HOME' >> ~/.bashrc
echo 'export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native' >> ~/.bashrc
echo 'export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin' >> ~/.bashrc
echo 'export HADOOP_OPTS="-Djava.library.path=$HADOOP_HOME/lib/native"' >> ~/.bashrc



# 刷新环境变量
source ~/.bashrc

echo "设置.bashrc 环境变量完成"


#echo "建立对应的路径"

#建立对应路径
#mkdir -p /home/hadoop/hadoopdata/hdfs/namenode
#mkdir -p /home/hadoophadoopdata/hdfs/datanode


#echo "对应路径建立完成"

# 配置Hadoop
# 设置Hadoop环境变量

echo "设置hadoop-env.sh 变量"
echo 'export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.312.b07-8.1.10.lns8.loongarch64/jre' >> $HADOOP_HOME/etc/hadoop/hadoop-env.sh
echo "完成hadoop-env.sh 变量设置"
# 获取本机 IP 地址
#ip_address=$(hostname -I | awk '{print $1}')


# 设置core-site.xml配置
echo "设置core-site  变量"
echo '<configuration>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo '  <property>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo '    <name>fs.defaultFS</name>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo '    <value>hdfs://10.40.80.16:9000</value>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo '  </property>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo '</configuration>' >> $HADOOP_HOME/etc/hadoop/core-site.xml
echo "设置core-site  变量完成"


# 设置hdfs-site.xml配置
echo "设置hdfs-site.xml  变量"
echo '<configuration>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  <property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <name>dfs.replication</name>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <value>1</value>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  </property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  <property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <name>dfs.name.dir</name>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <value>file:///home/hadoop/hadoopdata/hdfs/namenode</value>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  </property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  <property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <name>dfs.data.dir</name>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '    <value>file:////home/hadoop/hadoopdata/hdfs/datanode</value>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '  </property>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo '</configuration>' >> $HADOOP_HOME/etc/hadoop/hdfs-site.xml
echo "设置hdfs-site.xml  变量完成"

# 设置mapred-site.xml配置
echo "设置mapred-site.xml  变量"
echo '<configuration>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo '  <property>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo '    <name>mapreduce.framework.name</name>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo '    <value>yarn</value>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo '  </property>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo '</configuration>' >> $HADOOP_HOME/etc/hadoop/mapred-site.xml
echo "设置mapred-site.xml  完成"

# 启动Hadoop集群
# 切换到hadoop用户

#echo "格式化namenode"

su - hadoop <<EOF

# 格式化NameNode
#hdfs namenode -format

#echo "格式化namenode完成"

# 启动HDFS
echo "启动hdfs服务"
start-dfs.sh
echo "完成hdfs服务"

# 启动YARN
echo "启动yarn服务"
start-yarn.sh
echo "完yarn服务"

EOF


echo "Hadoop安装和配置完成！"
