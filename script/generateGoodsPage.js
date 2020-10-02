import  { getData }  from "./getData.js";


const wishList = ['idd005', 'idd033', 'idd095', 'idd077'];

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');
    const generateCards = (data) => {
        goodsList.textContent = '';
console.log(data, 'data');
        data.forEach(item => {
            goodsList.insertAdjacentHTML('afterbegin',
                // `<li>${item.name +' ' + item.price + ' грн.'} </li>`)
            `<li>
                    <a class="goods-item__link" href="card.html#idd001">
                     <article class="goods-item">
                    <div class="goods-item__img">
                    
                       <img src="${item.img[0]}"
                           data-second-image="${item.img[1]}" alt="${item.name}">
                    </div>
                    
                    <h3 class="goods-item__header">${item.name}</h3>
                    <p class="goods-item__description">${item.description}</p>
                    <p class="goods-item__price">
                     <span class="goods-item__price-value">${item.price}</span>
                     <span class="goods-item__currency">₴</span>
                    </p>
                    <button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${item.id}"></button>
                     </article>
                    </a>
                    </li>
            `)

        })
    };

    if(location.pathname.includes('goods') && location.search){
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];

        if(prop === 's'){
            getData.search(value, generateCards);
            mainHeader.textContent = `Поиск: ${value}`;
        }else if(prop === 'wishlist'){
            getData.wishList(wishList, generateCards);
            mainHeader.textContent = `Список желаний`;
        } else if(prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, generateCards);
            mainHeader.textContent = value;
        }
    }
};
export default generateGoodsPage;