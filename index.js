let input = document.getElementById('fname')

input.onkeypress = function(e) {
    if ( e.key == 'Enter' ) {
        let url = 'https://clem2004.github.io/enigme/' + input.value.toLowerCase() + '.html'

        if (doesFileExist(url)) {
            window.location.assign(url)
        } else {
            console.log('wrong guess')
        }
    }
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}