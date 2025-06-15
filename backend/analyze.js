// analyze.js (Backend logic)
const express = require("express");
const router = express.Router();

// POST route for analyzing symptoms
router.post("/analyze", (req, res) => {
  const symptomInput = req.body.symptoms.toLowerCase();
  let remedy = "";

  // Remedies for symptoms
  if (symptomInput.includes("fever")) {
    remedy = "Stay hydrated with coconut water. Use a cold compress on your forehead. If fever lasts over 2 days, consult a doctor.";
  } else if (symptomInput.includes("cough")) {
    remedy = "Have warm water with honey and ginger. Avoid cold foods. If persistent, consult a doctor.";
  } else if (symptomInput.includes("vomit") || symptomInput.includes("vomiting")) {
    remedy = "Sip ginger tea or ORS slowly. Avoid spicy food. If vomiting continues, consult a physician.";
  } else if (symptomInput.includes("cold")) {
    remedy = "Steam inhalation and warm soup may help. Get good rest. If symptoms last long, see a doctor.";
  } else if (symptomInput.includes("headache")) {
    remedy = "Rest in a quiet room. Stay hydrated. Try peppermint oil on the temples. If severe, see a doctor.";
  } else if (symptomInput.includes("stomach pain")) {
    remedy = "Use a hot water bag, eat light meals like rice or curd. Mint tea helps. If pain is intense, visit a doctor.";
  } else if (symptomInput.includes("gas") || symptomInput.includes("bloating")) {
    remedy = "Drink warm ajwain or fennel water. Avoid carbonated drinks. Light walking helps digestion.";
  } else if (symptomInput.includes("diarrhea")) {
    remedy = "Keep sipping ORS. Eat boiled rice or banana. Avoid milk and fried food. Seek help if signs of dehydration.";
  } else if (symptomInput.includes("back pain")) {
    remedy = "Apply warm compress, stretch gently. Take short walks. If pain doesn’t ease, consult a doctor.";
  } else if (symptomInput.includes("sleepless") || symptomInput.includes("insomnia")) {
    remedy = "Avoid screens before bed. Try chamomile tea or warm milk. Do breathing exercises or light reading.";
  } else if (symptomInput.includes("anxiety") || symptomInput.includes("stress")) {
    remedy = "Practice deep breathing and meditation. Go for a short walk. Listen to calming music or talk to someone you trust.";
  } else if (symptomInput.includes("itch") || symptomInput.includes("itching")) {
    remedy = "Apply aloe vera gel or calamine lotion. Avoid hot water baths. If it spreads, consult a dermatologist.";
  } else if (symptomInput.includes("rash") || symptomInput.includes("rashes")) {
    remedy = "Keep the area clean and dry. Use natural moisturizers like coconut oil. Avoid tight clothing and allergens.";
  } else if (symptomInput.includes("food poisoning")) {
    remedy = "Stay hydrated with ORS. Eat only bland foods like rice or toast. Avoid dairy and oily foods. Seek help if condition worsens.";
  } else {
    remedy = "For such symptoms, it's best to consult a medical professional directly.";
  }

  res.json({ result: remedy });
});

module.exports = router;


