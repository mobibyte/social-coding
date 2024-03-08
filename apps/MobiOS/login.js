function existingUsers(users) {


    let div = document.createElement('div');

    let innerHTML = `<ul role="list" class="divide-y divide-gray-200">`

    users.map((user,idx) => {
        let li = `
            <li class="py-4" id="${idx}">
              <div class="min-w-0 flex-1">
                <a class=" hover:cursor-pointer ">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">${user.username}</p>
                </a>
              </div>
            </li>
        `
        innerHTML += li;
    });

    innerHTML += `</ul>`
    div.innerHTML = innerHTML;
    return div;
}


module.exports = existingUsers;
