const modalOverlay = document.querySelector('.modal-overlay'); /*elemento da DOM que é a modelagem de objetos a 'querySelector' vai selecionar o elemento seja ele baseado em classe, id, ou nome da tag, ou seja baseado no seletor CSS */
const cards = document.querySelectorAll('.card') /*vai pegar todas as tags 'card' do HTML e armazenar na variaveç "cards"*/

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id"); // pegar o atributo id do card e adicionar o id do tamplate string do link do video    
        window.location.href = `/video?id=${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active") /*classList vai pega tudo o que tem de classe e jogar na variavel que é a classe específica selecionada na variavel q é o "modal-overlay" */
    modalOverlay.querySelector("iframe").src = ""
})