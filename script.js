const images = [
   {src: "./images/one.jpg", alt: "first-image"},
   {src: "./images/two.jpg", alt: "second-image"},
   {src: "./images/three.jpg", alt: "third-image"},
   {src: "./images/four.jpg", alt: "fourth-image"}
];

const imgContainer = document.querySelector(".img-container");
const arrowContainer = document.querySelector(".arrow");
const navigationBtnDiv = document.querySelector(".circle-buttons");

// document.addEventListener('DOMContentLoaded', displayImage);


function displayImage(event) {

   let imagePosition = selectImage(event) || images[0];
   let image = document.querySelector('.main-img');
         image.src = imagePosition.src;
         image.alt = imagePosition.alt;
}

      function selectImage(event) {
         let target = event.target;
         let targetClassAction;
      
         let imageIndex;
         let image = document.querySelector('.main-img');
      

         images.forEach((img, index) => {

            let imageFileName = image.src.split('/').pop(); 
      
            // Now compare only the file names
            if (imageFileName === img.src.split('/').pop()) {
               imageIndex = index;
            }
         });
      
         if (target !== arrowContainer || target !== navigationBtnDiv) {
            targetClassAction = target.className;
            switch (targetClassAction) {
               case "arrow-forward":
                  imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image
                  break;
               case "arrow-backward":
                  imageIndex = (imageIndex - 1 + images.length) % images.length; // Loop back to the last image
                  break;
               case "circle1":
                  imageIndex = 0;
                  break;
               case "circle2":
                  imageIndex = 1;
                  break;
               case "circle3":
                  imageIndex = 2;
                  break;
               case "circle4":
                  imageIndex = 3;
                  break;
            }
         }
         return images[imageIndex];
      }

arrowContainer.addEventListener("click", displayImage);
navigationBtnDiv.addEventListener("click", displayImage)