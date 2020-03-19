Vue.component('product-list', {
    props: ['products'],
    template: `
        <ul>
            <li v-for="product in products">{{product.name}}</li>
        </ul>
    `
})



app = new Vue({
    el: '#root',
    data: {
        products: [
            {name: 'soap'},
            {name: 'toliet paper'},
            {name: 'toothpaste'},
            {name: 'comb'}
        ],
        newProduct: ''
    },
    methods: {
        addProduct: function() {
            this.products.push({name: this.newProduct}) //Adds input value to array of products
            this.newProduct = '' //Clears input
        }
    },
    filters: {
        //Capitalizes array items without changing the array
        capitalize: function(value) {
            return value.toUpperCase()
        }
    }
})