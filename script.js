console.log("loaded");

function gen()
{
    console.log("click");

    let truc = fetch("https://v1.api.amethyste.moe/generate/ddungeon",
    { 
        method: "POST",
        headers: 
        {
            'Authorization': "Bearer " + token.value,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams({
            'url': image.value,
        })
    });

    truc.then(r => {
        console.log(r);
        let imageResult = r

    });
}

function genplus() {
    let b = document.getElementById(truc);
    b.textContent = r.;
}