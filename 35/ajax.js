console.log("Ajax");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked the buttonClick');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'harry.txt', true);

    xhr.onprogress = function() {
        console.log('on-progress');
    }
    xhr.onreadystatechange = function(){
        console.log('ready state is', xhr.readyState);
    }
    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText);
    }
    else{
        console.error('some error occured');
    }
}

    xhr.send();
}