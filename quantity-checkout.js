(() => {
  const checkoutLinksByProduct = {
    "dinner-lady-galax-60000": {
      1: "https://pay.mercadodepagamento.online/PyE2ZyQd2n5ZqRb",
      2: "https://pay.mercadodepagamento.online/z0qn35Lb7Xvg98m",
      3: "https://pay.mercadodepagamento.online/a9ArZMMJQOvZ7xj",
    },
    elfa: {
      1: "https://vega.com.br/4",
      2: "https://vega.com.br/5",
      3: "https://vega.com.br/6",
    },
    elfb: {
      1: "https://vega.com.br/7",
      2: "https://vega.com.br/8",
      3: "https://vega.com.br/9",
    },
    "elfbar-bc-15000": {
      1: "https://pay.mercadodepagamento.online/n1NLgwLkVNp3MxE",
      2: "https://pay.mercadodepagamento.online/n1NLgwLkVOp3MxE",
      3: "https://pay.mercadodepagamento.online/N1nVZp4K5dLZlM6",
    },
    "elfbar-duke-35000": {
      1: "https://pay.mercadodepagamento.online/N1nVZp4K5WLZlM6",
      2: "https://pay.mercadodepagamento.online/mwK436e4EzxgQ8b",
      3: "https://pay.mercadodepagamento.online/BNjzgPA4YN03M78",
    },
    "elfbar-ebcreate-bc-pro-40000": {
      1: "https://pay.mercadodepagamento.online/65XDZBz2djpZVJw",
      2: "https://pay.mercadodepagamento.online/JqoR32mAYpqgVj5",
      3: "https://pay.mercadodepagamento.online/nWrxGWvKRMOZ654",
    },
    "elfbar-gh33000-pro": {
      1: "https://pay.mercadodepagamento.online/NDr8gm4qyjVGBmj",
      2: "https://pay.mercadodepagamento.online/PVYB34b25vvGKzk",
      3: "https://pay.mercadodepagamento.online/YL9jZD02Dk8Zp4q",
    },
    "elfbar-ice-king-40000": {
      1: "https://pay.mercadodepagamento.online/meABG9ewRK5G6Ea",
      2: "https://pay.mercadodepagamento.online/kYL6geRa0ro3rKM",
      3: "https://pay.mercadodepagamento.online/xQBPZvl0J1BgmVq",
    },
    "elfbar-trio-40000": {
      1: "https://pay.mercadodepagamento.online/yOeXZKxQnAxGAQa",
      2: "https://pay.mercadodepagamento.online/z0qn35Lb7Ovg98m",
      3: "https://pay.mercadodepagamento.online/a9ArZMMJQbvZ7xj",
    },
    elfc: {
      1: "https://vega.com.br/28",
      2: "https://vega.com.br/29",
      3: "https://vega.com.br/30",
    },
    "ignite-shisha-40000": {
      1: "https://pay.mercadodepagamento.online/kYL6geRa0Mo3rKM",
      2: "https://pay.mercadodepagamento.online/nQ7kZ7D4r60G0eJ",
      3: "https://pay.mercadodepagamento.online/RmA83EQVoqp3PVp",
    },
    "ignite-v150-pro-15000": {
      1: "https://pay.mercadodepagamento.online/xQBPZvl0JABgmVq",
      2: "https://pay.mercadodepagamento.online/1VOvGVOYj5dgD62",
      3: "https://pay.mercadodepagamento.online/P5LNZ8DbjPOZaRy",
    },
    "ignite-v155-ultra-slim-black": {
      1: "https://pay.mercadodepagamento.online/DPXw3XnYJROGzmp",
      2: "https://pay.mercadodepagamento.online/lDW0Za7x46RgN7E",
      3: "https://pay.mercadodepagamento.online/KV603kaKQ2bGw8y",
    },
    "ignite-v155-ultra-slim-orange": {
      1: "https://pay.mercadodepagamento.online/eApQgzOkW5J3Eb7",
      2: "https://pay.mercadodepagamento.online/QqyLgqA074WgvkE",
      3: "https://pay.mercadodepagamento.online/a6pVgdj4lE5Zk7B",
    },
    "ignite-v300-30000-black": {
      1: "https://pay.mercadodepagamento.online/mwK436e4EnxgQ8b",
      2: "https://pay.mercadodepagamento.online/5pjw3RmV5byg2lQ",
      3: "https://pay.mercadodepagamento.online/521rZJMOAlb3eaX",
    },
    "ignite-v400-ice-40000": {
      1: "https://pay.mercadodepagamento.online/BNjzgPA4Y903M78",
      2: "https://pay.mercadodepagamento.online/PyE2ZyQd2Y5ZqRb",
      3: "https://pay.mercadodepagamento.online/7vJOGYYexV4GKXd",
    },
    "ignite-v400-mix-40000": {
      1: "https://pay.mercadodepagamento.online/ODAK3LXnxND3E6V",
      2: "https://pay.mercadodepagamento.online/DPXw3XnYJ9OGzmp",
      3: "https://pay.mercadodepagamento.online/eApQgzOkWNJ3Eb7",
    },
    "lost-angel-sphere-35k": {
      1: "https://vega.com.br/52",
      2: "https://pay.mercadodepagamento.online/q510ZOAdy5dgE9D",
      3: "https://pay.mercadodepagamento.online/YEwR3A0QqEbgdKy",
    },
    "luma-dinner-lady-20000": {
      1: "https://pay.mercadodepagamento.online/DYp0Zx0L8bQZmvX",
      2: "https://pay.mercadodepagamento.online/2wq7Gr45EDE3BAN",
      3: "https://pay.mercadodepagamento.online/6YQPgjW5N8e3pxz",
    },
    "nikbar-25000": {
      1: "https://pay.mercadodepagamento.online/nQ7kZ7D4rQ0G0eJ",
      2: "https://pay.mercadodepagamento.online/nOzxZo41K8jGJ07",
      3: "https://pay.mercadodepagamento.online/v7R0glk1bE7GVr9",
    },
    "oxbar-invisible-vapor-50k": {
      1: "https://pay.mercadodepagamento.online/6YQPgjW5N6e3pxz",
      2: "https://pay.mercadodepagamento.online/ODAK3LXnx1D3E6V",
      3: "https://pay.mercadodepagamento.online/DYp0Zx0L8AQZmvX",
    },
    "oxbar-maze-100k": {
      1: "https://pay.mercadodepagamento.online/5pjw3RmV5pyg2lQ",
      2: "https://pay.mercadodepagamento.online/521rZJMOA1b3eaX",
      3: "https://vega.com.br/66",
    },
    "oxbar-svopp-g64k-64000": {
      1: "https://pay.mercadodepagamento.online/2wq7Gr45EdE3BAN",
      2: "https://pay.mercadodepagamento.online/lqv130M1baRZxbj",
      3: "https://pay.mercadodepagamento.online/4KovG1AMyqJGyDE",
    },
    "vanther-30k-30000": {
      1: "https://pay.mercadodepagamento.online/RmA83EQVoWp3PVp",
      2: "https://pay.mercadodepagamento.online/rn4RgQAWKBzgwBV",
      3: "https://pay.mercadodepagamento.online/bz5KZbE1DQK37dL",
    },
    "elfthc3000": {
      1: "https://pay.mercadodepagamento.online/1VOvGVOYj7dgD62",
      2: "https://pay.mercadodepagamento.online/meABG9ewR75G6Ea",
      3: "#",
    },
    "elfthc5000": {
      1: "https://pay.mercadodepagamento.online/P5LNZ8DbjyOZaRy",
      2: "https://pay.mercadodepagamento.online/NDr8gm4qyaVGBmj",
      3: "#",
    },
    "elfthc8000": {
      1: "https://pay.mercadodepagamento.online/JqoR32mAY4qgVj5",
      2: "https://pay.mercadodepagamento.online/65XDZBz2dWpZVJw",
      3: "#",
    },
    "ig-v500-50k": {
      1: "https://pay.mercadodepagamento.online/nQ7kZ7D4rQ9G0eJ",
      2: "https://pay.mercadodepagamento.online/RmA83EQVoWz3PVp",
      3: "https://pay.mercadodepagamento.online/2wq7Gr45EdD3BAN",
    },
    "ignite-v250-25000": {
      1: "https://pay.mercadodepagamento.online/nWrxGWvKRrOZ654",
      2: "https://pay.mercadodepagamento.online/lDW0Za7x4nRgN7E",
      3: "https://pay.mercadodepagamento.online/KV603kaKQLbGw8y",
    },
    "ssd-samsung-990-pro": {
      1: "#",
      2: "#",
      3: "#",
    },
  };
  const currentProductSlug = window.location.pathname
    .split("/")
    .pop()
    .replace(/\.html$/, "");
  const checkoutLinks = checkoutLinksByProduct[currentProductSlug];

  if (!checkoutLinks) {
    throw new Error(
      `Não foi possível determinar os links de compra para "${currentProductSlug}".`,
    );
  }

  const MAX_ORDER_TOTAL = 350;

  function parseBrlPrice(priceText) {
    return Number.parseFloat(
      priceText
        .replace(/[^\d,.-]/g, "")
        .replace(/\./g, "")
        .replace(",", "."),
    );
  }

  // Maior quantidade (até 3) cujo total com a promoção sucessiva não passa do limite.
  function getMaxQuantityForPrice(unitPrice) {
    if (!unitPrice) {
      return 3;
    }
    const secondUnitPrice = Math.round(unitPrice * 0.85 * 100) / 100;
    const thirdUnitPrice = Math.round(unitPrice * 0.7 * 100) / 100;
    if (unitPrice + secondUnitPrice + thirdUnitPrice <= MAX_ORDER_TOTAL) {
      return 3;
    }
    return 2;
  }

  function findUnitPrice(startElement) {
    let container = startElement;
    while (container) {
      const priceSpan = [...container.querySelectorAll("span")].find(
        (span) => span.textContent.trim().startsWith("R$"),
      );
      if (priceSpan) {
        return parseBrlPrice(priceSpan.textContent) || 0;
      }
      container = container.parentElement;
    }
    return 0;
  }

  function setupQuantitySelector(increaseButton) {
    const quantityControls = increaseButton.parentElement;
    const quantityDisplay = quantityControls.querySelector("span");
    const purchaseRow = quantityControls.parentElement;
    const purchaseLink = purchaseRow.querySelector("a[href]");
    const decreaseButton = quantityControls.querySelector(
      'button[aria-label="Diminuir quantidade"]',
    );

    if (!quantityDisplay || !purchaseLink) {
      return;
    }

    let flavorLabel;
    let productInfo;
    let productDetails = purchaseRow;
    while (productDetails && !flavorLabel) {
      flavorLabel = [...productDetails.querySelectorAll("p")].find(
        (paragraph) => {
          const label = paragraph.textContent.trim();
          return (
            label === "Sabor" ||
            label === "Sabores" ||
            label === "Capacidade" ||
            label === "Capacidades"
          );
        },
      );
      if (flavorLabel) {
        productInfo = productDetails;
        break;
      }
      productDetails = productDetails.parentElement;
    }

    const flavorOptions = flavorLabel?.parentElement?.parentElement;
    let flavorButtons = flavorOptions
      ? [...flavorOptions.querySelectorAll('button[aria-pressed]')]
      : [];

    if (flavorButtons.length) {
      const popularity = [
        [/blue razz|blue raspberry|framboesa azul/, 100],
        [/strawberry|morango/, 90],
        [/watermelon|melancia/, 85],
        [/grape|uva/, 80],
        [/mango|manga/, 75],
        [/mint|menta|menthol|mentol/, 70],
        [/blueberry|mirtilo/, 65],
        [/peach|p[eê]ssego/, 60],
        [/banana/, 55],
        [/cherry|cereja/, 50],
        [/apple|ma[cç][aã]/, 45],
        [/pineapple|abacaxi/, 40],
        [/kiwi/, 35],
        [/passion fruit|maracuj[aá]/, 30],
        [/lemon|lime|lim[aã]o/, 30],
        [/cola|orange|laranja/, 25],
      ];
      const rankedFlavors = flavorButtons
        .map((button, index) => {
          const name = button.textContent.normalize("NFD").replace(
            /[\u0300-\u036f]/g,
            "",
          ).toLowerCase();
          const score = popularity.reduce(
            (total, [pattern, points]) =>
              total + (pattern.test(name) ? points : 0),
            0,
          );
          return { button, index, score };
        })
        .sort((first, second) => second.score - first.score || first.index - second.index);

      const visibleFlavors = new Set(
        rankedFlavors.slice(0, 6).map(({ button }) => button),
      );
      flavorButtons.forEach((button) => {
        if (!visibleFlavors.has(button)) {
          button.hidden = true;
          button.setAttribute("aria-hidden", "true");
          button.disabled = true;
        }
      });
      flavorButtons = flavorButtons.filter((button) =>
        visibleFlavors.has(button),
      );

      setupFlavorQuantities({
        flavorButtons,
        flavorLabel,
        flavorOptions,
        productInfo,
        quantityControls,
        quantityDisplay,
        increaseButton,
        decreaseButton,
        purchaseLink,
      });
      return;
    }

    const maxQuantity = getMaxQuantityForPrice(findUnitPrice(purchaseRow));

    function updatePurchaseLink() {
      const quantity = Math.min(
        maxQuantity,
        Math.max(1, Number.parseInt(quantityDisplay.textContent.trim(), 10) || 1),
      );

      quantityDisplay.textContent = String(quantity);
      if (purchaseLink.href !== checkoutLinks[quantity]) {
        purchaseLink.href = checkoutLinks[quantity];
      }
      increaseButton.disabled = quantity >= maxQuantity;
      increaseButton.setAttribute("aria-disabled", String(quantity >= maxQuantity));
    }

    function changeQuantity(event, delta) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const quantity = Number.parseInt(quantityDisplay.textContent.trim(), 10) || 1;
      quantityDisplay.textContent = String(
        Math.min(maxQuantity, Math.max(1, quantity + delta)),
      );
      updatePurchaseLink();
    }

    increaseButton.addEventListener(
      "click",
      (event) => changeQuantity(event, 1),
      true,
    );
    decreaseButton?.addEventListener(
      "click",
      (event) => changeQuantity(event, -1),
      true,
    );

    updatePurchaseLink();
  }

  function setupFlavorQuantities({
    flavorButtons,
    flavorLabel,
    flavorOptions,
    productInfo,
    quantityControls,
    quantityDisplay,
    increaseButton,
    decreaseButton,
    purchaseLink,
  }) {
    const flavorCounts = new Map();
    const unitPriceText = [...productInfo.querySelectorAll("span")].find(
      (span) => span.textContent.trim().startsWith("R$"),
    )?.textContent;
    const parsePrice = parseBrlPrice;
    const unitPrice = unitPriceText ? parsePrice(unitPriceText) : 0;
    const maxQuantity = getMaxQuantityForPrice(unitPrice);
    const originalPriceText = [
      ...productInfo.querySelectorAll("span"),
    ].find(
      (span) =>
        span.className.includes("line-through") &&
        span.textContent.trim().startsWith("R$"),
    )?.textContent;
    const originalUnitPrice = originalPriceText
      ? parsePrice(originalPriceText)
      : unitPrice;
    const formatPrice = (value) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    const discountSummary = document.createElement("p");
    discountSummary.setAttribute("aria-live", "polite");
    discountSummary.style.cssText =
      "margin:0;color:#2563eb;font-size:1.25rem;font-weight:700;line-height:1.5;text-align:center";
    const unitPriceSummary = document.createElement("p");
    unitPriceSummary.style.cssText =
      "margin:0;color:#374151;font-size:1.2rem;font-weight:600;line-height:1.5;text-align:center";
    const priceSummary = document.createElement("p");
    priceSummary.setAttribute("role", "status");
    priceSummary.setAttribute("aria-live", "polite");
    priceSummary.style.cssText =
      "margin:0;color:#2563eb;font-size:3rem;font-weight:800;line-height:1.2;text-align:center";
    const savingsSummary = document.createElement("p");
    savingsSummary.style.cssText =
      "margin:0;color:#15803d;font-size:1.2rem;font-weight:700;line-height:1.4;text-align:center";
    const priceLine = document.createElement("div");
    priceLine.style.cssText =
      "display:flex;flex-wrap:wrap;align-items:baseline;justify-content:center;gap:.5rem .75rem;text-align:center";
    priceLine.append(priceSummary, savingsSummary);
    const priceContainer = document.createElement("div");
    priceContainer.style.cssText =
      "margin:0 0 .75rem;text-align:center";
    priceContainer.append(discountSummary, unitPriceSummary, priceLine);
    quantityControls.parentElement.parentElement.insertBefore(
      priceContainer,
      quantityControls.parentElement,
    );

    const oldFlavorNotice = [
      ...flavorOptions.parentElement.querySelectorAll("p"),
    ].find((paragraph) =>
      paragraph.textContent.includes("pedidos separados"),
    );
    if (oldFlavorNotice) {
      oldFlavorNotice.hidden = true;
    }

    flavorLabel.parentElement
      .querySelector("[data-selected-flavor]")
      ?.remove();

    function getTotalQuantity() {
      return [...flavorCounts.values()].reduce(
        (total, flavor) => total + flavor.count,
        0,
      );
    }

    function updateSelection() {
      const total = getTotalQuantity();
      quantityDisplay.textContent = String(total);
      const secondUnitPrice = Math.round(unitPrice * 0.85 * 100) / 100;
      const thirdUnitPrice = Math.round(unitPrice * 0.7 * 100) / 100;
      const estimatedTotal =
        (total > 0 ? unitPrice : 0) +
        (total > 1 ? secondUnitPrice : 0) +
        (total > 2 ? thirdUnitPrice : 0);
      const savings = Math.max(
        0,
        Math.round((originalUnitPrice * total - estimatedTotal) * 100) / 100,
      );
      discountSummary.textContent =
        total >= maxQuantity
          ? maxQuantity < 3 && total === maxQuantity
            ? `Limite de ${maxQuantity} unidades para este produto.`
            : ""
          : total === 1
            ? "+15% OFF na próxima unidade"
            : total === 2
              ? "+30% OFF na próxima unidade"
              : "";
      unitPriceSummary.textContent =
        total >= maxQuantity && total < 3
          ? `Por unidade: ${formatPrice(unitPrice)} + ${formatPrice(secondUnitPrice)}`
          : total === 1
            ? `Próxima unidade: ${formatPrice(secondUnitPrice)}`
            : total === 2
              ? `Próxima unidade: ${formatPrice(thirdUnitPrice)}`
              : total === 3
                ? `Por unidade: ${formatPrice(unitPrice)} + ${formatPrice(secondUnitPrice)} + ${formatPrice(thirdUnitPrice)}`
                : "";
      priceSummary.textContent = total ? formatPrice(estimatedTotal) : "";
      savingsSummary.textContent = savings
        ? `Economia total de ${formatPrice(savings)}`
        : "";
      purchaseLink.href = total ? checkoutLinks[total] : "#";
      purchaseLink.setAttribute("aria-disabled", String(total === 0));
      purchaseLink.style.opacity = total ? "1" : ".55";
      purchaseLink.style.cursor = total ? "pointer" : "not-allowed";
      flavorCounts.forEach(({ count, badge, removeButton, button, name }) => {
        button.setAttribute("aria-pressed", String(count > 0));
        button.setAttribute(
          "aria-label",
          `${name}: ${count} ${count === 1 ? "unidade" : "unidades"}`,
        );
        button.style.borderColor = count > 0 ? "#4169e8" : "";
        button.style.backgroundColor = count > 0 ? "#eef2ff" : "";
        button.style.color = count > 0 ? "#111827" : "";
        badge.style.display = count > 0 ? "inline-flex" : "none";
        badge.textContent = count > 0 ? `× ${count}` : "";
        badge.hidden = count === 0;
        removeButton.disabled = count === 0;
        removeButton.setAttribute("aria-disabled", String(count === 0));
      });
    }

    function changeFlavorCount(button, delta, event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const flavor = flavorCounts.get(button);
      const total = getTotalQuantity();
      if (delta > 0 && total >= maxQuantity) {
        discountSummary.textContent =
          maxQuantity < 3
            ? `Limite de ${maxQuantity} unidades para este produto.`
            : "";
        return;
      }

      flavor.count = Math.max(0, Math.min(maxQuantity, flavor.count + delta));
      updateSelection();
    }

    flavorButtons.forEach((button) => {
      const name = button.textContent.trim();
      const parent = button.parentElement;
      const wrapper = document.createElement("div");
      wrapper.style.cssText =
        "display:inline-flex;align-items:stretch;gap:.35rem;margin:.15rem";
      parent.insertBefore(wrapper, button);
      wrapper.append(button);

      const badge = document.createElement("span");
      badge.hidden = true;
      badge.style.cssText =
        "display:none;align-items:center;justify-content:center;margin-top:.35rem;padding:.15rem .45rem;border-radius:999px;background:#4169e8;color:#fff;font-size:.7rem;font-weight:800";
      button.append(badge);

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "−";
      removeButton.setAttribute("aria-label", `Remover uma unidade de ${name}`);
      removeButton.style.cssText =
        "align-self:center;width:2rem;height:2rem;border:1px solid #d1d5db;border-radius:999px;background:#fff;color:#374151;font-size:1.1rem;font-weight:700";
      wrapper.append(removeButton);

      const flavor = { button, name, count: 0, badge, removeButton };
      flavorCounts.set(button, flavor);
      button.classList.remove(
        "border-primary",
        "bg-primary/10",
        "bg-primary/15",
        "text-primary",
        "text-foreground",
      );
      button.classList.add(
        "border-border",
        "bg-card",
        "text-muted-foreground",
      );
      button.querySelectorAll("svg").forEach((icon) => {
        if (
          icon.classList.contains("flavor-check-icon") ||
          icon.classList.contains("lucide-check")
        ) {
          icon.remove();
        }
      });
      button.addEventListener(
        "click",
        (event) => changeFlavorCount(button, 1, event),
        true,
      );
      removeButton.addEventListener(
        "click",
        (event) => changeFlavorCount(button, -1, event),
        true,
      );
      button.setAttribute("aria-pressed", "false");
    });

    function blockQuantityButton(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      discountSummary.textContent =
        "A quantidade é definida pela seleção de opções.";
    }

    increaseButton.addEventListener("click", blockQuantityButton, true);
    decreaseButton?.addEventListener("click", blockQuantityButton, true);
    purchaseLink.addEventListener(
      "click",
      (event) => {
      if (getTotalQuantity() === 0) {
          event.preventDefault();
          event.stopImmediatePropagation();
          discountSummary.textContent =
          "Escolha pelo menos 1 unidade antes de continuar.";
        }
      },
      true,
    );

    quantityControls.setAttribute(
      "aria-label",
      "Quantidade definida pela seleção de opções",
    );
    updateSelection();
  }

  document
    .querySelectorAll('button[aria-label="Aumentar quantidade"]')
    .forEach(setupQuantitySelector);
})();
