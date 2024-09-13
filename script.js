const images = [
   {src: "./images/one.jpg", alt: "first-image"},
   {src: "./images/two.jpg", alt: "second-image"},
   {src: "./images/three.jpg", alt: "third-image"},
   {src: "./images/four.jpg", alt: "fourth-image"}
];

const imgContainer = document.querySelector(".img-container");
const arrowContainer = document.querySelector(".arrow");

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
      
         // Compare the image name, not full path
         images.forEach((img, index) => {
            // Extract the file name from the image.src (ignores full path)
            let imageFileName = image.src.split('/').pop(); 
      
            // Now compare only the file names
            if (imageFileName === img.src.split('/').pop()) {
               imageIndex = index;
            }
         });
      
         if (target !== arrowContainer) {
            targetClassAction = target.className;
            switch (targetClassAction) {
               case "arrow-forward":
                  imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image
                  break;
               case "arrow-backward":
                  imageIndex = (imageIndex - 1 + images.length) % images.length; // Loop back to the last image
                  break;
            }
         }
         return images[imageIndex];
      }

arrowContainer.addEventListener("click", displayImage);