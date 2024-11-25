if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getRandomZnak(zasobnik_znaku) {
    const num = Math.floor( Math.random() * zasobnik_znaku.length );
    return zasobnik_znaku[num];
}
function ZmenStranu1() {
    document.getElementById("tocka").className = "page_visible"
    document.getElementById("Nastaveni").className = "page"

}
function ZmenStranu2() {
    document.getElementById("tocka").className = "page"
    document.getElementById("Nastaveni").className = "page_visible"

}

function Roztoc() {
    let zasobnik = ["🐒​", "👨‍👨‍👦​", "👩‍🦼​", "🍑​", "​🍆"];
    const refresh_rate1 = 100;
    const refresh_rate2 = 200;
    const refresh_rate3 = 300;
    const sazka = document.getElementById("sazka").value;
    document.getElementById("vyhra").hidden = true;
    
    for (let i = 0; i < 20000; i++) {
        if(i % refresh_rate1 == 0)
        {
            document.getElementById("first").textContent = getRandomZnak(zasobnik);
        }
        if(i % refresh_rate2 == 0)
        {
                document.getElementById("second").textContent = getRandomZnak(zasobnik);
        }
        if(i % refresh_rate3 == 0)
        {
                document.getElementById("third").textContent = getRandomZnak(zasobnik);
        }
        
    }
    let a =  document.getElementById("first").textContent;
    let b =   document.getElementById("second").textContent;
    let c =  document.getElementById("third").textContent;
    if (a == b && b == c) {
        const vyhra =  (1/Math.pow((1 / zasobnik.length), 3 ) * 0,75);
        document.getElementById("vyhra").hidden = false;
        document.getElementById("vyhra").textContent = "Vyhral si " + vyhra;
        }
}