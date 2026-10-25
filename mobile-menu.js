document.querySelectorAll("[data-mobile-menu-toggle]").forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  if (!menu) return;

  const setOpen = (open) => {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("hidden", !open);
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!button.closest("header").contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
});

const bestSellersSection = document.getElementById("pods-mais-vendidos");

const startPromoCountdown = (container) => {
  const timer = container.querySelector("[data-promo-timer]");
  const status = container.querySelector("[data-promo-status]");
  const days = container.querySelector("[data-days]");
  const hours = container.querySelector("[data-hours]");
  const minutes = container.querySelector("[data-minutes]");
  const seconds = container.querySelector("[data-seconds]");
  const cycleSeconds = 28 * 60 + 55;
  let cycleStart = Date.now();
  try {
    const saved = Number(localStorage.getItem("promoCycleStart"));
    if (saved > 0 && saved <= cycleStart) cycleStart = saved;
    else localStorage.setItem("promoCycleStart", String(cycleStart));
  } catch {}

  const updateCountdown = () => {
    const elapsedSeconds = Math.floor((Date.now() - cycleStart) / 1000);
    const remainingSeconds = cycleSeconds - (elapsedSeconds % cycleSeconds);
    const remainingDays = Math.floor(remainingSeconds / 86_400);
    const remainingHours = Math.floor((remainingSeconds % 86_400) / 3_600);
    const remainingMinutes = days && hours
      ? Math.floor((remainingSeconds % 3_600) / 60)
      : Math.floor(remainingSeconds / 60);
    const remainingSecondsPart = remainingSeconds % 60;

    if (days) days.textContent = String(remainingDays).padStart(2, "0");
    if (hours) hours.textContent = String(remainingHours).padStart(2, "0");
    minutes.textContent = String(remainingMinutes).padStart(2, "0");
    seconds.textContent = String(remainingSecondsPart).padStart(2, "0");
    timer.setAttribute(
      "aria-label",
      `${remainingDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSecondsPart} segundos`,
          );
        };

  window.setInterval(updateCountdown, 1000);
  updateCountdown();
};

if (bestSellersSection && !document.getElementById("promo-countdown")) {
  const sectionContent = bestSellersSection.querySelector(".mx-auto");
  const sectionHeader = sectionContent?.querySelector(":scope > .flex.flex-col");

  if (sectionContent && sectionHeader) {
    const promo = document.createElement("div");
    promo.id = "promo-countdown";
    promo.className =
      "relative mb-8 overflow-hidden rounded-2xl border border-primary/40 bg-ink px-5 py-5 text-center shadow-lg sm:px-8 sm:py-6";
    promo.innerHTML = `
      <div aria-hidden="true" class="absolute inset-0 bg-primary/10"></div>
      <div class="relative flex flex-col items-center gap-3">
        <span class="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span class="h-px w-8 bg-primary"></span>
          Oferta especial
          <span class="h-px w-8 bg-primary"></span>
        </span>
        <h3 class="font-display text-2xl font-bold uppercase tracking-tight text-ink-foreground sm:text-3xl">Compre 3 e pague 2</h3>
        <p data-promo-status class="text-sm font-medium text-ink-muted">A promoção termina em:</p>
        <div data-promo-timer role="timer" class="flex flex-wrap items-center justify-center gap-2">
          <span class="flex flex-col items-center rounded-xl border border-primary/30 bg-primary/10 px-3 py-2">
            <span data-days class="font-display text-xl font-bold text-ink-foreground sm:text-2xl">00</span>
            <span class="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-muted">dias</span>
          </span>
          <span class="flex flex-col items-center rounded-xl border border-primary/30 bg-primary/10 px-3 py-2">
            <span data-hours class="font-display text-xl font-bold text-ink-foreground sm:text-2xl">00</span>
            <span class="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-muted">horas</span>
          </span>
          <span class="flex flex-col items-center rounded-xl border border-primary/30 bg-primary/10 px-3 py-2">
            <span data-minutes class="font-display text-xl font-bold text-ink-foreground sm:text-2xl">00</span>
            <span class="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-muted">min</span>
          </span>
          <span class="flex flex-col items-center rounded-xl border border-primary/30 bg-primary/10 px-3 py-2">
            <span data-seconds class="font-display text-xl font-bold text-primary sm:text-2xl">55</span>
            <span class="text-[0.65rem] font-semibold uppercase tracking-wider text-ink-muted">seg</span>
          </span>
        </div>
      </div>
    `;
    sectionContent.insertBefore(promo, sectionHeader);
    startPromoCountdown(promo);
  }
}

if (!bestSellersSection && !document.querySelector("[data-product-promo-countdown]")) {
  const productMain = document.querySelector("main");
  const promotionNotice = [...(productMain?.querySelectorAll("p.text-destructive") ?? [])]
    .find((paragraph) => paragraph.textContent.toLowerCase().includes("desconto"));
  const priceDescription = [...(productMain?.querySelectorAll("p") ?? [])]
    .find((paragraph) => paragraph.textContent.includes("fornecedor"));
  const productInfo = productMain?.querySelector("h1")?.parentElement;
  const priceRow = [...(productInfo?.children ?? [])]
    .find((element) => element.querySelector('span[class*="text-4xl"]'));
  const insertionPoint = promotionNotice?.parentElement ?? priceDescription ?? priceRow;

  if (insertionPoint) {
    const promo = document.createElement("div");
    promo.setAttribute("data-product-promo-countdown", "");
    promo.className =
      "mt-3 flex w-full items-center justify-between gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-2";
    promo.innerHTML = `
      <p data-promo-status class="text-xs font-semibold text-destructive sm:text-sm">A promoção vai acabar em:</p>
      <div data-promo-timer role="timer" class="flex items-center gap-2">
        <span class="flex items-baseline gap-1 rounded-lg border border-destructive/30 bg-card px-2.5 py-1">
          <span data-minutes class="font-display text-lg font-bold leading-none text-destructive">28</span>
          <span class="text-[0.65rem] font-semibold uppercase tracking-wide text-destructive/80">min</span>
        </span>
        <span class="flex items-baseline gap-1 rounded-lg border border-destructive/30 bg-card px-2.5 py-1">
          <span data-seconds class="font-display text-lg font-bold leading-none text-destructive">55</span>
          <span class="text-[0.65rem] font-semibold uppercase tracking-wide text-destructive/80">seg</span>
        </span>
      </div>
    `;
    insertionPoint.after(promo);
    startPromoCountdown(promo);
  }
}

if (bestSellersSection && !document.getElementById("pods-especiais")) {
  const specialPodsSection = document.createElement("section");
  specialPodsSection.id = "pods-especiais";
  specialPodsSection.className = "scroll-mt-20 border-b border-border";
  specialPodsSection.innerHTML = `
    <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
      <div class="flex flex-col items-center gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span class="h-px w-8 bg-primary"></span>
            COM THC
          </span>
          <h2 class="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl">PODS ESPECIAIS COM CANNABIS</h2>
        </div>
        <span class="shrink-0 text-sm font-medium text-muted-foreground">3 produtos</span>
      </div>
      <div class="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        ${[
          { name: "Elf THC 3000mg", oldPrice: "202,90", price: "141,56", off: 30, rating: "4,8", reviews: "1.842", image: "images/wp-image-40383558287595.png", page: "elfthc3000.html" },
          { name: "Elf THC 5000mg", oldPrice: "243,90", price: "163,60", off: 33, rating: "4,7", reviews: "1.269", image: "images/elf-thc-thc5000-disposable-vape-device-11-1.png", page: "elfthc5000.html" },
          { name: "Elf THC 8000mg", oldPrice: "283,90", price: "179,75", off: 37, rating: "4,9", reviews: "958", image: "images/ELF-THC-Quantum-8000mg-THC-Disposable-kiwi.jpg", page: "elfthc8000.html" },
        ].map((product) => `
          <a href="produto/${product.page}" class="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-black/10">
            <div class="relative aspect-square overflow-hidden bg-white">
              <div class="absolute left-2 top-2 z-10 flex flex-col items-start gap-1 sm:left-3 sm:top-3 sm:gap-1.5"><span class="rounded-full bg-destructive/70 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white shadow-md backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-xs">${product.off}% OFF</span></div>
              <img alt="${product.name}" loading="lazy" decoding="async" class="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105" src="${product.image}" />
            </div>
            <div class="flex flex-1 flex-col p-3 sm:p-5">
              <span class="text-[0.65rem] font-medium uppercase tracking-wider text-primary sm:text-xs">THC CANNABIS</span>
              <h3 class="mt-1 font-display text-sm font-semibold leading-tight text-balance text-foreground group-hover:underline sm:text-lg">${product.name}</h3>
              <div class="mt-2 flex items-center gap-1 text-xs" aria-label="Nota ${product.rating} de 5, ${product.reviews} avaliações">
                <span class="font-semibold text-foreground">${product.rating}</span>
                <span class="text-amber-400" aria-hidden="true">★★★★★</span>
                <span class="text-muted-foreground">(${product.reviews})</span>
              </div>
              <div class="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span class="text-xs text-muted-foreground line-through">R$ ${product.oldPrice}</span>
                <span class="font-display text-lg font-bold text-foreground sm:text-xl">R$ ${product.price}</span>
              </div>
            </div>
          </a>
        `).join("")}
      </div>
    </div>
  `;

  bestSellersSection.after(specialPodsSection);
}

const faqButtons = document.querySelectorAll("#faq button[data-faq-answer]");

const setFaqExpanded = (button, expanded) => {
  button.setAttribute("aria-expanded", String(expanded));

  let answer = button.nextElementSibling;

  if (expanded) {
    if (!answer || answer.tagName !== "P") {
      answer = document.createElement("p");
      answer.className = "px-5 pb-5 text-sm leading-relaxed text-muted-foreground";
      answer.textContent = button.dataset.faqAnswer;
      button.after(answer);
    }
  } else if (answer && answer.tagName === "P") {
    answer.remove();
  }

  const icon = button.querySelector("svg");

  if (!icon) return;

  icon.classList.toggle("lucide-minus", expanded);
  icon.classList.toggle("lucide-plus", !expanded);
  icon.classList.toggle("text-primary", expanded);
  icon.classList.toggle("text-muted-foreground", !expanded);
  icon.innerHTML = expanded
    ? '<path d="M5 12h14"></path>'
    : '<path d="M5 12h14"></path><path d="M12 5v14"></path>';
};

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";

    faqButtons.forEach((item) => setFaqExpanded(item, item === button && expanded));
  });
});

const flavorContainers = [...document.querySelectorAll("main .mt-3.flex.flex-wrap.gap-2")]
  .filter((container) => container.querySelector(":scope > button[aria-pressed]"));

flavorContainers.forEach((container) => {
  container.classList.add("flavor-options");
  container.classList.add("flavor-options-large");

  const buttons = [...container.querySelectorAll(":scope > button[aria-pressed]")];
  const selectedSummary = container.previousElementSibling;
  let selectedLabel = selectedSummary?.querySelector("[data-selected-flavor]");

  const setSelectedFlavor = (selectedButton) => {
    buttons.forEach((button) => {
      const selected = button === selectedButton;
      const title = button.querySelector("span");

      button.setAttribute("aria-pressed", String(selected));
      button.classList.remove("bg-primary/10", "bg-primary/15", "text-foreground");
      button.classList.toggle("border-primary", selected);
      button.classList.toggle("bg-primary/15", selected);
      button.classList.toggle("text-primary", selected);
      button.classList.toggle("border-border", !selected);
      button.classList.toggle("bg-card", !selected);
      button.classList.toggle("text-muted-foreground", !selected);

      if (!title) return;

      title.querySelector(".flavor-check-icon")?.remove();

      if (selected) {
        const check = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        check.setAttribute("viewBox", "0 0 24 24");
        check.setAttribute("fill", "none");
        check.setAttribute("stroke", "currentColor");
        check.setAttribute("stroke-width", "2");
        check.setAttribute("stroke-linecap", "round");
        check.setAttribute("stroke-linejoin", "round");
        check.classList.add("size-3.5", "shrink-0", "flavor-check-icon");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "m5 12 4 4L19 6");
        check.append(path);
        title.prepend(check);
      }
    });

    const flavorName = selectedButton.querySelector("span")?.textContent.trim();

    if (!flavorName || !selectedSummary) return;

    if (!selectedLabel) {
      selectedLabel = document.createElement("span");
      selectedLabel.dataset.selectedFlavor = "";
      selectedLabel.className = "text-sm text-muted-foreground";

      const name = document.createElement("span");
      name.className = "text-foreground";
      selectedLabel.append("Selecionado: ", name);
      selectedSummary.append(selectedLabel);
    }

    selectedLabel.querySelector(".text-foreground").textContent = flavorName;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled || button.getAttribute("aria-disabled") === "true") return;

      setSelectedFlavor(button);
    });

    if (button.getAttribute("aria-pressed") === "true") {
      setSelectedFlavor(button);
    }
  });
});

window.createDeliveryBanner = () => {
  const delivery = document.createElement("div");
  delivery.setAttribute("data-delivery-city", "");
  delivery.className =
    "mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-4 text-center font-display text-xl font-extrabold uppercase leading-tight text-primary sm:text-2xl";

  const renderCity = (city) => {
    delivery.textContent = `RECEBA EM ATÉ 1 DIA ÚTIL ${city ? `NA CIDADE DE ${city}` : "NA SUA CIDADE"}`;
  };

  let cachedCity = null;
  try {
    cachedCity = sessionStorage.getItem("userCity");
  } catch {}
  renderCity(cachedCity);

  if (!cachedCity) {
    const lookups = [
      "https://get.geojs.io/v1/ip/geo.json",
      "https://ipapi.co/json/",
    ];

    (async () => {
      for (const url of lookups) {
        try {
          const response = await fetch(url);
          const { city } = await response.json();
          if (city) {
            try {
              sessionStorage.setItem("userCity", city);
            } catch {}
            renderCity(city);
            return;
          }
        } catch {}
      }
    })();
  }

  return delivery;
};

const heroFaqButton = [...document.querySelectorAll("button")].find(
  (button) => button.textContent.trim() === "Tirar dúvidas",
);

if (bestSellersSection && heroFaqButton) {
  heroFaqButton.parentElement.after(window.createDeliveryBanner());
}