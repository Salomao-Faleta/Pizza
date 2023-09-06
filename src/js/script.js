let modalQl = 1;

const c = (el) =>{ return document.querySelector(el)}
const cs = (el) =>{ return document.querySelectorAll(el)}

pizzaJson.map(function(item, index){
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault()

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQl = 1;

        c('.pizzaBig img').src = pizzaJson[key].img
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        c('.pizzaInfo--qt').innerHTML = modalQl;


        //abrindo o modal

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';

        setInterval(()=>{   
            c('.pizzaWindowArea').style.opacity = 1.0;
        }, 300)



    })


    c('.pizza-area').append(pizzaItem)

})