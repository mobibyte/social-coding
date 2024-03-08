
function initAppsBar() {
  let innerHTML = "";
  apps.forEach((app) => {
    let html = `<div id="${app.name}" class="m-5 bg-red-300 transform h-64 w-80 transition duration-500 hover:scale-125 " >
      <span
        class=" hover:cursor-pointer border rounded-md inline-flex items-center  bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
      >${app.name}</span>
    </div > `;
    innerHTML += html;
  });

  document.getElementById("apps_container").innerHTML = innerHTML;
}

// initAppsBar();
