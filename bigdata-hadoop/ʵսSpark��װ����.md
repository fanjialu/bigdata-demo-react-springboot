# Spark  on Linux 安装文档

### 1.1 下载安装包

```
wget https://dlcdn.apache.org/spark/spark-3.3.2/spark-3.3.2-bin-hadoop3.tgz
```

### 1.2 安装jdk

步骤(略)

### 1.3 安装spark

```
tar -xvf spark-3.3.2-bin-hadoop3.tgz  -C ./
su - hadoop
vi .bashrc
export SPARK_HOME=/data/soft/spark-3.3.2-bin-hadoop3
    export PATH=$PATH:$SPARK_HOME/bin
    
source .bashrc
--启动spark
su - hadoop
./sbin/start-master.sh
```

### 1.4 配置防火墙放行端口（如果设置防火墙）

```
firewall-cmd --permanent --zone=public --add-port=6066/tcp
firewall-cmd --permanent --zone=public --add-port=7077/tcp
firewall-cmd --permanent --zone=public --add-port=8080-8081/tcp
firewall-cmd --reload
```

### 1.5 服务验证

```
http://server-ip:7077
```

### 1.6 测试spark自带程序

```
./bin/spark-submit --class org.apache.spark.examples.SparkPi \
    --master local \
    /data/soft/spark-3.3.2-bin-hadoop3/examples/jars/spark-examples_2.12-3.3.2.jar 
```

```
[root@localhost bin]# ./spark-submit  --class org.apache.spark.examples.SparkPi \
> --master local \
> /data/soft/spark-3.3.2-bin-hadoop3/examples/jars/spark-examples_2.12-3.3.2.jar
```



![image-20230609094437923](C:\Users\xingjitao\AppData\Roaming\Typora\typora-user-images\image-20230609094437923.png)

#### 1.6.1 日志详情如下（测试PI的值）

打印日志如下：

Pi is roughly 3.138275691378457

```
23/03/29 04:16:46 INFO SparkContext: Running Spark version 3.3.2
23/03/29 04:16:47 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
23/03/29 04:16:47 INFO ResourceUtils: ==============================================================
23/03/29 04:16:47 INFO ResourceUtils: No custom resources configured for spark.driver.
23/03/29 04:16:47 INFO ResourceUtils: ==============================================================
23/03/29 04:16:47 INFO SparkContext: Submitted application: Spark Pi
23/03/29 04:16:47 INFO ResourceProfile: Default ResourceProfile created, executor resources: Map(cores -> name: cores, amount: 1, script: , vendor: , memory -> name: memory, amount: 1024, script: , vendor: , offHeap -> name: offHeap, amount: 0, script: , vendor: ), task resources: Map(cpus -> name: cpus, amount: 1.0)
23/03/29 04:16:47 INFO ResourceProfile: Limiting resource is cpu
23/03/29 04:16:47 INFO ResourceProfileManager: Added ResourceProfile id: 0
23/03/29 04:16:47 INFO SecurityManager: Changing view acls to: root
23/03/29 04:16:47 INFO SecurityManager: Changing modify acls to: root
23/03/29 04:16:47 INFO SecurityManager: Changing view acls groups to: 
23/03/29 04:16:47 INFO SecurityManager: Changing modify acls groups to: 
23/03/29 04:16:47 INFO SecurityManager: SecurityManager: authentication disabled; ui acls disabled; users  with view permissions: Set(root); groups with view permissions: Set(); users  with modify permissions: Set(root); groups with modify permissions: Set()
23/03/29 04:16:47 INFO Utils: Successfully started service 'sparkDriver' on port 39883.
23/03/29 04:16:47 INFO SparkEnv: Registering MapOutputTracker
23/03/29 04:16:47 INFO SparkEnv: Registering BlockManagerMaster
23/03/29 04:16:48 INFO BlockManagerMasterEndpoint: Using org.apache.spark.storage.DefaultTopologyMapper for getting topology information
23/03/29 04:16:48 INFO BlockManagerMasterEndpoint: BlockManagerMasterEndpoint up
23/03/29 04:16:48 INFO SparkEnv: Registering BlockManagerMasterHeartbeat
23/03/29 04:16:48 INFO DiskBlockManager: Created local directory at /tmp/blockmgr-c954e510-2b6a-4a7f-abf2-fd46f8643d66
23/03/29 04:16:48 INFO MemoryStore: MemoryStore started with capacity 366.3 MiB
23/03/29 04:16:48 INFO SparkEnv: Registering OutputCommitCoordinator
23/03/29 04:16:48 INFO Utils: Successfully started service 'SparkUI' on port 4040.
23/03/29 04:16:48 INFO SparkContext: Added JAR file:/data/soft/spark-3.3.2-bin-hadoop3/examples/jars/spark-examples_2.12-3.3.2.jar at spark://bogon:39883/jars/spark-examples_2.12-3.3.2.jar with timestamp 1680077806866
23/03/29 04:16:48 INFO Executor: Starting executor ID driver on host bogon
23/03/29 04:16:48 INFO Executor: Starting executor with user classpath (userClassPathFirst = false): ''
23/03/29 04:16:48 INFO Executor: Fetching spark://bogon:39883/jars/spark-examples_2.12-3.3.2.jar with timestamp 1680077806866
23/03/29 04:16:49 INFO TransportClientFactory: Successfully created connection to bogon/10.40.80.16:39883 after 50 ms (0 ms spent in bootstraps)
23/03/29 04:16:49 INFO Utils: Fetching spark://bogon:39883/jars/spark-examples_2.12-3.3.2.jar to /tmp/spark-49bfd5a7-4e03-4675-a295-27466318bb26/userFiles-cc2f67f4-696f-4f8b-a6cf-4c945629caf5/fetchFileTemp8084784052412003673.tmp
23/03/29 04:16:49 INFO Executor: Adding file:/tmp/spark-49bfd5a7-4e03-4675-a295-27466318bb26/userFiles-cc2f67f4-696f-4f8b-a6cf-4c945629caf5/spark-examples_2.12-3.3.2.jar to class loader
23/03/29 04:16:49 INFO Utils: Successfully started service 'org.apache.spark.network.netty.NettyBlockTransferService' on port 35223.
23/03/29 04:16:49 INFO NettyBlockTransferService: Server created on bogon:35223
23/03/29 04:16:49 INFO BlockManager: Using org.apache.spark.storage.RandomBlockReplicationPolicy for block replication policy
23/03/29 04:16:49 INFO BlockManagerMaster: Registering BlockManager BlockManagerId(driver, bogon, 35223, None)
23/03/29 04:16:49 INFO BlockManagerMasterEndpoint: Registering block manager bogon:35223 with 366.3 MiB RAM, BlockManagerId(driver, bogon, 35223, None)
23/03/29 04:16:49 INFO BlockManagerMaster: Registered BlockManager BlockManagerId(driver, bogon, 35223, None)
23/03/29 04:16:49 INFO BlockManager: Initialized BlockManager: BlockManagerId(driver, bogon, 35223, None)
23/03/29 04:16:50 INFO SparkContext: Starting job: reduce at SparkPi.scala:38
23/03/29 04:16:50 INFO DAGScheduler: Got job 0 (reduce at SparkPi.scala:38) with 2 output partitions
23/03/29 04:16:50 INFO DAGScheduler: Final stage: ResultStage 0 (reduce at SparkPi.scala:38)
23/03/29 04:16:50 INFO DAGScheduler: Parents of final stage: List()
23/03/29 04:16:50 INFO DAGScheduler: Missing parents: List()
23/03/29 04:16:50 INFO DAGScheduler: Submitting ResultStage 0 (MapPartitionsRDD[1] at map at SparkPi.scala:34), which has no missing parents
23/03/29 04:16:50 INFO MemoryStore: Block broadcast_0 stored as values in memory (estimated size 4.0 KiB, free 366.3 MiB)
23/03/29 04:16:50 INFO MemoryStore: Block broadcast_0_piece0 stored as bytes in memory (estimated size 2.3 KiB, free 366.3 MiB)
23/03/29 04:16:50 INFO BlockManagerInfo: Added broadcast_0_piece0 in memory on bogon:35223 (size: 2.3 KiB, free: 366.3 MiB)
23/03/29 04:16:50 INFO SparkContext: Created broadcast 0 from broadcast at DAGScheduler.scala:1513
23/03/29 04:16:50 INFO DAGScheduler: Submitting 2 missing tasks from ResultStage 0 (MapPartitionsRDD[1] at map at SparkPi.scala:34) (first 15 tasks are for partitions Vector(0, 1))
23/03/29 04:16:50 INFO TaskSchedulerImpl: Adding task set 0.0 with 2 tasks resource profile 0
23/03/29 04:16:51 INFO TaskSetManager: Starting task 0.0 in stage 0.0 (TID 0) (bogon, executor driver, partition 0, PROCESS_LOCAL, 4578 bytes) taskResourceAssignments Map()
23/03/29 04:16:51 INFO Executor: Running task 0.0 in stage 0.0 (TID 0)
23/03/29 04:16:52 INFO Executor: Finished task 0.0 in stage 0.0 (TID 0). 1008 bytes result sent to driver
23/03/29 04:16:52 INFO TaskSetManager: Starting task 1.0 in stage 0.0 (TID 1) (bogon, executor driver, partition 1, PROCESS_LOCAL, 4578 bytes) taskResourceAssignments Map()
23/03/29 04:16:52 INFO Executor: Running task 1.0 in stage 0.0 (TID 1)
23/03/29 04:16:52 INFO TaskSetManager: Finished task 0.0 in stage 0.0 (TID 0) in 1203 ms on bogon (executor driver) (1/2)
23/03/29 04:16:52 INFO Executor: Finished task 1.0 in stage 0.0 (TID 1). 965 bytes result sent to driver
23/03/29 04:16:52 INFO TaskSetManager: Finished task 1.0 in stage 0.0 (TID 1) in 57 ms on bogon (executor driver) (2/2)
23/03/29 04:16:52 INFO TaskSchedulerImpl: Removed TaskSet 0.0, whose tasks have all completed, from pool 
23/03/29 04:16:52 INFO DAGScheduler: ResultStage 0 (reduce at SparkPi.scala:38) finished in 1.599 s
23/03/29 04:16:52 INFO DAGScheduler: Job 0 is finished. Cancelling potential speculative or zombie tasks for this job
23/03/29 04:16:52 INFO TaskSchedulerImpl: Killing all running tasks in stage 0: Stage finished
23/03/29 04:16:52 INFO DAGScheduler: Job 0 finished: reduce at SparkPi.scala:38, took 1.739298 s
Pi is roughly 3.138275691378457
23/03/29 04:16:52 INFO SparkUI: Stopped Spark web UI at http://bogon:4040
23/03/29 04:16:52 INFO MapOutputTrackerMasterEndpoint: MapOutputTrackerMasterEndpoint stopped!
23/03/29 04:16:52 INFO MemoryStore: MemoryStore cleared
23/03/29 04:16:52 INFO BlockManager: BlockManager stopped
23/03/29 04:16:52 INFO BlockManagerMaster: BlockManagerMaster stopped
23/03/29 04:16:52 INFO OutputCommitCoordinator$OutputCommitCoordinatorEndpoint: OutputCommitCoordinator stopped!
23/03/29 04:16:52 INFO SparkContext: Successfully stopped SparkContext
23/03/29 04:16:52 INFO ShutdownHookManager: Shutdown hook called
23/03/29 04:16:52 INFO ShutdownHookManager: Deleting directory /tmp/spark-5033864b-9b59-422b-a728-12f2b7f5cbb5
23/03/29 04:16:52 INFO ShutdownHookManager: Deleting directory /tmp/spark-49bfd5a7-4e03-4675-a295-27466318bb26
[root@bogon bin]# 
```

