# ROS安装和配置

---

**配置Ubuntu的软件源**

看了文档中给出的配置源的相关网站，里面内容太丰富，看的人不知从何入手，之后自己在网上搜了一下相关内容，觉得把源设置为中国的就基本可以满足本次配置的要求了，其他设置都使用默认值。
![配置源][1]

---
**添加软件源到sources.list**

    $ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu trusty main" > /etc/apt/sources.list.d/ros-latest.list'
    
一旦添加了正确的软件源，操作系统就知道去哪里下载程序，并根据命令自动安装软件。

---
**设置密钥**
    
    $ wget http://packages.ros.org/ros.key -O - | sudo apt-key add -

---
**安装**

    $ sudo apt-get update
$ sudo apt-get install ros-indigo-desktop-full //完全安装

---
**初始化rosdep**

    $ sudo rosdep init
$ rosdep update

---
**安装rosinstall**

    $ sudo apt-get install python-rosinstall

---
**设置环境**

    $ echo "source /opt/ros/indigo/setup.bash" >> ~/.bashrc
$ source ~/.bashrc  //使环境变量设置立即生效

---
**管理环境**

如果在寻找或者使用ROS package上有问题，需要确定ROS环境变量设置，检查是否有ROS_ROOT和ROS_PACKAGE_PATH这些环境变量。

    $ export | grep ROS
    
如果在Ubuntu上使用apt工具安装ROS，那么在'/opt/ros/indigo/'目录中有setup.*sh文件，可以这样source它们：

    $ source /opt/ros/indigo/setup.bash
    
---
**创建ROS工作环境**

    $ mkdir -p ~/catkin_ws/src
$ cd ~/catkin_ws/src
    $ catkin_init_workspace
    
可以看到在src文件夹中可以看到一个CMakeLists.txt的链接文件，即使这个工作空间是空的（在src中没有package），任然可以建立一个工作空间。

    $ cd ~/catkin_ws/
$ catkin_make

启动新的setup.*sh 文件

    $ source devel/setup.bash

为了确认环境变量是否被setup脚本覆盖了，可以运行一下命令确认当前目录是否在环境变量中：

    $ echo $ROS_PACKAGE_PATH

输出：

    /home/sujiao/catkin_ws/src:/opt/ros/indigo/share:/opt/ros/indigo/stacks

至此，环境已经建立好了！


  [1]: http://p1.bqimg.com/567571/9c1178b6b0fc5560.png