//import LogInComponent from "./login";
let users = JSON.parse(localStorage.getItem("users"));
let authenticated = JSON.parse(localStorage.getItem("authenticated"));
let newuser = {};
let currentUser = -1;

function existingUsers(users) {


  let div = document.createElement('div');

  let innerHTML = `<ul role="list" class="divide-y w-32 divide-gray-200" style="position: absolute; top: 25%;">`

  users.map((user, idx) => {
    let li = `
            <li class="py-4" id="${idx}" style="top: 50%">
              <div class="min-w-0 flex justify-center">
                <span class="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <p style="align-self: center;" class="ml-4 text-sm font-medium text-gray-900">${user.username}</p>
              </div>
            </li>
        `
    innerHTML += li;
  });

  innerHTML += `</ul>`
  div.innerHTML = innerHTML;
  return div;
}

function LogInComponent() {

    let credentials = {};

    let username = document.createElement("input");
    username.id = "username";
    username.className = " bg-transparent block w-full  p-0 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6";
    username.addEventListener("input", e => {
        newuser.username = username.value;
    });
    username.placeholder = "User Name";

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";
    password.addEventListener("input", e => {
        credentials.password = password.value;
    })
    password.className = " bg-transparent block w-full  p-0 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6";
    password.id = "password";
    password.addEventListener('keyup', e => {
        console.log(credentials);
        if(credentials.password == users[0].password){
            console.log("AUTHENTICATE");
            localStorage.setItem("authenticated", "true");
            document.getElementById("login").remove()
        }
    })

    let div = document.createElement('div');
    div.id = "login";
    div.className = "flex flex-row min-h-screen justify-center items-center w-full "
    div.innerHTML = `
        <div class="isolate -space-y-px rounded-md shadow-sm">
            <div id="usernameDiv" class="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10  ">
            </div>
            <div id="passwordDiv" class="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10  ">
        </div>
        </div>`

    
    document.body.appendChild(div);
    document.getElementById("usernameDiv").appendChild(username);
    document.getElementById("passwordDiv").appendChild(password);

    return div;
}

function NewUserComponent(newuser) {

    
    let classes = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    let username = document.createElement("input");
    username.id = "username";
    username.className = classes;
    username.addEventListener("input", e => {
        newuser.username = username.value;
    });

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "••••••••";
    password.addEventListener("input", e => {
        newuser.password = password.value;
    })
    password.id = "password";
    password.className = classes;

    let verifyPassword = document.createElement("input");
    verifyPassword.type = "password";
    verifyPassword.placeholder = "••••••••";
    verifyPassword.id = "verifyPassword";
    verifyPassword.addEventListener("input", e=> {
        newuser.verifyPassword = verifyPassword.value;
    });
    verifyPassword.className = classes

    let submit = document.createElement("button");
    submit.innerText = "Create an account";
    submit.className = "w-full text-white   focus:ring-4 focus:outline-none bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center ";
    submit.addEventListener("click", e => {
        console.log("clicked", newuser);
        if(newuser.password == newuser.verifyPassword){
            delete newuser.verifyPassword;
            users = [newuser];
            localStorage.setItem("authenticated", "true");
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("register").remove();
        }
        
    })

    console.log("inner: ", password.innerHTML);
    let div = document.createElement('div');
    div.innerHTML = `
        <section id="register" class="bg-gray-50 dark:bg-gray-900 bg-transparent">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <div id="buttonDiv" class="space-y-4 md:space-y-6" >
                            <div id="usernameDiv">
                                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            </div>
                            <div id="passwordDiv">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

                            </div>
                            <div id="verifyDiv">
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `

    document.body.appendChild(div);
    document.getElementById("usernameDiv").appendChild(username);
    document.getElementById("passwordDiv").appendChild(password);
    document.getElementById("verifyDiv").appendChild(verifyPassword);
    document.getElementById("buttonDiv").appendChild(submit);

    // return div;
}





if(!authenticated && users != null){

    if(currentUser == -1) document.body.appendChild(existingUsers(users));
    else document.body.appendChild(LogInComponent());

}
else if (!authenticated && users == null){
    NewUserComponent(newuser);
}
