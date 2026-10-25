(() => {
  const images = window.ENTREGAS_IMAGES || [];
  const perPage = 4;
  const totalPages = Math.ceil(images.length / perPage);
  const reviews = document.querySelector('section[aria-labelledby="reclame-aqui-heading"]');

  if (!reviews || !totalPages || document.getElementById("entregas-gallery")) return;

  const gallery = document.createElement("section");
  gallery.id = "entregas-gallery";
  gallery.style.cssText = "margin-top:1rem";

  const grid = document.createElement("div");
  grid.style.cssText = "display:grid;grid-template-columns:repeat(2,1fr);gap:.5rem";

  const nav = document.createElement("div");
  nav.style.cssText =
    "display:flex;flex-wrap:wrap;justify-content:center;gap:.35rem;margin-top:.85rem";

  const title = document.createElement("h3");
  title.textContent = "MAIS DE 700 PEDIDOS ESSA SEMANA";
  title.style.cssText =
    "margin:0 0 .75rem;color:#111827;font-size:1.125rem;font-weight:900;text-align:center";

  gallery.append(title, grid, nav);
  reviews.append(gallery);

  let current = 1;

  const makeButton = (label, page, { active = false, disabled = false } = {}) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = disabled;
    if (active) button.setAttribute("aria-current", "page");
    button.style.cssText = `min-width:2.5rem;height:2.5rem;padding:0 .7rem;border-radius:.5rem;border:1px solid #4169e8;font-weight:800;font-size:.9rem;cursor:${disabled ? "default" : "pointer"};background:${active ? "#4169e8" : "#fff"};color:${active ? "#fff" : "#4169e8"};opacity:${disabled ? ".45" : "1"}`;
    if (!disabled) button.addEventListener("click", () => render(page));
    return button;
  };

  const makeGap = () => {
    const gap = document.createElement("span");
    gap.textContent = "…";
    gap.style.cssText = "display:flex;align-items:center;color:#687386;font-weight:800";
    return gap;
  };

  // Sempre 5 números: primeira, última e 3 no meio (a atual e as vizinhas).
  const pageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, 4, totalPages];
    if (current >= totalPages - 2) {
      return [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, current - 1, current, current + 1, totalPages];
  };

  const render = (page) => {
    current = Math.min(Math.max(page, 1), totalPages);
    grid.replaceChildren(
      ...images.slice((current - 1) * perPage, current * perPage).map((name, index) => {
        const img = document.createElement("img");
        img.src = `../images/entregas/${encodeURIComponent(name)}`;
        img.alt = `Entrega ${(current - 1) * perPage + index + 1}`;
        img.loading = "lazy";
        img.style.cssText =
          "display:block;width:100%;aspect-ratio:3/4;object-fit:cover;border:1px solid #e1e5ee;border-radius:.5rem;background:#eef1f7";
        return img;
      }),
    );

    nav.replaceChildren(makeButton("‹", current - 1, { disabled: current === 1 }));
    let previous = 0;
    pageNumbers().forEach((p) => {
      if (p - previous > 1) nav.append(makeGap());
      nav.append(makeButton(String(p), p, { active: p === current }));
      previous = p;
    });
    nav.append(makeButton("›", current + 1, { disabled: current === totalPages }));
  };

  render(1);
})();
