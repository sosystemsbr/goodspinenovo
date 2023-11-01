const htmlColletionToArray = (colletion) => Array.prototype.slice.call(colletion)

const eventHighlight = (href) => {
  let elements = document.querySelectorAll(href)
  Array.from(elements).forEach(element => {
    console.log(element)
  })

  document.addEventListener('scroll', function() {
    // if (window.pageYOffset >= el.offsetTop) {
    //   addHighlight(item)
    // }
  })
}

const addHighlight = (itemID) => {
  console.log(itemID)
}

export default (navBar) => {
  const linksHtmlColletion = navBar.getElementsByTagName('a')
  const links = htmlColletionToArray(linksHtmlColletion)
  const linksHref =
    links
      .filter(link => !(link.dataset.menuHighlight === 'false'))
      .map(link => link.getAttribute('href'))

  eventHighlight(linksHref)
}
