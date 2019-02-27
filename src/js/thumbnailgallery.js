const BasicGallery = require("csc-adv-int-basic-gallery");

class thumbNails extends BasicGallery {
   constructor(container) {
        super(container);
        
    /* adds event listener to each images and moves the slide show to the image clicked*/
    document.getElementById("Img1").addEventListener("click",this.slide.bind(this,0),false);
    document.getElementById("Img2").addEventListener("click",this.slide.bind(this,1),false);
    document.getElementById("Img3").addEventListener("click",this.slide.bind(this,2),false);
    document.getElementById("Img4").addEventListener("click",this.slide.bind(this,3),false);
    document.getElementById("Img5").addEventListener("click",this.slide.bind(this,4),false);

    /*adds an event listener to buttons that allows movement between pictures*/
    document.getElementById("prev").addEventListener("click",this.prev.bind(this),false);
    document.getElementById("next").addEventListener("click",this.next.bind(this),false);
    }
    /* target the span section of html doc (i.e. first number of counter) and replaces it with current index*/
    slideChanged() {
    document.getElementsByTagName("span")[0].innerText = this.index + 1;
    
}
};
module.exports = thumbNails; 