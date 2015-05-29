function toggleOff() {
    $('.songs').prop('checked', false).change();
    $('audio').each(function(){
      this.pause();
      this.currentTime = 0;
    });
  };

  function toggleOffByInput() {
    $('.songs').prop('checked', false).change();
  };

  $(function(){
    var $isPlaying = false

    $('#toggle-one').bootstrapToggle();
    function get_audio_element(native_div){
      var $div = $(native_div);
      var $checkbox = $div.find('input');
      var id = $checkbox.attr('id');
      return $("#"+id+"_sound");
    };

    $("div.toggle").on("click", function(event) {
      var $div = $(this);
      var $audio_element = get_audio_element(this);
      if (!$div.hasClass('off')){
        $audio_element[0].pause();
        $audio_element[0].currentTime = 0;
      }
    });

    $("div.toggle").on("click", function() {
      $isPlaying = true
    })


    setInterval(function() {
      $("div.toggle:not(.off)").each(function(){
        var $audio = get_audio_element(this);
        $audio[0].currentTime = 0;
        $audio[0].play();
      });
    }, 7500);

  });