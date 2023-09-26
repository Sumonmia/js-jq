//text change
function textChange(){
    document.getElementById('h2').innerHTML="Hello World";
}
function textWelcome(){
    document.getElementById('p').innerHTML="Welcome to JS";
}
function alertMessage(){
    alert ('This is an alert message on window');
}

function happy(){
    document.getElementById('h3').innerHTML="Hope You are Doing Well";
}

function showDate(){
    document.getElementById("d_h2").innerHTML=Date();
}
//date show
function end(){
    document.getElementById('h4').innerHTML="TATA Bye Bye, See you soon";
}
//bulb on off
function bulbOn(){
    document.getElementById("img").src ="img/pic_bulbon.gif";
}

function bulbOff(){
    document.getElementById("img").src ="img/pic_bulboff.gif";
}
//font style change
function fontChange(){
    document.getElementById("f_h2").style.fontSize ="80px";
}
//document.write
function dWrite(){
    document.write(5+7);
}
//console.log
function cWrite(){
    console.log(5*7);
}

//Jquery
$(document).ready(function(){
    // alert
    $('#salert').on('click',function(){
        alert('welcome to jq era');
    })
    // show/hide
    $('.show').on('click', function(){
        $('#j_h3').show();
    })
    $('.hide').on('click', function(){
        $('#j_h3').hide();
    })
    //show/hide/toggle
    $('#show').on('mouseover', function(){
        $('#jq_h2').show();
    })
    $('#hide').on('mouseover', function(){
        $('#jq_h2').hide();
    })
    $('#tog').on('mouseover', function(){
        $('#jq_h2').toggle();
    })
    //fadein/fadeout
    $('#f_in').on('click', function(){
        $('.jq_h3').fadeIn();
    })
    $('#f_out').on('click', function(){
        $('.jq_h3').fadeOut();
    })
    $('#f_tog').on('click', function(){
        $('.jq_h3').fadeToggle();
    })
    //ques-answer

    $('.ques').on('click', function(){
        $('.ans').slideToggle(1000);
    })
    $('#m_in').on('mouseenter', function(){
        $('#m_show').show(500);
    })
    $('#m_in').on('mouseout', function(){
        $('#m_show').hide(500);
    })
    // Dragable
    $( "#draggable" ).draggable();
    // autocomplete

    var data = [
        "Html",
        "Css",
        "JS",
        "Jquery",
        "Bootstrap"
    ];
    $("#input").autocomplete({
        source: data
    })
    // resizeable
    $("#resize").resizable();
    // sortable
    $( "#sortable" ).sortable();
    // datepicker
    $('#date').datepicker();
    // tooltip
    $('#age').tooltip();

})