
window.onload = function () {
  
  //write your code here

    const pronouns = ['the', 'our','these','those'];
    const adjs = ['great', 'big','small','nice'];
    const nouns = ['jogger', 'racoon','shirt','hat'];
    const domains = ['.com', '.net', '.org', '.es'];

    const resultado = document.getElementById('resultado');

    let html = '';

    for (let pronoun of pronouns) {
      for (let adj of adjs) {
        for (let noun of nouns) {
          for (let domain of domains) {
            const namedomain = `${pronoun}${adj}${noun}${domain}`;
            html += `<li>${namedomain}</li>`;
          }
        }
      }
    }

    resultado.innerHTML = html;

    console.log("muestra mis namedominios correctamnte");
  };
