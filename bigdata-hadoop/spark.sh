#!/bin/bash

spark_home=/opt/spark

# 下载spark
echo "下载spark-3.3.2软件包"
wget https://dlcdn.apache.org/spark/spark-3.3.2/spark-3.3.2-bin-hadoop3.tgz

echo "下载spark-3.3.2软件包完成"




# 解压spark
echo "解压spark-3.3.2软件包"
tar -xvf spark-3.3.2-bin-hadoop3.tgz -C $spark_home/
echo "解压spark-3.3.2软件包完成"

# 设置环境变量
echo "设置spark环境变量开始"
echo 'export SPARK_HOME=$spark_home/spark-3.3.2-bin-hadoop3' >> ~/.bashrc
echo 'export PATH=$PATH:$SPARK_HOME/bin' >> ~/.bashrc
source ~/.bashrc
echo "设置spark环境变量完成"


echo "启动spark服务"
# Start Spark
su - hadoop -c '$spark_home/spark-3.3.2-bin-hadoop3/sbin/start-master.sh'
echo "启动spark完成"