(() => {
    console.log("JavaScript is linked up");
    let catchLogo = document.querySelectorAll('#logo2nd svg');

    function logMe() {
      console.log('Clicked on logo!');
    }

    catchLogo.addEventListener("click", logMe);
})()
