let tagButtons = document.querySelectorAll('.tagsView a');
for(i = 0; i < tagButtons.length; i++) {
    tagButtons[i].addEventListener('click', function(e) {
        clearTabView();
        e.target.className = "selected"; 
        showCell(e.target.getAttribute('tab'));
    })
}

function clearTabView() {
    for(i = 0; i < tagButtons.length; i++) {
        tagButtons[i].className = "";
    }
}

function showCell(tab) {
    let cells = document.getElementsByClassName('cell')
    for(i = 0; i < cells.length; i++) {
        if(tab === 'all') {
            cells[i].style.display = 'block';
        }else if(cells[i].getAttribute('tab') === tab) {
            cells[i].style.display = 'block';
        }else {
            cells[i].style.display = 'none';
        }
    }
}