(function() {
    function gundon(IDName) {
        var speed = 50,
            marquePic1=document.getElementById(IDName.marquePic1),
            marquePic2 = document.getElementById(IDName.marquePic2),
            demo = document.getElementById(IDName.demo);
            if(!marquePic1){return false}
            if(!marquePic2){return false}
            if (!demo) {return false};	
            marquePic2.innerHTML = marquePic1.innerHTML
        function Marquee() {
            
            if (demo.scrollLeft >= marquePic1.scrollWidth) {
                demo.scrollLeft = 0
            } else {
                demo.scrollLeft++
                console.log(demo.scrollWidth)
            }
        }
        var MyMar = setInterval(Marquee, speed)
        demo.onmouseover = function() { clearInterval(MyMar) }
        demo.onmouseout = function() { MyMar = setInterval(Marquee, speed) }
    }
    this.gundon = gundon;
})()
