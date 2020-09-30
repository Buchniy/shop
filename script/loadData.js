import { getData } from "./getData.js";



const wishList = ['idd005', 'idd033', 'idd095', 'idd077'];
const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd043',
        count: 1
    },
    {
        id: 'idd065',
        count: 2
    }
];

export const loadData = () => {
    if(location.search){
        const search = decodeURI(location.search);
        console.log(search);
        const prop = search.split('=')[0].substring(1);
        console.log('prop:', prop);
        const value = search.split('=')[1];
        console.log('value:', value);

        if(prop === 's'){
            console.log(value);
        }else if(prop === 'wishlist'){
            getData.wishList(wishList, (data) => console.dir({wishlist: data}));
        }else {
            console.log(prop, value);
        }
    }
    if(location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }
    if(location.pathname.includes('cart')){
        getData.cart(cartList, (data) => console.log(data));
    }
};