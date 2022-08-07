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
$("section.courses > div > h3").addClass("wow animate__fadeInUp")
$("div.item:nth-child(odd)").addClass("wow animate__fadeInLeft")
$("div.item:nth-child(even)").addClass("wow animate__fadeInRight")

$("h1.register").addClass("wow animate__fadeInDown")

wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
wow.init();

//đăng ký

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

//đăng nhập

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

//nút bấm đăng ký

function registerNewTab() {
  location.assign("register-course.html");
}

//đăng ký

function registerCourse() {
  let name = document.getElementById("RegisterNameId").value;
  let email = document.getElementById("RegisterEmailId").value;
  let phone = document.getElementById("RegisterPhoneId").value;
  let course = document.getElementById("RegisterCourseId").value;

  if (!name) {
    alert("Vui lòng nhập tên!");
  }
  if (!email) {
    alert("Vui lòng nhập email!");
  }
  if (!phone) {      
  alert("Vui lòng nhập số điện thoại!");
  }

  if (name || email || phone) {
    alert("Đăng ký thành công! Trung tâm sẽ liên hệ cho bạn sớm nhất để xác nhận nhập học! Bạn nhớ chú ý điện thoại!!");
    location.assign("../index.html")
  }
}

//liên hệ

function contact() {
  let name = document.getElementById("contactNameId").value;
  let email = document.getElementById("contactEmailId").value;
  let phone = document.getElementById("contactPhoneId").value;
  let content = document.getElementById("contactContentId").value;

  if (!name) {
    alert("Vui lòng nhập tên!");
  }
  if (!email) {
    alert("Vui lòng nhập email!");
  }
  if (!phone) {      
  alert("Vui lòng nhập số điện thoại!");
  }
  if (!content) {
    alert("Vui lòng nhập nội dung!");
  }

  if (name && email && phone && content) {
    alert("Cảm ơn bạn đã liên hệ! Câu hỏi của bạn sẽ được giải đáp sớm nhất!!");
    location.assign("../index.html")
  }
}

//Nhận tài liệu

function receiveDoc() {
  let name = document.getElementById("DocNameId").value;
  let email = document.getElementById("DocEmailId").value;
  let phone = document.getElementById("DocPhoneId").value;
  let content = document.getElementById("docContentId").value;

  if (!name) {
    alert("Vui lòng nhập tên!");
  }
  if (!email) {
    alert("Vui lòng nhập email!");
  }
  if (!phone) {      
  alert("Vui lòng nhập số điện thoại!");
  }
  if (!content) {
    alert("Vui lòng nhập nội dung!");
  }

  if (name && email && phone && content) {
    alert("Tài liệu sẽ được gửi cho bạn sớm nhất! Nhớ chú ý email bạn nhé!");
    location.assign("document.html")
  }
}

//tìm kiếm

//function search() {
  // var k = document.getElementById("search-text")
   
  // if (k != null) {
  //   k = k.value;
  // }

  // var items = document.querySelectorAll("div.hovereffect")

  // for (var i = 0; i < items.length; i++) {
  //   var h4 = items[i].querySelector("div.hovereffect > h4")
  //     if (h4.indexOf(k) >= 0)
  //       items[i].style.outline = "2px solid red";
  // }


  // var k = document.getElementById("search-text");
  // var items = Array.from(document.querySelectorAll("div.hovereffect"));
  // k.value = k.value.toLowerCase();

  // items.forEach(function(el) {
  //   let text = el.innerText;
  //   if (text.indexOf(k.value) > 0)
  //     el.style.display="";
  //   else
  //     el.style.display="none";
  // })
//}


// const toggle_menu_icon = document.querySelector("toggle_menu_icon");
// const toggle_menu = document.querySelector("toggle_menu");

// toggle_menu_icon.onclick = function() {
//   toggle_menu.classList.toggle('hide');
// } 