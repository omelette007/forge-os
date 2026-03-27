function analyzeCode(code) {
  let score = 100;
  let issues = [];
  let improvements = [];

  if (code.includes("var ")) {
    score -= 15;
    issues.push("Utilisation de 'var'");
    improvements.push("Utiliser let ou const");
  }

  if (code.includes("==")) {
    score -= 15;
    issues.push("Comparaison faible '=='");
    improvements.push("Utiliser ===");
  }

  if (code.includes("console.log")) {
    score -= 10;
    issues.push("Logs actifs en production");
    improvements.push("Supprimer les console.log");
  }

  return {
    score,
    issues,
    improvements,
    message: score > 80 ? "Code solide" : "Amélioration nécessaire"
  };
}

module.exports = { analyzeCode };
