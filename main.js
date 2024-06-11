window.addEventListener("scroll", () => {
  let verticalScrollpx = window.scrollY || window.pageYOffset
  let arrow = document.getElementById('up')

  if (verticalScrollpx < 100) {
      arrow.style.display = "none"
  }


  if (verticalScrollpx < 1600 && verticalScrollpx > 100) {
      arrow.style.display = "flex";
  }
})


























   // serach box
   function search() {
    const searchbox = document.getElementById("search-item").value.toLowerCase();
    const storeitems = document.getElementById("product");
    const products = document.querySelectorAll(".prodItems");
    const pname = storeitems.getElementsByTagName("h3");

    for (let i = 0; i < pname.length; i++) {
      let match = products[i].getElementsByTagName("h3")[0];
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




