const data = [
    {
        id: 1,
        name: 'George Bluth',
        email: 'george.bluth@reqres.in',
        image: 'https://reqres.in/img/faces/1-image.jpg'
    },
    {
        id: 2,
        name: 'Janet Weaver',
        email: 'janet.weaver@reqres.in',
        image: 'https://reqres.in/img/faces/2-image.jpg'
    },
    {
        id: 3,
        name: 'Emma Wong',
        email: 'emma.wong@reqres.in',
        image: 'https://reqres.in/img/faces/3-image.jpg'
    },
    {
        id: 4,
        name: 'Eve Holt',
        email: 'eve.holt@reqres.in',
        image: 'https://reqres.in/img/faces/4-image.jpg'
    },
    {
        id: 5,
        name: 'Charles Morris',
        email: 'charles.morris@reqres.in',
        image: 'https://reqres.in/img/faces/5-image.jpg'
    },
    {
        id: 6,
        name: 'Tracey Ramos',
        email: 'tracey.ramos@reqres.in',
        image: 'https://reqres.in/img/faces/6-image.jpg'
    }
]

function userIterator(profiles)
{
    let nextIndex=0;
    return {
        next: function()
        {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++],done: false} : {done: true}
        }
    };
}
const candidates = userIterator(data);
nextUser();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextUser);

function nextUser()
{
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined)
    {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item"> User ID : ${currentCandidate.id}</li>
        <li class="list-group-item"> User Name : ${currentCandidate.name}</li>
        <li class="list-group-item">Email : ${currentCandidate.email}</li>
        </ul>`;
    }
    else
    {
        alert('End of Users');
        window.location.reload();
    }
}
