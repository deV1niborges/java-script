var pais = "br";

if (pais.trim() === "") {
  console.log("Você não forneceu um país válido.");
} else if (pais.toLowerCase() !== "brasil" && pais.toLowerCase() !== "br") {
  console.log(`Vivendo em ${pais}`);
  console.log("Você é Estrangeiro");
} else {
  console.log(`Vivendo em ${pais}`);
  console.log("Você é Brasileiro");
}
