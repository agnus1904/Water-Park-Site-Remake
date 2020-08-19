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

        function myFunction(imgs) {
            var divExpandImg = document.getElementById("divimg");
            var expandImg = document.getElementById("expandedImg");
            var imgText = document.getElementById("imgtext");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            divExpandImg.parentElement.style.display = "block";
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
            document.querySelector(".bookingform").style.display = "block";
        }

        function hideBooking(){
            document.querySelector(".bookingform").style.display = "none";
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