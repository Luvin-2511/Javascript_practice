function CreateCard(title, cName, view, monthOld, duration,thumbnail){
    if(view>1000){
        view=(view/1000)+"K";
    }
    if(view>100000){
        view=(view/100000)+"M";
    }
    let html=`
    <div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
            </div>
            <div class="duration">${duration}</div>
            
            <div class="title">
                ${title}
            </div>
        </div>
        <div class="card2">
            <div class="name">
                ${cName} .${view} views .${monthOld} months ago
            </div>
        </div>
        </div>
    `
    document.querySelector(".howdy").innerHTML=document.querySelector(".howdy").innerHTML+html
}


CreateCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry",74000,3,
    "43:02","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw");

CreateCard("JavaScript Exercise 14 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry",74000,3,
    "43:02","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw");