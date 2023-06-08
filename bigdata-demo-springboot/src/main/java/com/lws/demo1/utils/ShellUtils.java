package com.lws.demo1.utils;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
@Service
public class ShellUtils {

    private static final Logger LOGGER = LoggerFactory.getLogger(ShellUtils.class);

    private static final long THREAD_SLEEP_TIME = 10;

    private static final int DEFAULT_WAIT_TIME = 20 * 60 * 1000;

    /**
     *运行脚本文件方法
     * @param cmd Linux
     * @return
     */
    public static List runShell(String cmd) {
        String[] command = new String[]{"/bin/sh", "-c", cmd};
        try {
            Process process = Runtime.getRuntime().exec(command);
            LOGGER.info("Command [{}] executed successfully.", cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader wr = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String result;
            List list = new ArrayList<>();
            while ((result = br.readLine()) != null) {
                list.add(result);
            }
            while ((result = wr.readLine()) != null) {
                list.add(result);
            }
            br.close();
            wr.close();
            Thread.sleep(THREAD_SLEEP_TIME);
            System.out.println(process.exitValue());
            return list;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     *运行命令方法
     * @param cmd Linux
     * @return
     */
    public static List runCmd(String cmd) {
        try {
            Process process = Runtime.getRuntime().exec(cmd);
            LOGGER.info("Command [{}] executed successfully.", cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader wr = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String result;
            List list = new ArrayList<>();
            while ((result = br.readLine()) != null) {
                list.add(result);
            }
            while ((result = wr.readLine()) != null) {
                list.add(result);
            }
            br.close();
            wr.close();
            Thread.sleep(THREAD_SLEEP_TIME);
            System.out.println(process.exitValue());
            return list;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}