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
  alert(produit + " a été ajouté au panier")


  // Mettre à jour la quantité du produit dans le panier
  quantite = document.getElementById("quantite");
  qte = parseInt(quantite.innerHTML);
  quantite.innerHTML = qte + 1;   
  // Mettre en commentaire la partie alert lors du survole du curseur qui affiche les informations sur le produit la quantité ajoutée et le nom du produit

  //alert("Vous avez ajouté " + produit + " à votre panier. Quantité: " + (qte + 1));
  // Mettre à jour le nombre total d'articles dans le panier
  
}
 function func(info) 
            {
               
               alert(info + "");
               
            }