// --------------------------------------------------------------------------Slider
document.querySelectorAll(".nav-slider").forEach((nav) => {
  const prevBtn = nav.querySelector("button:first-child");
  const nextBtn = nav.querySelector("button:last-child");

  // buscamos el slider anterior a este nav
  const slider = nav.closest(".container-tamaño").previousElementSibling;

  const cardWidth = () => {
    const card = slider.querySelector(".card");
    if (!card) return 0;

    const styles = getComputedStyle(slider);
    const gap = parseInt(styles.gap) || 0;

    return card.offsetWidth + gap;
  };

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -cardWidth(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: cardWidth(), behavior: "smooth" });
  });
});


// --------------------------------------------------------------------------Menu desplegable
const navHeader = document.querySelector("#nav-header");
const abrir = document.querySelector("#menu-abrir");
const cerrar = document.querySelector("#menu-cerrar");
const links = document.querySelectorAll(".lista-nav a");

abrir.addEventListener("click", () => {
  navHeader.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  navHeader.classList.remove("visible");
})

links.forEach(link => {
  link.addEventListener("click", () => {
    navHeader.classList.remove("visible");
  });
});

// --------------------------------------------------------------------------Asignar colores

const colors = [
  ["#22252a", "#2a3139"],
  ["#e9e1d4", "#ccbeb1"],
  ["#64727d", "#91a9b5"],
  ["#dad7e0", "#afa6bb"],
  ["#ffc09d", "#e2a48d"]
];

document.querySelectorAll(".colors li").forEach((li, i) => {
  const ball = li.querySelector(".ball");
  // Aplicar colores
  ball.style.background = `linear-gradient(${colors[i][0]} 50%, ${colors[i][1]} 50%)`;
});

// --------------------------------------------------------------------------select color
const radios = document.querySelectorAll('input[name="color"]');

// Mostrar el color1 (negro) por defecto
document.querySelectorAll('picture[class^="color"]').forEach(pic => {
  pic.style.display = "none";
});
document.querySelectorAll(".color1").forEach(pic => {
  pic.style.display = "block";
});
// También marcamos el radio del color negro
const defaultRadio = document.querySelector('#c1');
if (defaultRadio) defaultRadio.checked = true;

// Evento para cambiar imágenes cuando se elige otro color
radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const selected = radio.id; // c1, c2, c3...

    // Ocultar todas las pictures
    document.querySelectorAll('picture[class^="color"]').forEach(pic => {
      pic.style.display = "none";
    });

    // Mostrar las del color seleccionado
    document.querySelectorAll(".color" + selected.slice(1)).forEach(pic => {
      pic.style.display = "block";
    });
  });
});

// --------------------------------------------------------------------------animacion
const elementos = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entradas, obs) => {
  entradas.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      obs.unobserve(entry.target); // Se ejecuta solo una vez
    }
  });
}, {
  rootMargin: '0px 0px -100px 0px' // Detecta "cerca" antes de entrar del todo
});

elementos.forEach(el => observer.observe(el));
