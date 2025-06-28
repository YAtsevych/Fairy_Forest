window.addEventListener('scroll', e => {
   // document.body.style.cssText += `--scrollTop: ${this.scrollY}px;`
   document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
