document.getElementById('heartIcon')
.addEventListener('click',function(){
    var messageContainer = document.getElementById('messageContainer');
    var LoveSong=document.getElementById('LoveSong');

    messageContainer.style.display = 'block';

    LoveSong.play();
});