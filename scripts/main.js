(function(){
  'use strict';

  $(document).ready(function(){
  $(".subCategories").hide();

});

  $('.headers').click(function(){
    $(".subCategories").siblings(".subCategories").slideToggle(350,function(){});
    $(this).next().slideToggle(350,function(){});
  });

})();
