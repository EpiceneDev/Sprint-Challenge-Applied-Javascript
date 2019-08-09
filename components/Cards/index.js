// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        let articles = res.data.articles;
        console.log("res.data.articles: ", articles);
        Array.from(articles);
        let i = 0;
        for (let i of articles) {
            while (i < articles.length) {
                
            
            i +=2;
            let topic = articles[i];
            console.log("topic: ", topic);
            axios
                .get(`https://lambda-times-backend.herokuapp.com/articles/${topic}`)
                .then(res => {
                    //res.forEach(item => )
                    //let headlines = res.headline;
                    //console.log("2nd call: ", res);
                    
                    headlines.forEach(item =>{
                        console.log("item: ", item);
                    });
                    //let headlines = res.
                    //createCard(res.data);
                    console.log("headline: ", res)
                })
                .catch(error => {
                    console.log("2nd Error: ", error);
                });
          }   
        };
                // articles.forEach(article => {
                //     let card = createCard(article)
                //     document.querySelector(".cards-container").appendChild(card);
                //     console.log(res.data);
                // })
    })
    .catch(error => console.log("1st Error: ", error));

function createCard(article) {
    let card = document.createElement("div");
    card.classList.add("card");

    let headline = document.createElement("div");
    headline.classList.add("headline");

    let author = document.createElement("div");
    author.classList.add("author");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    
    let authorImg = document.createElement("img");
    let authorName = document.createElement("span");

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    author.append(authorName);
    imgContainer.append(authorImg);

    img.src = article.authorPhoto;
    console.log("img.src: ", img.src);
    headline.textContent = articles.headline;
    authorName.textContent = articles.authorName;
    
    return card;
}