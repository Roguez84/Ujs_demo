//If we wanted to do this with jquery, use the code below. Otherwise, comment out and use remote:true in index view
// document.addEventListener('turbolinks:load', function(){
//     var links = document.getElementsByTagName('a')
//     for(link of links){
//         link.addEventListener('click', function(e){
//             e.preventDefault()
//             $.ajax({
//                 url: e.target.href,
//                 method: 'get',
//                 dataType: 'script',
//                 error: function(error){console.log(error)}
//             })
//         })
//     }
// })