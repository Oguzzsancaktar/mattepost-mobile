var currentPage = 0;
var $content = $('.content');
var $footer = $('.footer__nav');

var $pagesArr = $('.content .page');
var $video = $('#videoFrame');


var videoArr = [
  " ",
  "https://www.youtube.com/embed/CdHcQqs3z-c",
"https://www.youtube.com/embed/ŸrJ8IwqO70JE",
"https://www.youtube.com/embed/jwqUjthoewQ",
"https://www.youtube.com/embed/Sc6nG3-RT68",
"https://www.youtube.com/embed/ZL4sFwEKg_U"
]
function toggleVideo() {
  $video.parents('.video-area').toggleClass("active")
}


function pageAnimation(current){
  let currentVideoSRC =  videoArr[current];

  $video.attr('src', currentVideoSRC)

  $($content).animate({left:`${current * -100}vw`})
  $($footer).animate({left:`${current * -100}vw`})


}

function pageControl(to){

  switch (to) {
    case "next":
    currentPage ++;

    if( currentPage >= $pagesArr.length){
      currentPage = 0
    }
    

      break;

    case "prev":
    currentPage --;


    if( currentPage < 0){
      currentPage = $pagesArr.length - 1;
    }
    
      
      break;
  
    default:
      break;
  }

  pageAnimation(currentPage)
}