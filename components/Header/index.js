
function Header (navbar){
  return `
    <header class="header-content">
      ${navbar.content()}
    </header>
  `
}

module.export = Header


