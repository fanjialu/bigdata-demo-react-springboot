#!/bin/bash

# 检查CPU使用率
check_cpu() {
    cpu_threshold=80  # 设置CPU使用率阈值，超过该阈值则视为异常
    cpu_usage=$(top -b -n 1 | grep "Cpu(s)" | awk '{print $2}')
    
    if (( $(echo "$cpu_usage > $cpu_threshold" | bc -l) )); then
        echo "CPU使用率过高: $cpu_usage%"
    else
        echo "CPU使用率正常: $cpu_usage%"
    fi
}

# 检查内存使用情况
check_memory() {
    memory_threshold=80  # 设置内存使用率阈值，超过该阈值则视为异常
    memory_usage=$(free | grep Mem | awk '{print $3/$2 * 100}')
    
    if (( $(echo "$memory_usage > $memory_threshold" | bc -l) )); then
        echo "内存使用率过高: $memory_usage%"
    else
        echo "内存使用率正常: $memory_usage%"
    fi
}

# 检查硬盘空间使用情况
check_disk() {
    disk_threshold=80  # 设置硬盘空间使用率阈值，超过该阈值则视为异常
    disk_usage=$(df -h | awk '$NF=="/"{print $5}' | sed 's/%//')
    
    if (( $(echo "$disk_usage > $disk_threshold" | bc -l) )); then
        echo "硬盘空间使用率过高: $disk_usage%"
    else
        echo "硬盘空间使用率正常: $disk_usage%"
    fi
}

# 检查指定进程是否存在
check_process() {
    process_name="$1"
    process_count=$(ps aux | grep -v grep | grep "$process_name" | wc -l)
    
    if [ "$process_count" -gt 0 ]; then
        echo "进程 $process_name 正在运行"
    else
        echo "进程 $process_name 未运行"
    fi
}

# 调用各个监控函数进行检查
check_cpu
check_memory
check_disk
check_process "namenode"  
