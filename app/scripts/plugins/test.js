;(function($, window, undefined) {

  // Soilution 1 GOOD
  // $('#loadVideo').on('click', function(e){
  //   e.preventDefault();
  //   var videoUrl = $(this).attr('data-video-src');

  //   $('#video').attr('src', videoUrl);
  //   $('img').fadeOut(600);
  // });


//===============SOLUTION 2 =======//

    // var tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // var player;

    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('video-placeholder', {
    //         width: 600,
    //         height: 400,
    //         videoId: 'Xa0Q0J5tOP0',
    //         playerVars: {
    //             color: 'white',
    //             playlist: 'taJ60kskkns,FG0fTKAqZ5g'
    //         },
    //         events: {
    //             onReady: initialize
    //         }
    //     });
    // }


    $('#loadVideo').on('click', function() {

      console.log(22);
      // $('img').fadeOut(600);
      // player.playVideo();
    });




}(jQuery, window));

