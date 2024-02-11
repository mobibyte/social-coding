

function LogInComponent() {

    let div = document.createElement('div');
    div.innerHTML = `
    <div id="login" class="flex flex-row min-h-screen justify-center items-center w-full ">
        <div class="isolate -space-y-px rounded-md shadow-sm">
            <div class="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10  ">
            <input type="text" name="username" id="username" class=" bg-transparent block w-full  p-0 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="User Name">
        </div>
        <div class="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10  ">
            <input type="password" name="password" id="job-title" class=" bg-transparent block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Password">
            </div>
        </div> 
    </div>`

    return div;
}

module.exports = LogInComponent;