const NavBar = {
  
  links:  [
    {ref: 'about.html', name: 'About'},
    {ref: 'idappthat.html', name: 'Apps'},
    {ref: 'events.html',name: 'Events'},
    {ref: 'mavpitch.html', name: 'MavPitch'},
  ],

  content: function(){
    let tags = [];
  
    for(const link of this.links){
      tags.push(`<a href="${link.ref}">${link.name}</a>`);
    }

    return (`
      <div id="navigation">
        ${tags.join('\n')}
      </div>
      `);
  }
}

module.exports = NavBar
