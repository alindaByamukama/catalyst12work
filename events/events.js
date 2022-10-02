    const btn = document.querySelector('.btn')
     
    // callback --> clickDemo has been passed as a parameter in the addEventListener method
    btn.addEventListener('click', clickDemo)

    // create a handler
    function clickDemo() {
        alert('I am a demo!')
    }


