

var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");

var player = 1;

var s1 = 0;
var s2 = 0;
var s3 = 0;
var s4 = 0;
var s5 = 0;
var s6 = 0;
var s7 = 0;
var s8 = 0;
var s9 = 0;

var srcr = 0;
var srcb = 0;

var resr = document.getElementById("sr")
var resb = document.getElementById("sb")

resr.innerHTML = srcr;
resb.innerHTML = srcb;

var shape1 = "url('images/x.png')"
var shape2 = "url('images/o.png')"

var shapCounter = 1

function Box1() {
    var RedOrBlue = player % 2

    if (s1 == 0) {
        if (RedOrBlue == 1) {
            t1.style.background = shape1
            t1.style.backgroundColor="white"
            player++
            s1 = 1
        }else{
            t1.style.background = shape2
            t1.style.backgroundColor="white"
            player++
            s1 = 2
        }
       
    }
    chekbox1()
    return s1
}
function chekbox1(){
    if (s1 ==1 && s2== 1 && s3==1) {
        t3.style.background = shape1
        t3.style.backgroundColor = "white";
        Redwinner()
    }
    else if(s1 ==1 && s4== 1 && s7==1){
        Redwinner()
    }
    else if(s1 ==1 && s5== 1 && s9==1){
        Redwinner()
    }
    else if (s1 ==2 && s2== 2 && s3==2) {
        bluewinner()
    }
    else if(s1 ==2 && s4== 2 && s7==2){
        bluewinner()
    }
    else if(s1 ==2 && s5== 2 && s9 == 2){
        bluewinner()
    }

}
function Redwinner() {
    
    alert("Red is winner")
    

    t1.style.background = "none";
    t1.style.backgroundColor = "white";
    t2.style.background = "none";
    t2.style.backgroundColor = "white";
    t3.style.background = "none";
    t3.style.backgroundColor = "white";
    t4.style.background = "none";
    t4.style.backgroundColor = "white";
    t5.style.background = "none";
    t5.style.backgroundColor = "white";
    t6.style.background = "none";
    t6.style.backgroundColor = "white";
    t7.style.background = "none";
    t7.style.backgroundColor = "white";
    t8.style.background = "none";
    t8.style.backgroundColor = "white";
    t9.style.background = "none";
    t9.style.backgroundColor = "white";

    s1 = 0;
    s2 = 0;
    s3 = 0;
    s4 = 0;
    s5 = 0;
    s6 = 0;
    s7 = 0;
    s8 = 0;
    s9 = 0;
    
    player = 1
    srcr++
    resr.innerHTML = srcr;
}

function bluewinner() {
    alert("Blue is winner")
        
    t1.style.background = "none";
    t1.style.backgroundColor = "white";
    t2.style.background = "none";
    t2.style.backgroundColor = "white";
    t3.style.background = "none";
    t3.style.backgroundColor = "white";
    t4.style.background = "none";
    t4.style.backgroundColor = "white";
    t5.style.background = "none";
    t5.style.backgroundColor = "white";
    t6.style.background = "none";
    t6.style.backgroundColor = "white";
    t7.style.background = "none";
    t7.style.backgroundColor = "white";
    t8.style.background = "none";
    t8.style.backgroundColor = "white";
    t9.style.background = "none";
    t9.style.backgroundColor = "white";

    s1 = 0;
    s2 = 0;
    s3 = 0;
    s4 = 0;
    s5 = 0;
    s6 = 0;
    s7 = 0;
    s8 = 0;
    s9 = 0;

    player = 1
    srcb++
    resb.innerHTML = srcb;
}
function Box2() {

    var RedOrBlue = player % 2;

    if (s2 == 0) {
        if (RedOrBlue == 1) {
            t2.style.background = shape1;
            t2.style.backgroundColor = "white";
            player++;
            s2 = 1;
        } else {
            t2.style.background = shape2;
            t2.style.backgroundColor = "white";
            player++;
            s2 = 2;
        }
    }

    CheackBox2();
    return s2;
    
}
function CheackBox2(){
    if (s1 ==1 && s2== 1 && s3==1) {
        Redwinner()
    }
    else if(s2 ==1 && s5== 1 && s8==1){
        Redwinner()
    }
   
    else if (s1 ==2 && s2== 2 && s3==2) {
        bluewinner()
    }
    else if(s2 ==2 && s5==2 && s8==2){
        bluewinner()
    }
    

}
function Box3() {

    var RedOrBlue = player % 2;

    if (s3 == 0) {
        if (RedOrBlue == 1) {
            t3.style.background = shape1;
            t3.style.backgroundColor = "white";
            player++;
            s3 = 1;
        } else {
            t3.style.background = shape2;
            t3.style.backgroundColor = "white";
            player++;
            s3 = 2;
        }
    }

    CheackBox3();
    return s3;
    
}
function CheackBox3() {
    if (s1 == 1 && s2 == 1 && s3 == 1) {
        Redwinner()
    } else if (s3 == 1 && s6 == 1 && s9 == 1) {
        Redwinner()
    } else if (s3 == 1 && s5 == 1 && s7 == 1) {
        Redwinner()
    } else if (s1 == 2 && s2 == 2 && s3 == 2) {
        bluewinner()
    } else if (s3 == 2 && s6 == 2 && s9 == 2) {
        bluewinner()
    } else if (s3 == 2 && s5 == 2 && s7 == 2) {
        bluewinner()
    }       
}
function Box4() {

    var RedOrBlue = player % 2;

    if (s4 == 0) {
        if (RedOrBlue == 1) {
            t4.style.background = shape1;
            t4.style.backgroundColor = "white";
            player++;
            s4 = 1;
        } else {
            t4.style.background = shape2;
            t4.style.backgroundColor = "white";
            player++;
            s4 = 2;
        }
    }

    CheackBox4();
    return s4;
    
}
function CheackBox4() {
    if (s1 == 1 && s4 == 1 && s7 == 1) {
        Redwinner()
    } else if (s4 == 1 && s5 == 1 && s6 == 1) {
        Redwinner()
    } else if (s1 == 2 && s4 == 2 && s7 == 2) {
        bluewinner()
    } else if (s4 == 2 && s5 == 2 && s6 == 2) {
        bluewinner()
    }       
}
function Box5() {

    var RedOrBlue = player % 2;

    if (s5 == 0) {
        if (RedOrBlue == 1) {
            t5.style.background = shape1;
            t5.style.backgroundColor = "white";
            player++;
            s5 = 1;
        } else {
            t5.style.background = shape2;
            t5.style.backgroundColor = "white";
            player++;
            s5 = 2;
        }
    }

    CheackBox5();
    return s5;
    
}
function CheackBox5() {
    if (s2 == 1 && s5 == 1 && s8 == 1) {
        Redwinner()
    } else if (s4 == 1 && s5 == 1 && s6 == 1) {
        Redwinner()
    } 
    else if (s1 == 2 && s5 == 2 && s9 == 2) {
        Redwinner()
        
    }   else if (s2 == 2 && s5 == 2 && s8 == 2) {
        bluewinner()
    } else if (s4 == 2 && s5 == 2 && s6 == 2) {
        bluewinner()
    }    
    else if (s1 == 2 && s5 == 2 && s9 == 2) {
        bluewinner()
    }       
}
function Box6() {

    var RedOrBlue = player % 2;

    if (s6 == 0) {
        if (RedOrBlue == 1) {
            t6.style.background = shape1;
            t6.style.backgroundColor = "white";
            player++;
            s6 = 1;
        } else {
            t6.style.background = shape2;
            t6.style.backgroundColor = "white";
            player++;
            s6 = 2;
        }
    }

    CheackBox6();
    return s6;
    
}
function CheackBox6() {
    if (s3 == 1 && s6 == 1 && s9 == 1) {
        Redwinner()
    } else if (s4 == 1 && s5 == 1 && s6 == 1) {
        Redwinner()
    } else if (s3 == 2 && s6 == 2 && s9 == 2) {
        bluewinner()
    } else if (s4 == 2 && s5 == 2 && s6 == 2) {
        bluewinner()
    }       
}
function Box7() {

    var RedOrBlue = player % 2;

    if (s7 == 0) {
        if (RedOrBlue == 1) {
            t7.style.background = shape1;
            t7.style.backgroundColor = "white";
            player++;
            s7 = 1;
        } else {
            t7.style.background = shape2;
            t7.style.backgroundColor = "white";
            player++;
            s7 = 2;
        }
    }

    CheackBox7();
    return s7;
    
}
function CheackBox7() {
    if (s1 == 1 && s4 == 1 && s7 == 1) {
        Redwinner()
    } else if (s7 == 1 && s8 == 1 && s9 == 1) {
        Redwinner()
    } else if (s1 == 2 && s4 == 2 && s7 == 2) {
        bluewinner()
    } else if (s7 == 2 && s8 == 2 && s9 == 2) {
        bluewinner()
    }       
}
function Box8() {

    var RedOrBlue = player % 2;

    if (s8 == 0) {
        if (RedOrBlue == 1) {
            t8.style.background = shape1;
            t8.style.backgroundColor = "white";
            player++;
            s8 = 1;
        } else {
            t8.style.background = shape2;
            t8.style.backgroundColor = "white";
            player++;
            s8 = 2;
        }
    }

    CheackBox8();
    return s8;
    
}
function CheackBox8() {
    if (s2 == 1 && s5 == 1 && s8 == 1) {
        Redwinner()
    } else if (s7 == 1 && s8 == 1 && s9 == 1) {
        Redwinner()
    } else if (s2 == 2 && s5 == 2 && s8 == 2) {
        bluewinner()
    } else if (s7 == 2 && s8 == 2 && s9 == 2) {
        bluewinner()
    }       
}
function Box9() {

    var RedOrBlue = player % 2;

    if (s9 == 0) {
        if (RedOrBlue == 1) {
            t9.style.background = shape1;
            t9.style.backgroundColor = "white";
            player++;
            s9 = 1;
        } else {
            t9.style.background = shape2;
            t9.style.backgroundColor = "white";
            player++;
            s9 = 2;
        }
    }

    CheackBox9();
    return s9;
    
}
function CheackBox9() {
    if (s3 == 1 && s6 == 1 && s9 == 1) {
        Redwinner()
    } else if (s7 == 1 && s8 == 1 && s9 == 1) {
        Redwinner()
    }
    else if (s1 == 1 && s5 == 1 && s9 == 1) {
        Redwinner()
    }     
     else if (s3 == 2 && s6 == 2 && s9 == 2) {
        bluewinner()
    } else if (s7 == 2 && s8 == 2 && s9 == 2) {
        bluewinner()
    }
    else if (s1 == 2 && s5 == 2 && s9 == 2) {
        bluewinner()
    }            
}

function Reset() {
    console.log("farazaman");
    t1.style.background = "none";
    t1.style.backgroundColor = "white";
    t2.style.background = "none";
    t2.style.backgroundColor = "white";
    t3.style.background = "none";
    t3.style.backgroundColor = "white";
    t4.style.background = "none";
    t4.style.backgroundColor = "white";
    t5.style.background = "none";
    t5.style.backgroundColor = "white";
    t6.style.background = "none";
    t6.style.backgroundColor = "white";
    t7.style.background = "none";
    t7.style.backgroundColor = "white";
    t8.style.background = "none";
    t8.style.backgroundColor = "white";
    t9.style.background = "none";
    t9.style.backgroundColor = "white";

    s1 = 0;
    s2 = 0;
    s3 = 0;
    s4 = 0;
    s5 = 0;
    s6 = 0;
    s7 = 0;
    s8 = 0;
    s9 = 0;

    player = 1;
    scrr = 0;
    scrb = 0;
}


function Change() {
    shapCounter++

    if (shapCounter > 5) {
        shapCounter = 1
    }
    if (shapCounter ==1) {
        shape1 = "url('images/x.png')"
        shape2 = "url('images/o.png')";
    }
    if(shapCounter == 2){
        shape1 = "url('images/d.png')";
        shape2 = "url('images/c.png')";
    }
    if(shapCounter == 3){
        shape1 = "url('images/s.png')";
        shape2 = "url('images/f.png')";
    }
    if(shapCounter == 4){
        shape1 = "url('images/q.png')";
        shape2 = "url('images/k.png')";
    }
    if(shapCounter == 5){
        shape1 = "url('images/h.png')";
        shape2 = "url('images/g.png')";
    }
}