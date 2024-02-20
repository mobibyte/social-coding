let apps = [
  {
    title: "Diego's App",
    link: "../apps/diegovester/diego.html",
    coverImg:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    author: "Diego Vester",
    authorImg: "https://github.com/diegovester.png",
  },
  {
    title: "Trevor's App",
    link: "../apps/trevorddr5/trevy.html",
    coverImg:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    author: "Trevor DDR5",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Minion's Abode",
    link: "../apps/devrat/devrat.html",
    coverImg: "../apps/devrat/bg.jpg",
    author: "Devrat",
    authorImg: "../apps/devrat/kevin_minion.png",
  },
  {
    title: "Dog App",
    link: "../apps/dog_app/mobi.html",
    coverImg:
      "https://images.unsplash.com/photo-1546238232-20216dec9f72?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Devrat",
    authorImg: "../apps/devrat/kevin_minion.png",
  },
  {
    title: "Pepsi's App...?",
    link: "../apps/pepsi/pepsi.html",
    coverImg:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    author: "Pepsi Co.",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "Mohammad's App",
    link: "../apps/mohammad10/indez.html",
    coverImg:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    author: "Mohammad",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    title: "MOBI Typing Test",
    link: "../apps/TypingTest/index.html",
    coverImg: "assets/appImages/TypingTestCoverImg.PNG",
    author: "Rodrigo Munoz",
    authorImg: "https://avatars.githubusercontent.com/u/65474436?v=4",
  },
  {
    title: "Egg App",
    link: "https://diegovester.github.io/egg/",
    coverImg: "assets/appImages/EggApp.png",
    author: "Diego Vester",
    authorImg: "https://github.com/diegovester.png",
  },
  {
    title: "MOMO 2D",
    link: "../apps/MOMO2D/index.html",
    coverImg: "assets/appImages/MOMO2D.png",
    author: "Diego Vester",
    authorImg: "https://github.com/diegovester.png",
  },
  {
    title: "Bob",
    link: "../apps/Bob/index.html",
    coverImg: "",
    author: "Iyanu",
    authorImg: "",
  },
  {
    title: "URL Shortener",
    link: "../apps/virajs/index.html",
    coverImg: "assets/appImages/URL_Shortner_img.jpeg",
    author: "Viraj Sabhaya",
    authorImg: "https://avatars.githubusercontent.com/u/65474436?v=4",
  },
  {
    title: "Base Converter",
    link: "../apps/base_convert/index.html",
    coverImg: "",
    author: "Betim Hodza",
    authorImg: "",
  },
  {
    title: "Git Cheatsheet",
    link: "../apps/git_cheatsheet/index.html",
    coverImg: "assets/appImages/git.png",
    author: "Srikeerthi",
    authorImg: "",
  },
];

function newApp(app) {
  return `
    <li class="relative  rounded-lg shadow-md">
    <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rouded-t-lg  bg-gray-100   ">
      <img src="${app.coverImg}" alt="" class=" rounded-t-lg pointer-events-none object-cover ">
    </div>
    <div class="relative flex items-center space-x-3 rounded-lg  bg-white px-6 py-5   ">
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" src="${app.authorImg}" alt="">
    </div>
    <div class="min-w-0 flex-1">
      <a href="${app.link}" class=" hover:cursor-pointer ">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <p class="text-sm font-medium text-gray-900">${app.title}</p>
        <p class="truncate text-sm text-gray-500">${app.author}</p>
      </a>
    </div>
  </li>

    `;
}
function initApps() {
  let container = document.getElementById("appsContainer");
  let innerHTML = "";
  apps.forEach((app) => {
    innerHTML += newApp(app);
  });

  container.innerHTML = innerHTML;
}

initApps();
