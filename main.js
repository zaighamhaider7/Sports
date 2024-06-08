// navbar
window.addEventListener('scroll', () => {
    const verticalScrollpx = window.scrollY || window.pageYOffset;
    const navbar = document.getElementById('nav')
    const home = document.getElementById('home')
    const sports = document.getElementById('sports')
    const aboutus = document.getElementById('about')
    const cardprod = document.getElementsByClassName('cardprod')
    const viewmorebtn = document.getElementsByClassName('view-more')

    if (verticalScrollpx < 500) {
      navbar.style.backgroundColor = "";
      navbar.style.backdropFilter = "none";
      navbar.style.border = "none";
      home.style.fontSize = "large"
      home.style.fontWeight = "bold"
      sports.style.fontSize = "medium"
      sports.style.fontWeight = '400'
      aboutus.style.fontSize = "medium"
      aboutus.style.fontWeight = "400"
      navbar.style.opacity = "1";

    }
    else if (verticalScrollpx < 1600 && verticalScrollpx > 500) {
      // if(cardprod.length <7 ){
      navbar.style.backgroundColor = "black";
      navbar.style.opacity = "0.8";
      home.style.fontSize = "medium"
      home.style.fontWeight = '400'
      sports.style.fontSize = "large"
      sports.style.fontWeight = "bold"
      aboutus.style.fontSize = "medium"
      aboutus.style.fontWeight = "400"
      navbar.style.boxShadow = "none";
      navbar.style.backdropFilter = "blur( 20px )";
      navbar.style.borderRadius = "10px";
      navbar.style.border = "1px solid rgba( 255, 255, 255, 0.18 )"
      // }
    }
    // else if(cardprod.length >=11){}
    else if (verticalScrollpx < 2000 && verticalScrollpx > 1600) {
      navbar.style.backgroundColor = "black";
      navbar.style.opacity = "0.8";
      home.style.fontSize = "medium"
      home.style.fontWeight = '400'
      sports.style.fontSize = "medium"
      sports.style.fontWeight = "400"
      navbar.style.boxShadow = "none";
      aboutus.style.fontSize = "large"
      aboutus.style.fontWeight = "bold"
      navbar.style.backdropFilter = "blur( 20px )";
      navbar.style.borderRadius = "10px";
      navbar.style.border = "1px solid rgba( 255, 255, 255, 0.18 )";

    }
  });


   // serach box
   function search() {
    const searchbox = document.getElementById('search-item').value.toLowerCase();
    const storeitems = document.getElementById("product");
    const products = document.querySelectorAll('.prodItems');
    const pname = storeitems.getElementsByTagName('h3');

    for (let i = 0; i < pname.length; i++) {
      let match = products[i].getElementsByTagName('h3')[0];
      if (match) {
        let textValue = match.textContent || match.innerHTML;
        if (textValue.toLowerCase().indexOf(searchbox) > -1) {
          products[i].style.display = "";
        } else {
          products[i].style.display = "none";
        }
      }
    }
  };



//   aos animation

AOS.init();
