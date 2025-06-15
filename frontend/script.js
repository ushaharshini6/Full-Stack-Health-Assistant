async function analyzeSymptoms() {
  const input = document.getElementById("symptomInput").value.trim();
  const resultBox = document.getElementById("result");

  if (!input) {
    resultBox.innerHTML = "❗ Please enter your symptoms.";
    return;
  }

  resultBox.innerHTML = "⏳ Analyzing your symptoms...";

  const symptom = input.toLowerCase();
  let remedy = "";

  // ✅ Remedies for common and added symptoms
  if (symptom.includes("fever")) {
    remedy = "Stay hydrated with coconut water. Use a cold compress on your forehead. If fever lasts over 2 days, consult a doctor.";
  } else if (symptom.includes("cough")) {
    remedy = "Have warm water with honey and ginger. Avoid cold foods. If persistent, consult a doctor.";
  } else if (symptom.includes("vomit") || symptom.includes("vomiting")) {
    remedy = "Sip ginger tea or ORS slowly. Avoid spicy food. If vomiting continues, consult a physician.";
  } else if (symptom.includes("cold")) {
    remedy = "Steam inhalation and warm soup may help. Get good rest. If symptoms last long, see a doctor.";
  } else if (symptom.includes("headache")) {
    remedy = "Rest in a quiet room. Stay hydrated. Apply peppermint oil gently on your forehead. If severe, see a doctor.";
  } else if (symptom.includes("stomach pain")) {
    remedy = "Use a hot water bag, eat light meals like rice or curd. Mint tea helps. If pain is intense, visit a doctor.";
  } else if (symptom.includes("gas") || symptom.includes("bloating")) {
    remedy = "Drink warm ajwain or fennel water. Avoid carbonated drinks. Light walking helps digestion.";
  } else if (symptom.includes("diarrhea")) {
    remedy = "Keep sipping ORS. Eat boiled rice or banana. Avoid milk and fried food. Seek help if signs of dehydration.";
  } else if (symptom.includes("back pain")) {
    remedy = "Apply warm compress, stretch gently. Take short walks. If pain doesn’t ease, consult a doctor.";
  } else if (symptom.includes("sleepless") || symptom.includes("insomnia")) {
    remedy = "Avoid screens before bed. Try chamomile tea or warm milk. Do breathing exercises or light reading.";
  } else if (symptom.includes("anxiety") || symptom.includes("stress")) {
    remedy = "Practice deep breathing and meditation. Go for a short walk. Listen to calming music or talk to someone you trust.";
  } else if (symptom.includes("itch") || symptom.includes("itching")) {
    remedy = "Apply aloe vera gel or calamine lotion. Avoid hot water baths. If it spreads, consult a dermatologist.";
  } else if (symptom.includes("rash") || symptom.includes("rashes")) {
    remedy = "Keep the area clean and dry. Use natural moisturizers like coconut oil. Avoid tight clothing and allergens.";
  } else if (symptom.includes("food poisoning")) {
    remedy = "Stay hydrated with ORS. Eat only bland foods like rice or toast. Avoid dairy and oily foods. Seek help if condition worsens.";
  } else {
    remedy = "For such symptoms, it's best to consult a medical professional directly.";
  }

  // Show remedy in text only
  resultBox.innerHTML = remedy;

  // Voice response with intro and care
  const voiceMessage = `Hi, I'm Ryan, your health assistant. Here’s what might help: ${remedy} Take care and get well soon.`;
  speak(voiceMessage);
}

// 🗣️ Voice Function
function speak(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  const voices = speechSynthesis.getVoices();

  // Try to pick a male voice
  const preferredVoice = voices.find(v =>
    v.name.toLowerCase().includes("male") ||
    v.name.toLowerCase().includes("ryan") ||
    v.name.toLowerCase().includes("microsoft david")
  );

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}









