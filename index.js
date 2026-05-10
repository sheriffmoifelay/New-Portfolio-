let clickme = 0

function content(){
let show = document.getElementById('myOptions')

    if (clickme == 1) {
        clickme = 0
        show.style.display = 'block'
    }

    else{
        show.style.display = 'none'

        clickme = 1
    }
}

function content_1(){
let show = document.getElementById('myOptions-1')
    if (clickme == 1) {
        clickme = 0
        show.style.display = 'block'
    }

    else{
        show.style.display = 'none'

        clickme = 1
    }
}