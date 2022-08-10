/**
 * The calculator collection ready to by processed.
 */
export const todoCardLayout = [
    // main container
    {
        tag: 'article',
        class: 'card',
        parentId: 'main',
        text: '',
        id: 'card'
    },
    // header container
    {
        tag: 'div',
        class: 'card__header',
        parentId: 'main',
        text: '',
        id: 'card-header'
    },
    {
        tag: 'div',
        class: 'card__header__top',
        parentId: 'card-header',
        text: '',
        id: 'card-header-top'
    },
    {
        tag: 'div',
        class: 'card__header__down',
        parentId: 'card-header',
        text: '',
        id: 'card-header-down'
    },
    // main container
    {
        tag: 'div',
        class: 'card__main',
        parentId: 'card',
        text: '',
        id: 'card-main'
    },
    // footer container
    {
        tag: 'div',
        class: 'card__footer',
        parentId: 'card',
        text: '',
        id: 'card-footer'
    },
    // title element
    {
        tag: 'div',
        class: 'card__header__top__title',
        parentId: 'card-header-top',
        text: '',
        id: 'card-title'
    },
    // task status buttons
    {
        tag: 'button',
        class: 'card__header__down__button',
        parentId: 'card-header-down',
        text: 'To do',
        id: 'card-todo-button'
    },
    {
        tag: 'button',
        class: 'card__header__down__button',
        parentId: 'card-header-down',
        text: 'Doing',
        id: 'card-doing-button'
    },
    {
        tag: 'button',
        class: 'card__header__down__button',
        parentId: 'card-header-down',
        text: 'Done',
        id: 'card-done-button'
    },
    // main text
    {
        tag: 'p',
        class: 'card__main__text',
        parentId: 'card-main',
        text: '',
        id: 'card-main-text'
    },
    // time text
    {
        tag: 'p',
        class: 'card__time__text',
        parentId: 'card-footer',
        text: '',
        id: 'card-footer-text'
    },
]