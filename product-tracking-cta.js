(() => {
  const aboutHeading = [...document.querySelectorAll("h2")].find(
    (heading) => heading.textContent.trim() === "Sobre o produto",
  );

  if (!aboutHeading || document.querySelector("[data-tracking-cta]")) {
    return;
  }

  const aboutSection = aboutHeading.parentElement;
  const trackingSection = document.createElement("section");
  trackingSection.dataset.trackingCta = "";
  trackingSection.setAttribute("aria-label", "rastreamento");
  trackingSection.style.cssText =
    "margin-top:2rem;padding:1.25rem;border:2px solid #4169e8;border-radius:1rem;background:linear-gradient(135deg,#eef2ff,#fff);box-shadow:0 12px 28px rgba(65,105,232,.14)";

  const content = document.createElement("div");
  content.style.cssText =
    "display:flex;align-items:center;gap:1rem;flex-wrap:wrap";

  const logo = document.createElement("img");
  logo.src = "../images/jadlogo.png";
  logo.alt = "Logo Jadlog";
  logo.width = 64;
  logo.height = 48;
  logo.style.cssText = "width:64px;height:48px;object-fit:contain";

  const copy = document.createElement("div");
  copy.style.cssText = "flex:1 1 250px";

  const demoLabel = document.createElement("p");
  demoLabel.textContent = "ACOMPANHE ENTREGAS FLASH EM ROTA AGORA";
  demoLabel.style.cssText =
    "margin:0 0 .35rem;color:#4169e8;font-size:.7rem;font-weight:800;letter-spacing:.12em";

  const heading = document.createElement("h2");
  heading.textContent =
    "ACOMPANHE ENTREGAS FLASH QUE ESTÃO EM ROTA AGORA!";
  heading.style.cssText =
    "margin:0;color:#111827;font-size:clamp(1rem,3vw,1.35rem);font-weight:900;line-height:1.2";

  const description = document.createElement("p");
  description.textContent =
    "Veja o acompanhamento de entrega com a Jadlog FLASH.";
  description.style.cssText =
    "margin:.4rem 0 0;color:#526071;font-size:.875rem;line-height:1.5";

  copy.append(demoLabel, heading, description);
  content.append(logo, copy);

  const link = document.createElement("a");
  link.href = "../rastreiosemtemporeal.html";
  link.textContent = "Ver rastreamentos →";
  link.style.cssText =
    "display:flex;min-height:46px;align-items:center;justify-content:center;margin-top:1rem;padding:.75rem 1rem;border-radius:.5rem;background:#4169e8;color:#fff;font-size:.875rem;font-weight:800;text-align:center;text-decoration:none";

  trackingSection.append(content, link);

  const disclosure = document.createElement("p");
  disclosure.textContent =
    "Os rastreios exibidos representam entregas FLASH.";
  disclosure.style.cssText =
    "margin:.65rem 0 0;color:#687386;font-size:.75rem;line-height:1.45;text-align:center";

  trackingSection.append(disclosure);
  aboutSection.insertAdjacentElement("afterend", trackingSection);

  const reviews = document.createElement("section");
  reviews.setAttribute("aria-labelledby", "reclame-aqui-heading");
  reviews.style.cssText =
    "display:grid;gap:1rem;margin:1.5rem 0 0";

  const reviewsHeading = document.createElement("h3");
  reviewsHeading.id = "reclame-aqui-heading";
  reviewsHeading.textContent = "NOSSA AVALIAÇÃO DO RECLAME AQUI";
  reviewsHeading.style.cssText =
    "margin:0;color:#111827;font-size:1.125rem;font-weight:900;text-align:center";
  reviews.append(reviewsHeading);

  ["reclameaqui1.png", "reclameaqui2.png"].forEach((imageName, index) => {
    const image = document.createElement("img");
    image.src = `../images/${imageName}`;
    image.alt = `Avaliação da VAPE NACIONAL no Reclame Aqui, imagem ${index + 1}`;
    image.loading = "lazy";
    image.style.cssText =
      "display:block;width:100%;height:auto;border:1px solid #e1e5ee;border-radius:.75rem";
    reviews.append(image);
  });

  const buttonStyles =
    "display:flex;min-height:50px;align-items:center;justify-content:center;padding:.75rem 1rem;border-radius:.5rem;background:#4169e8;color:#fff;font-size:.95rem;font-weight:800;text-align:center;text-decoration:none";

  const flavorLabel = [...document.querySelectorAll("p")].find(
    (paragraph) => paragraph.textContent.trim() === "Sabor",
  );
  let productOverview = flavorLabel?.parentElement?.parentElement;

  while (
    productOverview?.parentElement &&
    !productOverview.querySelector('img[data-nimg="fill"]')
  ) {
    productOverview = productOverview.parentElement;
  }

  productOverview ??= document.querySelector("main h1")?.parentElement;

  if (productOverview) {
    productOverview.id = "product-overview";
    productOverview.style.scrollMarginTop = "1.5rem";

    const productLink = document.createElement("a");
    productLink.href = "#product-overview";
    productLink.textContent = "Ver produto e sabores ↑";
    productLink.style.cssText = buttonStyles;
    productLink.addEventListener("click", (event) => {
      event.preventDefault();
      productOverview.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    reviews.prepend(productLink);

    const bottomProductLink = productLink.cloneNode(true);
    bottomProductLink.addEventListener("click", (event) => {
      event.preventDefault();
      productOverview.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    reviews.append(bottomProductLink);
  }

  trackingSection.insertAdjacentElement("afterend", reviews);

  const buyLink = [...document.querySelectorAll("main a")].find((anchor) =>
    anchor.textContent.trim().toUpperCase().includes("COMPRAR AGORA"),
  );

  if (buyLink) {
    reviewsHeading.style.scrollMarginTop = "1.5rem";

    const reviewsLink = document.createElement("a");
    reviewsLink.href = "#reclame-aqui-heading";
    reviewsLink.textContent = "Veja nossa nota no Reclame Aqui";
    reviewsLink.style.cssText = `${buttonStyles};margin-top:.75rem`;
    reviewsLink.addEventListener("click", (event) => {
      event.preventDefault();
      const margin = parseFloat(getComputedStyle(reviewsHeading).scrollMarginTop) || 0;
      const startY = window.scrollY;
      const duration = 700;
      const startTime = performance.now();
      const step = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 2);
        const targetY = reviewsHeading.getBoundingClientRect().top + window.scrollY - margin;
        window.scrollTo({ top: startY + (targetY - startY) * eased, behavior: "instant" });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    buyLink.parentElement.insertAdjacentElement("afterend", reviewsLink);
    if (window.createDeliveryBanner) {
      reviewsLink.insertAdjacentElement("afterend", window.createDeliveryBanner());
    }
  }
})();
