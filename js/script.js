const {body} = document;

function changBackround(num){
    let previousBackground;
    if(body.className){
        previousBackground = body.className;
    }
    body.className = '';
    switch (num) {
        case '1':
            return(previousBackground === 'backgound-1' ? false : body.classList.add('backgound-1'));
        case '2':
            return(previousBackground === 'backgound-2' ? false : body.classList.add('backgound-2'));
        case '3':
            return(previousBackground === 'backgound-3' ? false : body.classList.add('backgound-3'));
        default:
            break;
    }
}