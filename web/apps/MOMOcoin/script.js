/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

var ready = ( callback ) => {
  if ( document.readyState != "loading" ) callback();
  else document.addEventListener( "DOMContentLoaded", callback );
}


ready( () => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem( 'theme' )
  const setStoredTheme = theme => localStorage.setItem( 'theme', theme )

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if ( storedTheme ) {
      return storedTheme
    }

    return window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if ( theme === 'auto' ) {
      document.documentElement.setAttribute( 'data-bs-theme', ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'light' ) )
    } else {
      document.documentElement.setAttribute( 'data-bs-theme', theme )
    }
  }

  setTheme( getPreferredTheme() )

  const showActiveTheme = ( theme, focus = false ) => {
    const themeSwitcher = document.querySelector( '#bd-theme' )

    if ( !themeSwitcher ) {
      return
    }

    const themeSwitcherText = document.querySelector( '#bd-theme-text' )
    const activeThemeIcon = document.querySelector( '.theme-icon-active use' )
    const btnToActive = document.querySelector( `[data-bs-theme-value="${ theme }"]` )
    const svgOfActiveBtn = btnToActive.querySelector( 'svg use' ).getAttribute( 'href' )

    document.querySelectorAll( '[data-bs-theme-value]' ).forEach( element => {
      element.classList.remove( 'active' )
      element.setAttribute( 'aria-pressed', 'false' )
    } )

    btnToActive.classList.add( 'active' )
    btnToActive.setAttribute( 'aria-pressed', 'true' )
    activeThemeIcon.setAttribute( 'href', svgOfActiveBtn )
    const themeSwitcherLabel = `${ themeSwitcherText.textContent } (${ btnToActive.dataset.bsThemeValue })`
    themeSwitcher.setAttribute( 'aria-label', themeSwitcherLabel )

    if ( focus ) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia( '(prefers-color-scheme: dark)' ).addEventListener( 'change', () => {
    const storedTheme = getStoredTheme()
    if ( storedTheme !== 'light' && storedTheme !== 'dark' ) {
      setTheme( getPreferredTheme() )
    }
  } )

  window.addEventListener( 'DOMContentLoaded', () => {
    showActiveTheme( getPreferredTheme() )

    document.querySelectorAll( '[data-bs-theme-value]' )
      .forEach( toggle => {
        toggle.addEventListener( 'click', () => {
          const theme = toggle.getAttribute( 'data-bs-theme-value' )
          setStoredTheme( theme )
          setTheme( theme )
          showActiveTheme( theme, true )
        } )
      } )
  } )
} );

const data = [
  {
    name: "Akhil",
    coins: 1
  }, {
    name: "Ashley",
    coins: 2
  }, {
    name: "Rodrigo",
    coins: 1
  }, {
    name: "Betim",
    coins: 3
  }, {
    name: "Blonk",
    coins: 3
  }, {
    name: "Rose",
    coins: 1
  },{
    name: "Tam",
    coins: 1
  },{
    name: "Andre",
    coins: 1
  }, {
    name: "Jodi",
    coins: 1
  },
   {
    name: "Devrat",
    coins: 4
  }, {
    name: "Diego",
    coins: 2
  }, {
    name: "Duckie",
    coins: 3
  },
  {
    name: "Ismael",
    coins: 1
  }, {
    name: "Kenny",
    coins: 2
  }, {
    name: "Melinda",
    coins: 2
  }, {
    name: "Preston",
    coins: 1
  }, {
    name: "neoncitylights",
    coins: 1
  }, {
    name: "Srikeerthi",
    coins: 3
  }, {
    name: "Eternal",
    coins: 1
  }, {
    name: "Caitlin",
    coins: 1
  },
  {
    name: "Iyanu",
    coins: 2
  }, {
    name: "NoziOzi",
    coins: 1
  }, {
    name: "Samanza",
    coins: 2
  }, {
    name: "Trevor",
    coins: 3
  }, {
    name: "Valentine",
    coins: 2
  }, {
    name: "Vincent",
    coins: 1
  }, {
    name: "Xavier",
    coins: 1
  }, { 
    name: "Juan",
    coins: 2
  }, { 
    name: "Naga",
    coins: 1
  },
  { 
    name: "Dhrutik",
    coins: 1
  }
];

ready( () => {
  let coinTable = document.getElementById( "leaderboard" );
  let sortedTable = data.sort( ( a, b ) => b.coins - a.coins )

  sortedTable.forEach( ( entry ) => {
    let newRow = document.createElement( 'tr' )
    let nameCell = document.createElement( 'td' )
    let coinCell = document.createElement( 'td' )

    nameCell.innerText = entry.name;
    coinCell.innerText = entry.coins;
    newRow.append( nameCell, coinCell )
    coinTable.append( newRow )
  } )
} );
