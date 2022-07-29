// Nút backtop

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        }
        else {
            $('#backtop').fadeOut();
        }
    });

    $("#backtop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});

$("section.afmenu h1").addClass("wow animate__flipInX")

$("div.logo").addClass("wow animate__lightSpeedInLeft")
$("div.course > h3").addClass("wow animate__fadeInUp")
$("div.flex.course  > div").addClass("wow animate__fadeIn animate__slow")
$("div.course > div > div").addClass("wow animate__fadeIn animate__slow")
$(".odd").addClass("wow animate__fadeInLeft")
$(".even").addClass("wow animate__fadeInRight")

$("div.reviews:nth-child(even)").addClass("wow animate__fadeInRight")
$("div.reviews:nth-child(odd)").addClass("wow animate__fadeInLeft")

$("div.item:nth-child(odd)").addClass("wow animate__fadeInLeft")
$("div.item:nth-child(even)").addClass("wow animate__fadeInRight")



wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
wow.init();

function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
  }

  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Nhập không đúng UserName hoặc mật khẩu");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Đăng nhập thành công");
      window.location.href = "../index.html";
    } else {
      alert("Đăng nhập thất bại");
    }
  }

function search() {
    var k = document.getElementById("kw")
    if (k != null) {
        k = k.value

        var items = document.querySelectorAll("div.course > div.course > div")

        for (var i = 0; i < items.length; i++) {
            items[i].getElementsByTagName("h4")[0].innerText

            if (h4.indexOf(k) >= 0)
                items[i].style.outline = "2px solid black"
        }
           
    }
}

$(document).ready(function() {
    $("btn-search").click(function() {
        var k = $("#kw").val()

        $(`div.course div.course h4:contains(${k})`).parent().parent().parent().css("outline", "2px solid black")

        // var items = $("div.course h4")
        // for (var i = 0; i < items.length; i++)
        //     if ($(items[i]).text().indexOf(k) >= 0)
        //         $(items[i]).parent().perent().css("outline", "2px solid black")

        setTimeout(function() {
            $("div.course").css("outline", "none")
        }, 3000)
    })
})

