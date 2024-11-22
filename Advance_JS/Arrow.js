const Prices={
    username:'mrparwez',
    prices:999,
    WelcomeMessage: function(){
        // console.log(`Welcome ${Prices.username} to your site. `)
        // console.log(`${this.username} Welcome to Website !. `)
        console.log(this);
        
    }
}

// Prices.WelcomeMessage()
Prices.username='Asharf03'
Prices.WelcomeMessage()
// console.log(Prices.WelcomeMessage())