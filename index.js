 
function newImg(url,left,bottom) {
    let gameElements = document.createElement('img')    
    gameElements.src = url
    gameElements.style.position = 'fixed'
    gameElements.style.left = left + 'px'
    gameElements.style.bottom = bottom + 'px'
    document.body.append(gameElements)
    return gameElements
     
    }
    function newItem(url,left,bottom) {
    let itemUnlocked = newImg(url,left,bottom)
    itemUnlocked.addEventListener('dblclick', function (){
        itemUnlocked.remove()
    })
    }
    function operationBackground(url,left,bottom) {
        let newBackground = newImg(url,left,bottom)
    }
     
    newItem('assets/sword.png', 500, 405)
    newItem('assets/sheild.png', 165, 185)
    newItem('assets/staff.png', 600, 100)
    newImg('assets/green-character.gif', 100,100)
    newImg('assets/pine-tree.png', 450,200)
    newImg('assets/pillar.png', 350,100)
    newImg('assets/tree.png', 200, 300)
    newImg('assets/crate.png', 150, 200)
    newImg('assets/well.png', 500, 425)
    