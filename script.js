document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { name: "ANTHOPOGON Oil", image: "photos/ANTHOPOGON.webp", link: "plants/anthopogonoil.html" },
    { name: "ARTEMISIA Oil", image: "photos/ARTEMISIA.webp", link: "plants/artemisiaoil.html" },
    { name: "CALAMUS oil", image: "photos/CALAMUS.webp", link: "plants/calamusoil.html" },
    { name: "CHAMOMILE Oil", image: "photos/CHAMOMILE.webp", link: "plants/chamomile.html" },
    { name: "CINNAMON Oil", image: "photos/CINNAMON.webp", link: "plants/cinnamonleafoil.html" },
    { name: "CITRONELLA Oil", image: "photos/CITRONELLA.webp", link: "plants/citronellaoil.html" },
    { name: "CORNMINT Oil", image: "photos/CORNMINT.webp", link: "plants/cornmintoil.html" },
    { name: "FRENCH BASIL Oil", image: "photos/FRENCHBASIL.webp", link: "plants/frenchbasiloil.htmls" },
    { name: "JUNIPER BERRY Oil", image: "photos/JUNIPER.webp", link: "plants/junperberryoil.html" },
    { name: "LEMONGRASS Oil", image: "photos/LEMONGRASS.webp", link: "plants/lemongrassoil.html" },
    { name: "PALMAROSA oil", image: "photos/PALMAROSA.webp", link: "plants/palmarosaoil.html" },
    { name: "SPIKENARD Oil", image: "photos/SPIKENARD.webp", link: "plants/spikenardoil.html" },
    { name: "SUGHANDHAKOKILA Oil", image: "photos/SUGHANDHAKOKILA.webp", link: "plants/sugandhakokilaoil.html" },
    { name: "VALERIAN Oil", image: "photos/VALERIAN.webp", link: "plants/valerianoil.html" },
    { name: "Wintergreen Oil", image: "photos/WINTERGREEN.webp", link: "plants/wintergreen.html" },
    { name: "ZANTHOXYLUM Oil", image: "photos/ZANTHOXYLUM.webp", link: "plants/zanthoxylumoil.html" },
    { name: "ZEDOARY Oil", image: "photos/ZEDOARY.webp", link: "plants/zedoaryoil.html" }
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
