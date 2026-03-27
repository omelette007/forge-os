const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", async () => {
  const code = document.getElementById("codeInput").value;

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code })
    });

    const result = await response.json();

    document.getElementById("score").textContent = result.score + "/100";
    document.getElementById("message").textContent = result.message;

    const issuesList = document.getElementById("issues");
    issuesList.innerHTML = "";
    result.issues.forEach(issue => {
      const li = document.createElement("li");
      li.textContent = issue;
      issuesList.appendChild(li);
    });

    const improvementsList = document.getElementById("improvements");
    improvementsList.innerHTML = "";
    result.improvements.forEach(improvement => {
      const li = document.createElement("li");
      li.textContent = improvement;
      improvementsList.appendChild(li);
    });

  } catch (err) {
    console.error(err);
    alert("Erreur lors de l’analyse");
  }
});
