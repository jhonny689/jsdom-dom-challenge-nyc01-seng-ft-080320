//  h3 #list-comments 

// form#comments

// h1#counter
//minus #plus #heart

// ul.likes  add li

document.addEventListener('DOMContentLoaded', function(e){
    const counter = document.querySelector('h1#counter');
    window.setInterval(count, 1000, counter);
    const pause = document.querySelector('button#pause');

    clickHandler();
    
});

function count(counter){
    
    counter.innerText = parseInt(counter.innerText)+1;
};

function decrement(counter){
    counter.innerText = parseInt(counter.innerText) - 1;
};

function likeCounter(counter){
    const list = document.querySelector('ul.likes');
    if(list.lastChild && list.lastChild.dataset.time === counter.innerText){
        updateLi(list.lastChild);
    }else{
        list.appendChild(newLi(counter.innerText));
    }
};

function newLi(number){
    const newLi = document.createElement('li');
    newLi.dataset.time = number;
    newLi.dataset.clicks = 1;
    newLi.innerText = `${number} has been liked 1 time`;
    return newLi
};

function updateLi(li){
    li.innerText = `${li.dataset.time} has been liked ${++li.dataset.clicks} times`;
};

function createComment(comment){
    let newP = document.createElement('p');
    newP.innerText = comment;
    return newP;
};

function clickHandler(){
    
    let clickCount = 1;
    const counter = document.querySelector('h1#counter');
    document.addEventListener('click', function(e){
        if (e.target.matches('#pause')){
            window.clearInterval(clickCount);
            e.target.innerText = "resume";
            e.target.id = "resume";
            document.getElementById("minus").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true;
        }else if(e.target.matches('#resume')){
            window.setInterval(count, 1000, counter);
            e.target.innerText = "pause";
            e.target.id = "pause";
            clickCount++;
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;

        }else if(e.target.matches('#plus')){
            count(counter);
        }else if(e.target.matches('#minus')){
            decrement(counter);
        }else if(e.target.matches('#heart')){
            likeCounter(counter);
        }else if(e.target.matches('#submit')){
            e.preventDefault();
            
            const form = e.target.parentElement;
            const commentsList = document.querySelector('div#list');
            commentsList.appendChild(createComment(form.comment.value));
            form.reset();
        }
    });
    
}
