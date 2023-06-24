// Função para alterar a tradução do atributo lang
function changeLanguage(lang) {
    document.documentElement.lang = lang;
}

  // Captura o evento de clique nos itens do dropdown
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        changeLanguage(lang);
    });
});