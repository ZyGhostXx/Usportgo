;(function ($) {
    var container = null;
    $.fn.home = function (options) {
        container = this;
        carregarFormulario()
    }

    function carregarFormulario() {
        var html = '<header>';
        html += '<div id="footer">ADS Team</div>';
        html += '<span class="menu-anchor"></span>';
        html += '<h1>U-Sport GO</h1>';
        html += '</header>';
        html += '<menu>';
        html += '<ul>';
        html += '<div id="Rank1">Rank:1</div>';
        html += '<div>';
        html += '<img id="Logo" alt="ADS" src="img/WhatsApp Image 2019-03-18 at 23.47.45.jpeg" />';
        html += '<div id="Rank">Team Rank: 1°</div>';
        html += '</div>';
        html += '<div id="Team">ADS Team</div>';
        html += '<li><a href="#"><p>Gregory Emmanuel</p></a></li>';
        html += '<li><a href="./index.html">Home</a></li>';
        html += '<li><a href="#">Equipe</a></li>';
        html += '<li><a href="#">Noticia</a></li>';
        html += '<li><a href="#">Suporte</a></li>';
        html += '<li><a href="./Campeonato.html">Campeonatos</a></li>';
        html += '</ul>';
        html += '</menu>';
        html += '<section class="main">';
        html += '<div class="post">';
        html += '<P>Lorem ipsum dolor sit,<br />amet consectetur adipisicing elit.';
        html += '<br />Consequatur velit asperiores aperiam dolorem necessitatibus';
        html += 'fugit expedita adipisci consectetur nobi.';
        html += '<br />Libero ipsum eos corporis labore vero itaque,';
        html += '<br />voluptatum enim dolorem doloribus?';
        html += '</p>';
        html += '</div>';
        html += '</section>';

        container.parent().html(html);
    }
})(jQuery);
