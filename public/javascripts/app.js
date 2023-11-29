(function(){
    function Start(){
        console.log("Application started....");
        let DeleteButtons = document.querySelectorAll('.btn-danger');
        for(button of DeleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/bookslist');
                }
            })
        }
    }
    window.addEventListener("load",Start);
})();