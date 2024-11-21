const createFooter = () => {
    let nav = document.querySelector('.footer');

    nav.innerHTML = `
    <div class="footer-content">
    <img src="img/bird.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li><a href="home.html" class="footer-link">Home</a></li>
            <li><a href="tutor.html" class="footer-link">Tutor</a></li>
            <li><a href="contact.html" class="footer-link">About Us</a></li>
            <li><a href="qna.html" class="footer-link">Q&A</a></li>
            <li><a href="birdsignin.html" class="footer-link">Sign In</a></li>
            
        </ul>
        </div>
    <p class="info">support emails - birdtutor@gmail.com</p>
    <div class="footer-social-container">
        <a href="https://twitter.com/birdtuition?s=11&t=4yQocq2gsw5OJsUJYadnMQ" class="social-link"> <img src="img/twitter.png" class="cart-logo" alt=" "</a>
    </div>
        `; 
}
 
createFooter();