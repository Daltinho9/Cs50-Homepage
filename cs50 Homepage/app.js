
window.onload = function() {




    const menuBtn = document.querySelector('.hamburger');
    const mobile_Menu = document.querySelector('.mobile-nav');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobile_Menu.classList.toggle('is-active');
    });

    const homeBtn = document.querySelector('.home');

    homeBtn.addEventListener('click', function () {
        console.log("home");
    });

    let submitBtn = document.querySelector('#submitbtn');

    submitBtn.addEventListener('click', function () {
        alert("Thank You for contacting me! I will respond shortly!");
    });
};


