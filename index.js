let input = document.getElementById('fname')

input.onkeypress = function(e) {
    if ( e.key == 'Enter' ) {
        let url = 'https://clem2004.github.io/enigme/' + input.value.toLowerCase() + '.html'
        window.open(url)
    }
}