let slideIndex = 0;
      showSlides();

      function showSlides() {
        const slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
      }
function ajouterPanier(produit){
  alert(produit + " à ete ajouter")

  quantite = document.getElementById("quantite");
quantite = parseInt(quantite.innertHtml);
quantite.innertHtml = quantite + 1;

  
}


      
    