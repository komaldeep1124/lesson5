/* custom javascript goes herr*/
//iife-imm invoked func expr
(function(){

    function Start()
    {
          console.log(`%c app started..`, 
        "font-size:20px;color:blue;font-weight:bold");

        $(".btn-danger").click(function(event){
        if(!confirm("Are you sure?"))
        {
            event.preventDefault();
            window.location.assign("/contact-list");
        }
        });
        
    }
    window.addEventListener("load",Start);
})();