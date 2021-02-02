class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.items = options.items
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                this.$el.classList.contains('open') ? this.close() : this.open()
                
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.$el.querySelector('.dropdown__label').textContent = event.target.textContent
                this.close()
            }
        })
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ')
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }
    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}


const dropdown = new Dropdown('#dropdown', {
    items: [
      {label: 'Москва', id: 'msk'},
      {label: 'Санкт-Петербург', id: 'spb'},
      {label: 'Новосибирск', id: 'nsk'},
      {label: 'Краснодар', id: 'krdr'},
      {label: 'Ростов', id: 'rostov'}
    ]
  })