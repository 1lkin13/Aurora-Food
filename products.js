
// NAVBAR
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');


    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('scrolled');


    } else {
        navbar.classList.remove('scrolled');
        // navflex1.classList.remove('scrolled1');

    }
});
// NAVBAR




// SEARCH
document.getElementById('search-bar').addEventListener('input', function () {
    var searchText = this.value.toLowerCase();  // Arama metnini küçük harflere dönüştür

    // Tüm product4 sınıfına sahip elementleri al
    var products = document.getElementsByClassName('product4');

    // Her bir ürünü kontrol et
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.innerText.toLowerCase();  // Ürün adını küçük harflere dönüştür

        // Arama metni ürün adında bulunuyorsa göster, yoksa gizle
        if (productName.includes(searchText)) {
            product.parentElement.style.display = 'block';
        } else {
            product.parentElement.style.display = 'none';
        }
    }
});
// SEARCH

function toggleList(subcategoryElement) {
    var list = subcategoryElement.querySelector('.list');
    var isHidden = list.clientHeight === 0;

    if (isHidden) {
        list.style.height = 'auto';
    } else {
        list.style.height = 0;
    }

}



function showProducts(category) {

    var allProducts = document.querySelectorAll('.Product-item');
    allProducts.forEach(function (product) {
        product.style.display = 'none';
    });
    if (category === 'all') {
        allProducts.forEach(function (product) {
            product.style.display = 'block';
        });
    } else {
        var categoryProducts = document.querySelectorAll('.Product-item[data-category="' + category + '"]');
        categoryProducts.forEach(function (product) {
            product.style.display = 'block';
        });
    }
}

