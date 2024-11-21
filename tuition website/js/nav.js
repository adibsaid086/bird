const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
         <div class="nav">
            <img src="img/bird.png" width="20%" class="brand-logo" alt="">
            <ul class="links-container">
                <li class="link item"><a href="home.html" class="link">Home</a></li>
                <li class="link item"><a href="tutor.html" class="link">Tutor</a></li>
                <li class="link item"><a href="contact.html" class="link">About Us</a></li>
                <li class="link item"><a href="qna.html" class="link">Q&A</a></li>
                <li class="link item"><a href="birdsignin.html" class="link">Sign In</a></li>
            </ul>
        </div>
    `;
    
    
}
 
createNav();
