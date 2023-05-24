var getblog;
var blogimage = document.querySelector('.blog-contents');
blog();
export async function blog() {
    await fetch(`http://localhost:3000/blog`, {

        method: "GET",
    })
        .then(c => { return c.json() })
        .then(d => {
            console.log(d)
            getblog = d;
        })
    blogprinting();
}

function blogprinting() {
    console.log(blogimage)
    console.log(getblog)
    blogimage.innerHTML = "";
    for (let pic in getblog) {
        blogimage.innerHTML += `
        <div class="card p-2 mx-3 float-start" style="width: 18rem;">
        <img src="${getblog[pic].blog_image}" class="card-img-top" alt="...">
        <div class="card-body p-0">
            <h5 class="card-title blog-heading mt-3">${getblog[pic].blog_heading}</h5>
            <p class="card-text">
            <h6 class="specs">
                <span><img src="./timer.png" alt=""></span>
                January 25,2001
                <span><img src="./person.png" alt=""></span>
                Cristofer Westerwelt
                <span><img src="./message-circle.png" alt=""></span>
                10 comment
            </h6>
            <h6 class="mt-3 blog-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eget nunc, sed sed sed. Sit integer at dui at non ipsum
                tellus ac. Est.
            </h6>
            </p>
            <button class="read">Read More</button>
        </div>
    </div>`;
    }
}