#!/bin/bash


#RELEASE="3.2.1"
HBASE_HOME=/opt/hbase

# 下载hbase软件
echo "下载hbase软件" 
wget   http://archive.apache.org/dist/hbase/1.4.13/hbase-1.4.13-bin.tar.gz
echo "下载hbase软件完成" 

# 解压HBASE软件
tar -xzvf hadoop-$RELEASE.tar.gz -C  $HBASE_HOME

# 设置环境HBASE环境变量

source ~/.bashrc

# 配置habase


# Start HBase
start-hbase.sh
