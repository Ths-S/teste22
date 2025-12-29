// /functions/get.js
export async function onRequestGet() {
  const texto = `linha 1
linha 2
linha 3`;

  return new Response(texto, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="dados.txt"'
    }
  });
}
