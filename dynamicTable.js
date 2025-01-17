const teamMembers = [
    {
        src: 'assets/persona.png', 
        name: 'James Alexander', 
        alias: '@James', 
        email: 'james@alexander.net', 
        status: 'Active', 
        tags: ['C#', 'Dev.'],
    },
    {
        src: 'assets/persona.png', 
        name: 'Den Bar', 
        alias: '@DB', 
        email: 'info@denbar.site', 
        status: 'Active', 
        tags: ['Front-End', 'Dev.'],
    },
    {
        src: 'assets/persona.png', 
        name: 'Bilbo Baggins', 
        alias: '@BB', 
        email: 'bilbo@lotro.com', 
        status: 'Active', 
        tags: ['Front-End', 'Dev.'],
    },
     {
        src: 'assets/persona.png', 
        name: 'Luke Skywalker', 
        alias: '@Luke', 
        email: 'luke@skywalker.net', 
        status: 'Active', 
        tags: ['Fullstack', 'Dev.'],
    },
    {
        src: 'assets/persona.png', 
        name: 'Leia Skywalker', 
        alias: '@Leia', 
        email: 'leia@skywalker.net', 
        status: 'Active', 
        tags: ['Fullstack', 'Dev.'],
    },
    {
        src: 'assets/persona.png', 
        name: 'Corey Watson', 
        alias: '@CW', 
        email: 'Corey@watson.net', 
        status: 'Active', 
        tags: ['Fullstack', 'Dev.'],
    }
 
]

let tableRowCount = document.getElementsByClassName('table-row-count');

tableRowCount[0].innerHTML = `(${teamMembers.length}) Members` ;
let tableBody = document.getElementById('team-member-rows');


const itemsOnPage = 5; 
const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers.filter((_, i) => (
    ((start - 1) * itemsOnPage) < i + 1) && 
    (i + 1 <= start * itemsOnPage)
    )

    .map((teamMember) => {
        return `<tr>
                <td class="team-member-profile">
                <img src="${teamMember.src}">
                <span class="profile-info">
                    <span class="profile-info__name">
                        ${teamMember.name}
                    </span>
                    <span class="profile-info__alias"> 
                        ${teamMember.alias}
                    </span>
                </span>
                </td>
                <td>
                    <span class="status status --${teamMember.status}">
                        ${teamMember.status}
                    </span>
                </td>
                <td>
                    ${teamMember.email}
                </td>
                <td>
                    <span class="tags">
                    ${teamMember.tags.map((tag) =>
                        `<span class="tag tag--${tag}">
                                ${tag}
                        </span>`)
                        .join('')}
                    </span>
                </td>
                </tr>`;
    }
);







tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination'); 
const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1; 
    linkList.push(`<li>
        <a href="?page=${pageNumber}" 
        ${pageNumber == start ? 'class="active"' : ''}
        title="page ${pageNumber}">
        ${pageNumber}
        </a>
    </li>`);
}
pagination.innerHTML = linkList.join('');
