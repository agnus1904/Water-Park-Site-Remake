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
            var expandImg = document.getElementById("expandedImg");
            var imgText = document.getElementById("imgtext");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            expandImg.parentElement.style.display = "block";
        }

        function sendFeedBack(){
            location.reload();
            alert("We have received your Feedback");
        }