const loader = document.querySelector(".loader");

        window.onload = function(){
            setTimeout(function(){
                loader.style.opacity = "0";
                setTimeout(function(){
                    loader.style.display = "none";
                },500);
            },1500);
        };

        window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky",window.scrollY > 0);
        })

        
        function toggleMenu(){
            var menuToggle = document.querySelector(".toggle");
            var menu = document.querySelector(".menu");
            var header = document.querySelector("header");
            menuToggle.classList.toggle("active");
            menu.classList.toggle("active");
            if(window.scrollY == 0){
                header.classList.toggle("sticky");
            }
        }

        function showVideo(link){
            document.getElementById("videoRide").src= link;
            document.querySelector(".videoride").style.transform = "scale(1)";
        }


        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }

        function myFunction(imgs) {
            var divExpandImg = document.getElementById("divimg");
            var expandImg = document.getElementById("expandedImg");
            var imgText = document.getElementById("imgtext");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            divExpandImg.parentElement.style.transform = "scale(1)";
        }

        function showImg(){
            var i;
            var img = document.querySelectorAll(".imgremove");
            var btn = document.getElementById("gallerybtn");
            for(i=0; i<img.length; i++){
                if(img[i].style.display === "none"){
                    img[i].style.display = "block";
                    btn.innerHTML = "Show Less"
                }
                else{
                    img[i].style.display = "none";
                    btn.innerHTML = "Show more"
                }
            }
        }

        function showBooking(){
            document.querySelector(".bookingform").style.transform = "scale(1)";
        }

        function hideBooking(){
            document.querySelector(".bookingform").style.transform = "scale(0)";
            
        }

        let today = new Date().toISOString().substr(0, 10);
        document.querySelector("#today").value = today;
        document.querySelector("#today").min = today;

        function booking(){
            location.reload();
            alert("We have received your order. Please wait for our contact")
        }

        function sendFeedBack(){
            location.reload();
            alert("We have received your Feedback");
        }