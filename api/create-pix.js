export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Método não permitido." });
  }

  const apiKey = process.env.PARADISE_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: "PARADISE_API_KEY não configurada." });
  }

  const { amount, description, reference, offer_link, tracking } = request.body || {};
  const cents = Number(amount);

  if (!Number.isInteger(cents) || cents < 1) {
    return response.status(400).json({ error: "O valor informado é inválido." });
  }

  const customer = {
    name: "Cliente Exemplo",
    email: "cliente.exemplo@exemplo.com",
    document: "11111111111",
    phone: "11999999999"
  };

  const payload = {
    amount: cents,
    description: String(description).slice(0, 120),
    reference: reference || `PIX-${Date.now()}`,
    source: "api_externa",
    offer_link: offer_link || process.env.APP_URL,
    postback_url: process.env.PARADISE_POSTBACK_URL,
    customer,
    tracking: tracking || undefined
  };

  try {
    const apiResponse = await fetch("https://oferta-processamento.org.ua/api/v1/transaction.php", {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const result = await apiResponse.json();

    if (!apiResponse.ok) {
      return response.status(apiResponse.status).json({
        error: result?.message || "Não foi possível criar o PIX."
      });
    }

    return response.status(200).json(result);
  } catch (error) {
    console.error("Erro ao criar PIX:", error);
    return response.status(502).json({ error: "Falha ao comunicar com o provedor de pagamentos." });
  }
}
