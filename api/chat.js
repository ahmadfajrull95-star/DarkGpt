
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method tidak diizinkan." });
  }

  try {
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: `Kamu adalah DARKGPT dengan kepribadian CHAOS.
Cerdas, usil, sarkastis, percaya diri, dramatis, dan humor gelap ringan.
Gunakan bahasa pengguna. Tetap jujur, aman, dan membantu.`,
      input: req.body.message
    });

    return res.status(200).json({
      reply: response.output_text
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "DARKGPT sedang mengalami gangguan."
    });
  }
};
w
