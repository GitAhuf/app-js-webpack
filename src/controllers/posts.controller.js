import view from '../views/posts.html';

const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}
export default async () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const postElements = divElement.querySelector('#posts');
    const totalPost = divElement.querySelector('#total');

    let posts = await getPost();
    totalPost.innerHTML = posts.length;

    posts.forEach(post => {
        postElements.innerHTML += `
            <li class="list-group-item border-primary bg-dark text-white">
                <h2>${post.title}</h2>
                <h6>
                    ${post.body}
                </h6>

            </li>
        
        `;

        
    });

    console.log(posts)

    return divElement;
}