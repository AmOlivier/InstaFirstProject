    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();

        $(".container .card").filter(function() {
          
  

          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    


       
            $(this).parent().find('').slideToggle("slow");
        

        var addText;
        $(".panel").on('dblclick', 'p',function () {
          
            addText = $(this).text();

          
            $(this).text("");

            $("").appendTo(this).focus();
        });

         $(".panel").on('focusout','', function () {
         
            var $this = $(this);
 $this.parent().text($this.val() || addText);
              $this.remove();
        });
        
        