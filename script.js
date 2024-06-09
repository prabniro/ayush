document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { name: "ANTHOPOGON Oil", image: "photos/ANTHOPOGON.jpg", link: "plants/anthopogonoil.html" },
    { name: "ARTEMISIA Oil", image: "photos/ARTEMISIA.jpg", link: "plants/artemisiaoil.html" },
    { name: "CALAMUS oil", image: "photos/CALAMUS.jpg", link: "plants/calamusoil.html" },
    { name: "CHAMOMILE Oil", image: "photos/CHAMOMILE.jpg", link: "plants/chamomile.html" },
    { name: "CINNAMON Oil", image: "photos/CINNAMON.jpg", link: "plants/cinnamonleafoil.html" },
    { name: "CITRONELLA Oil", image: "photos/CITRONELLA.jpg", link: "plants/citronellaoil.html" },
    { name: "CORNMINT Oil", image: "photos/CORNMINT.jpg", link: "plants/cornmintoil.html" },
    { name: "FRENCH BASIL Oil", image: "photos/FRENCHBASIL.jpg", link: "plants/frenchbasiloil.htmls" },
    { name: "JUNIPER BERRY Oil", image: "photos/JUNIPER.jpg", link: "plants/junperberryoil.html" },
    { name: "LEMONGRASS Oil", image: "photos/LEMONGRASS.jpg", link: "plants/lemongrassoil.html" },
    { name: "PALMAROSA oil", image: "photos/PALMAROSA.jpg", link: "plants/palmarosaoil.html" },
    { name: "SPIKENARD Oil", image: "photos/SPIKENARD.jpg", link: "plants/spikenardoil.html" },
    { name: "SUGHANDHAKOKILA Oil", image: "photos/SUGHANDHAKOKILA.jpg", link: "plants/sugandhakokilaoil.html" },
    { name: "VALERIAN Oil", image: "photos/VALERIAN.jpg", link: "plants/valerianoil.html" },
    { name: "Wintergreen Oil", image: "photos/WINTERGREEN.jpeg", link: "plants/wintergreen.html" },
    { name: "ZANTHOXYLUM Oil", image: "photos/ZANTHOXYLUM.jpg", link: "plants/zanthoxylumoil.html" },
    { name: "ZEDOARY Oil", image: "photos/ZEDOARY.jpg", link: "plants/zedoaryoil.html" }
  ];

  const carouselInner = document.querySelector('#productCarousel .carousel-inner');

  products.forEach((product, index) => {
    if (index % 4 === 0) {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');
      itemDiv.innerHTML = `<div class="row"></div>`;
      carouselInner.appendChild(itemDiv);
    }
    const row = carouselInner.querySelector('.carousel-item:last-child .row');
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-3';
    colDiv.innerHTML = `
      <a href="${product.link}">
        <img src="${product.image}" class="d-block w-100" alt="${product.name}" width="300" height="200">
        <div class="carousel-caption d-none d-md-block">
          <h5>${product.name}</h5>
        </div>
      </a>
    `;
    row.appendChild(colDiv);
  });

  setInterval(() => {
    $('#productCarousel').carousel('next');
  }, 3000);

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.style.animationPlayState = 'running';
      }
    });
  });
});
