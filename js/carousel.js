
        var item=document.getElementsByClassName("item");
        var goPreBtn=document.getElementById("goPre");
        var goNextBtn=document.getElementById("goNext");
        var points=document.getElementsByClassName('point');               //点的获取
        var index=0;            //表示第几张图片，第index图片有active这个类名
        //同时为第几个点

        var clearActive=function () {
            for (var i=0;i<item.length;i++){
                item[i].className="item";         //重定class规制都为item
                points[i].className="point";        //清除点
            }
        }

        var goIndex = function () {
            clearActive();          //重定class规制都为item跟point
            /*console.log(index);         //在console监视*/
            item[index].className="item active";            //展示第[index]张
            points[index].className="point active";         //展示第[index]点
        }

        var goNext=function () {
            if(index<4){
                index++;            //下一张
            }else {
                index=0;            //最后调回第一张[index=0]
            }
            goIndex();          //执行展示第[index+1]张
        }

        goNextBtn.addEventListener('click',function () {            //点击goNext触发的函数
            goNext();           //下一张
        })

        //同理上一张
        var goPre=function () {
            if(index>0){
                index--;            //上一张
            }else {
                index=4;            //最后调回最后一张[index=4]
            }
            goIndex();          //执行展示第[index+1]张
        }

        goPreBtn.addEventListener('click',function () {            //点击goPre触发的函数
            goPre();            //上一张
        })

        for(var i=0;i<points.length;i++){           //点击点事件
            points[i].addEventListener('click',function () {
                var pointIndex=this.getAttribute('data-index');
                /*console.log('pointIndex'); */           //console.log测试
                index=pointIndex;
                goIndex();
            })
        }

var time=0;         //定义一个定时器参数

setInterval(function () {               //便于控制
            time++;
            if (time==30){
                goNext();           //3秒跳一次
            }
            if(time>30){
                time=0;             //重置time'接着上一个循环
            }
        },100)
        
 var goIndex = function () {
            clearActive();          //重定class规制都为item跟point
            /*console.log(index);         //在console监视*/
            item[index].className="item active";            //展示第[index]张
            points[index].className="point active";         //展示第[index]点
             time=0;                            //重定定时器time'三秒后才能跳转
        }
        
//修改点击点事件，添加一行代码重置时间
 for(var i=0;i<points.length;i++){           //点击点事件
                points[i].addEventListener('click',function () {
                    var pointIndex=this.getAttribute('data-index');
                    /*console.log('pointIndex'); */           //console.log测试
                    index=pointIndex;
                    goIndex();
                    time=0;         //重置time'三秒后才能跳转
                })
   }
