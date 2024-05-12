const teamMembers = [
    {
        src: 'assets/profile.jpg', 
        name: 'James Alexander', 
        alias: '@James', 
        email: 'blabla@example.com', 
        status: 'Active', 
        tags: ['Dev.', 'C#'],
    },
    {
        src: 'assets/profile.jpg', 
        name: 'Den Bar', 
        alias: '@DB', 
        email: 'blablaDB@example.com', 
        status: 'Active', 
        tags: ['Ft.End.', 'Dev.'],
    },
 
]

let tableRowCount = document.getElementsByClassName('table-row-count');

tableRowCount[0].innerHTML = `(${teamMembers.length}) Members` ;
let tableBody = document.getElementById('team-member-rows');
