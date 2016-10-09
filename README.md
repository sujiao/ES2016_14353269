# DOL
***
### Description --- DOL 框架描述

 1. The distributed operation layer (DOL) 
 
           DOL is a software development framework to program parallel applications. The DOL allows to specify applications based on the Kahn process network model of computation and features a simulation engine based on systemC. Moreover, the DOL provides an XML-based specification format to describe the implementation of a parallel application on a multi-processor systems, including binding and mapping.

           The DOL consists of basically three parts:
          
            - DOL Application Programming Interface: The DOL defines a set of computation and communication routines that enable the programming of distributed, parallel applications for the SHAPES platform. Using these routines, application programmers can write programs without having detailed knowledge about the underlying architecture. In fact, these routines are subject to further refinement in the hardware dependent software (HdS) layer. 
            - DOL Functional Simulation: To provide programmers a possibility to test their applications, a functional simulation framework has been developed. Besides functional verification of applications, this framework is used to obtain performance parameters at the application level. 
            - DOL Mapping Optimization: The goal of the DOL mapping optimization is to compute a set of optimal mappings of an application onto the SHAPES architecture platform. In a first step, XML based specification formats have been defined that allow to describe the application and the architecture at an abstract level. Still, all the information necessary to obtain accurate performance estimates is contained. 
          
   ![DOL框架][1]
   
 2. Make工具简介
 
        Linux和Ubuntu环境中，make工具主要被用来进行工程编译和程序链接；Makefile文件：告诉make以何种方式编译源代码和链接程序；make通过比较对应文件（规则的目标和依赖）的最后修改时间，来决定哪些文件需要更新、哪些文件不需要更新。

 3. Ant工具简介及其优点

        - Ant是一种基于Java的build工具；用Java的类来扩展；其本身就是这样一个流程脚本引擎，用于自动化调用程序完成项目的编译，打包，测试等。
        - Ant是纯java语言编写的，具有很好的跨平台性；Ant是由一个内置任务和可选任务组成的。运行时需要一个XML文件(构建文件)，操作简单；容易维护和书写，结构清晰；可以集成到开发环境中。

 4. java与javac简介
 
        用来编译或执行java代码。javac命令用来编译java文件，java命令可以执行生成的class文件。

*** 

### How to install --- DOL 安装笔记
 1. 本次实验环境在linux下进行，需要使用虚拟机安装Ubuntu，但上学期OS课程已经装过，所以该步骤可忽略；
 2. 安装一些必要的环境(ubuntu)，运行如下命令：
 
        $ sudo apt-get update

        $ sudo apt-get install ant
        
        $ sudo apt-get install openjdk-7-jdk
        
        $ sudo apt-get install unzip
 3. 下载文件(使用Vmware虚拟机，也可以从主机拷贝到虚拟机中去）

           我电脑可直接在主机和虚拟机之间复制粘贴文件，而虚拟机网速特别慢，所以采用的是下载后拷贝到虚拟机，两个文件分别是dol_ethz.zip，systemc-2.3.1.tgz；
 4. 解压文件

           运行 $ mkdir dol 新建dol的文件夹，再运行 $ unzip dol_ethz.zip -d dol 将dolethz.zip解压到 dol文件夹中，接着运行 $ tar -zxvf systemc-2.3.1.tgz 解压systemc；
 5. 编译systemc
 
           解压后，运行 $ cd systemc-2.3.1，进入systemc-2.3.1的目录下，运行 $ mkdir objdir 新建一个临时文件夹objdir 并运行 $ cd objdir 进入该文件夹。最后运行$ ../configure CXX=g++ --disable-async-updates ，出现如下界面：
![2][2]

        接着运行 $ sudo make install，按照下图运行 $ cd .. ，$ ls，打开文件目录如下：
![3][3]

        记录当前的工作路径/home/sujiao/systemc-2.3.1；

 6. 编译dol
 
           运行 $ cd ../dol 进入刚刚建立的dol的文件夹，打开文件build_zip.xml，找到下面这段话，就是说上面编译的systemc位置在哪里，

        property name="systemc.inc" value="YYY/include"
        property name="systemc.lib" value="YYY/lib-linux/libsystemc.a"

        把YYY改成上页pwd的结果（注意，对于64位系统的机器，lib-linux要改成lib-linux64）。此处我犯了一个小错误，64位系统指的是虚拟机，而不是主机，我理解错误，改为lib-linux64后之后的配置发生编译失败的错误，返回这步去掉‘64’即可。然后是编译，运行 $ ant -f build_zip.xml all，若成功会显示build successful，如下图所示：
![4][4]

        接着试试运行第一个例子。运行 $ cd build/bin/main 进入build/bin/mian 路径下，编译 $ sudo ant -f runexample.xml -Dnumber=1运行第一个例子，结果如下图所示：
![5][5]

        打开对应文件目录下的example1.dot（打开时提示没有相应程序，需要自己根据提示安装），出现如下结果：
![6][6]     

 7. 其他（运行下面命令更换源文件）

        $ sudo cp /etc/apt/sources.list /etc/apt/sources.list_backup
        
        $ sudo vim /etc/apt/sources.list
        
        $ sudo apt-get update
        
           该步骤是我耗时最多的部分，因为网速太慢了，也没有理解该步是想要做什么，只是花了将近一晚上将命令都运行了一次，期间还安装了好几次vim工具，但执行第二条命令后进入到了vim编辑器页面修改源文件，此处我一脸茫然，忽略通过课上咨询TA获得帮助解决问题。
***
### Experimental experience --- 实验感想、实验心得

        本次实验电脑比较给力，没有出现txt文档里给出的一些莫名的错误，总的来说比较顺利，期间出现的一次‘64位操作系统’的错误前面已经讲过，主要是因为自己对所执行命令的含义没有理解清楚，最后一步修改源文件的也是这样的问题。因为对vim编辑器修改页面比较陌生，求助TA后，被普及了该步骤的作用和含义，并通过另一种手动修改的方式帮助修改了源文件，原本的源文件是美国的，网速特别慢，TA师兄修改为中国的后，再继续第二次的实验配置，网速由之前的几PB，几B上升到了几百KB，简直是质的飞跃啊！ 
        
        谢谢TA的帮助！这次实验的教训就是一定要弄清指令的含义！


  [1]: http://p1.bqimg.com/567571/e8b377682660f074.png
  [2]: http://p1.bqimg.com/567571/331910bd51a797b7.png
  [3]: http://p1.bqimg.com/567571/08db9d9eb2c84923.png
  [4]: http://p1.bqimg.com/567571/ff9274431c380d60.png
  [5]: http://p1.bqimg.com/567571/36c8c4ce8513d3ef.png
  [6]: http://p1.bqimg.com/567571/c57eb136f433758e.png