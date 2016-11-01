#死锁
----------

 **1. 死锁停在第几次的截图**
 
![死锁停在第几次的截图][1]

----------

 **2. 产生死锁的4个必要条件**
 
    死锁就是两个或者多个进程，互相请求对方占有的资源。
     
 - 互斥条件：一个资源每次只能被一个进程使用
 -  请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放
 -  不剥夺条件:进程已获得的资源，在末使用完之前，不能强行剥夺
 -  循环等待条件:若干进程之间形成一种头尾相接的循环等待资源关系

----------

 **3. 程序代码**



    class A{
	synchronized void methodA(B b) { b.last();	}
	synchronized void last(){
		System.out.println("Inside A.last()");
	}
    }
    class B{
	synchronized void methodB(A a) { a.last(); }
	synchronized void last(){
		System.out.println("Inside B.last()");
	}
    }
    class Deadlock implements Runnable{
    	A a=new A();
    	B b=new B();

	Deadlock(){
		Thread t = new Thread(this);
		int count = 20000;
		
		t.start();
		while(count-->0);
		a.methodA(b);
	}
	public void run(){ b.methodB(a); }
	
	public static void main(String args[]){	new Deadlock(); }
    }

----------


  **4. 对上述程序产生死锁的解释**
  
       程序中定义了两个类A,B，类间方法都用关键字synchronized修饰，能够保证在同一时刻最多只有一个线程执行该段代码。当一个线程访问object的一个synchronized同步代码块或同步方法时，其他线程对object中所有其它synchronized同步代码块或同步方法的访问将被阻塞。
       定义Runnalbe函数，创建两个对象a,b，然后定义对应的run函数令b去访问a，定义死锁函数在20000time内让a访问b，再定义主函数执行死锁函数。原则上来说，该代码不能执行，但因为run函数和死锁函数的执行并不是严格意义上的同步，所有会有一段时间两个函数能够在时间差内执行，当时间差缩小至对象a,b之间形成一种头尾相接的循环等待资源关系，则发生死锁。该死锁发生的时间是不一定的，跟当时电脑运行情况有关。

  [1]: http://7xrn7f.com1.z0.glb.clouddn.com/16-11-1/52126072.jpg