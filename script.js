let cur = document.querySelector('#cursor') 
let main = document.querySelector('#main')
let loc = document.querySelector('#sqr')
let fr = document.querySelector('#nav-right h6')
let insta = document.querySelector('#icons #insta')
let face = document.querySelector('#icons #face')
// let arrow = document.querySelector('span i')

main.addEventListener('mousemove',function(e){
    cur.style.left = `${e.x+30}px`
    cur.style.top = `${e.y}px`

})

// hover by cursor

loc.addEventListener('mouseenter',function(){
    loc.style.backgroundColor = "#F37136"
    loc.style.color = "white"
})

loc.addEventListener('mouseleave',function(){
    loc.style.backgroundColor = "transparent"
    loc.style.color = "#F37136"
})

// FR

fr.addEventListener('mouseenter',function(){
    fr.style.backgroundColor = "#F37136"
    fr.style.color = "white"
})
fr.addEventListener('mouseleave',function(){
    fr.style.backgroundColor = "transparent"
    fr.style.color = "#F37136"
})

// icons fb ,insta
insta.addEventListener('mouseenter',function(){
    insta.style.scale = 2
})
insta.addEventListener('mouseleave',function(){
    insta.style.scale = 1
})
// fb
face.addEventListener('mouseenter',function(){
    face.style.scale = 2
})
face.addEventListener('mouseleave',function(){
    face.style.scale = 1
})

// arrow
// arrow.addEventListener('mouseenter',function(){
//     arrow.style.transform = 'translatex(15%)'
// })
// arrow.addEventListener('mouseleave',function(){
//     arrow.style.transform = 'translatex(15%)'
// })