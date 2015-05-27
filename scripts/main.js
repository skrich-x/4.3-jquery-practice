(function(){
  'use strict';

  $(document).ready(function(){
    $(subCategories)

  $(".subCategories").hide();

  $('.headers').click(function(){
    $(".subCategories").siblings(".subCategories").slideUp(400,function(){});
    $(this).next().slideDown(400,function(){});
  });




  });
})();
