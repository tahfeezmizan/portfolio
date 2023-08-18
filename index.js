// stikey header code 
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("stikey", window.scrollY > 0);
  });

  let closestnavbarNav = $(this).closest(".navItem ");



  // scroll to top button 
  const scrollTopicon = document.querySelector(".scrollIcon");

  scrollTopicon.addEventListener("click", function(){

    // window.scrollTo(0, 0, "smooth");
    window.scrollTo({
        top : 0,
        left: 0,
        behavior: "smooth",
    })
  });

  // project filter code
$(document).on('click', '.projectFilter li', function(){
  $(this).addClass('projectFilterActive').siblings().removeClass('projectFilterActive');

  //project filtering process
  $(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if(value == 'all'){
        $('.projectBox').show('1000');
      }
      else{
        $('.projectBox').not('.' + value).hide('1000');
        $('.projectBox').filter('.' + value).show('1000');
      }
    })
  })
})
