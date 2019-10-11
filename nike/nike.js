
document.onscroll = function(){
    // console.log(document.documentElement.scrollTop)
    var sT = document.documentElement.scrollTop;
    // console.log(sT)
    var main =document.getElementById("main").children[0];
    var p = main.children[0];
    if(sT >= 61){
        main.className = "huadong";
    }else{
        main.className = "meibian";
    }
    var oUl = main.children[1];
    var li1 = oUl.children[0];
    var li2 = oUl.children[1];
    // console.log(li1)
    var erji = li2.children[1];
    li2.onclick = function(){
        var span = li2.children[0];
        if(erji.style.display=="block"){
            erji.style.display="none"; 
            span.className = "iconfont icon-xiabiao"
        }else{
            erji.style.display="block";
            span.className = "iconfont icon-shangbiao"
        }
        
        // console.log(span)
        
    }
    // console.log(erji)
    
}

$("#sousuo").focus(function(){
    $("#sousuo").animate({
        "width":"220px"
    },500)
})
$("#sousuo").blur(function(){
    $("#sousuo").animate({
        "width":"160px"
    },500)
})

var zuobian = $(".zuobian");

// 划上去换图
var imG = $('.imG');
var small = $('.small');
for(var i=0;i<small.length;i++){
    $(".small").eq(i).mouseenter(function(){
        let a =$(this).index();
        $(".imG").eq(a).css("display","none");
        $(".tupian").eq(a).css("display","block");
        var xiaotu = $(".tupian").eq(a).children('img');
        for(let j=0;j<xiaotu.length;j++){
            xiaotu[j].onmouseenter = function(){
                var b = xiaotu[j].getAttribute("src");
                // console.log(b)
                var img = document.createElement("img");
                img.src=b;
                $(".img6").eq(a).html(img);
            }
        }
    })
    small[i].onmouseleave = function(){
        $(".imG").css("display","block");
        $(".tupian").css("display","none");
    }
}

// 点击收缩
var ss = $(".ss");
// console.log(ss);

for(let i=0;i<ss.length;i++){
    var zhuangtai = false;
    let height = $(".ul").eq(i).css("height");
    ss.eq(i).click(function(){
        var timer=null;
        let ss = document.getElementsByClassName("ss");
        if($('.ul').eq(i).children().css("display")=="none"){
            $('.ul').eq(i).animate({
                height:height,
                
            },500);
            // console.log(height)
            zhuangtai = true;
            clearInterval(timer);
            timer=setInterval(function(){
                clearInterval(timer);
                $('.ul').eq(i).children().css("display","block")
            },500)
        }else{
            $('.ul').eq(i).animate({
                height:'0px',
                // display:"none"
            },500)
            zhuangtai = false;
            clearInterval(timer);
            timer=setInterval(function(){
                clearInterval(timer);
                $('.ul').eq(i).children().css("display","none")
            },400)     
        }
        // console.log(ss[i].children[0]);
        if(zhuangtai==false){
            ss[i].children[0].className = "iconfont icon-shangbiao";
        }else{
            ss[i].children[0].className = "iconfont icon-xiabiao";
        }
    }) 
}


window.onscroll = function(){
    let scrolltop =document.documentElement.scrollTop;
    let a = $(".dw1").parent();
    let b = document.documentElement.offsetHeight;
    if(scrolltop>=1770){
        a.addClass("dw")
    }else if(scrolltop<1770||scrolltop-300>=b){
        a.removeClass("dw");
    }
    console.log(scrolltop+1234)
    console.log(b)
    console.log((scrolltop-1234)>=b)
    // if(scrolltop-300>=b){
    //     a.removeClass("dw");
    // }
}
var sx = $(".sx");
var sx = true;
$(".sx").click(function(){
    if(sx == true){
        sx = false;
        let timer = null;
        clearInterval(timer);
        $("#zuobian").animate({
            "margin-left":"-400px"
        },400)
        timer = setInterval(function(){
            clearInterval(timer);
            $("#zuobian").css("display","none");
        },200)
        $("#youbian").animate({
            "width":"1600px"
        })
    }else{
        sx = true;
        let timer = null;
        clearInterval(timer);
        $("#zuobian").animate({
            "margin-left":"15px"
        },400)
        timer = setInterval(function(){
            clearInterval(timer);
            $("#zuobian").css("display","block");
        },200)
    }
})








