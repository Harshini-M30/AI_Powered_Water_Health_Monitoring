function exploreDemo() {
    alert("Demo feature coming soon!");
  }
  function viewMore(section) {
    alert("You clicked View More for: " + section);
  }

  function viewMore(feature) {
    if (feature === "AI Image Classifier") {
      window.location.href = "ai.html";
    } else if (feature === "Real-Time Sensors") {
      // Update this path based on your actual sensor page
      window.location.href = "sensors.html";
    } else if (feature === "Health Risk Chatbot") {
      // Update this path based on your actual chatbot page
      window.location.href = "chatbot.html";
    }
  }

  