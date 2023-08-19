const openBtn = document.querySelector(".openbtn1");
const navList = document.querySelector(".nav__item");
openBtn.addEventListener("click", () => {
  if (openBtn.classList.contains("active")) {
    openBtn.classList.remove("active");
    navList.classList.add("hide");
  } else {
    openBtn.classList.add("active");
    navList.classList.remove("hide");
  }
});

// $(document).ready(function() {
//   var images = $(".fade__list");
//   var currentImage = 0;
//   var imageCount = images.length;

//   function showNextImage() {
//     images.eq(currentImage).animate({ opacity: 0 }, 1000, function() {
//       currentImage = (currentImage + 1) % imageCount;
//       images.eq(currentImage).animate({ opacity: 1 }, 1000);
//     });
//   }

//   showNextImage();
//   setInterval(showNextImage, 5000);
// });


$(".intro__content_left").on(
  "inview",
  function (isInView) {
    if (isInView) {
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass("slide-left");
    }
  }
);
// BBBが選ばれる理由（スライド右）
$(".intro__content_right").on(
  "inview",
  function (isInView) {
    if (isInView) {
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass("slide-right");
    }
  }
);
// 受講生の声（ふきだし）
$(".inview-balloon").on(
  "inview",
  function (isInView) {
    if (isInView) {
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass("balloon");
    }
  }
);
