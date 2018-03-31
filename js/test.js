//add comment
addComment.onclick = () => {
    comm.style.display = 'block'
    addComment.style.display = 'none'
}

//tab
function tabs(el, content) {
    let tabNodes = document.getElementsByClassName('tab')
    for (i = 0; i < tabNodes.length; i++) {
        tabNodes[i].className = tabNodes[i].className.replace(" active", "");
    }

    let tabContents = document.getElementsByClassName('tab-content')
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }
    
    document.getElementById(content).style.display = 'block'
    el.className += ' active'
}
