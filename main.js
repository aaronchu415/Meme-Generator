
let id_count = 3

function createMeme(e) {

    const [url, textTop, textBottom] = getFormData();

    if (url === '') {
        alert('Pleae Enter Valid URL')
        return false
    }
    let htmlElement =
        `
            <div id='${id_count}' class="col-auto">
                    <div class="meme" onclick="removeElement(${id_count})"
                        style='background-image: url("${url}")'>
                        <div class="memeTextTop">
                                ${textTop}
                        </div>
                        <div class="memeTextBottom">
                                ${textBottom}
                        </div>
                    </div><br>
                </div>
            `


    console.log(htmlElement)
    document.getElementById('memeRow').innerHTML += htmlElement
    id_count++

    document.getElementById("memeForm").reset();
    return false

}


function getFormData() {
    let x = document.getElementById("memeForm");

    let url = x.elements[0].value
    let textTop = x.elements[1].value
    let textBottom = x.elements[2].value

    return [url, textTop, textBottom]
}

function removeElement(id) {
    document.getElementById(id).outerHTML = "";
}
