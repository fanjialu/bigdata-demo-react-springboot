package com.lws.demo1.controller;


import com.lws.demo1.utils.JsonData;
import com.lws.demo1.utils.ShellUtils;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api")
@CrossOrigin
public class Controller {

    /**
     * 根据脚本名测试脚本
     * @param name 需要运行的脚本名称
     * @return
     */
    @GetMapping("/demo1")
    public JsonData demo1(@RequestParam String name){
        String cmd = "sh /root/shell/" + name;
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }

    /**
     * 根据脚本名测试脚本
     * @param name 需要运行的脚本名称
     * @return
     */
    @GetMapping("/demo2")
    public JsonData demo2(@RequestParam String name){
        String cmd = name;
        return JsonData.buildSuccess(ShellUtils.runCmd(cmd));
    }
    /**
     * sparkinstall安装脚本
     * @return
     */
    @GetMapping("/sparkinstall")
    public JsonData sparkinstall(){
        String cmd = "sh /root/shell/sparkinstall.sh";
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }

    /**
     * hadoop安装脚本
     * @return
     */
    @GetMapping("/hadoopinstall")
    public JsonData hadoopinstall(){
        String cmd = "sh /root/shell/hadoopinstall.sh";

        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }

}
