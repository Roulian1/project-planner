// Form display layout

export const display = [
    // containers
    {
        tag: 'div',
        class: 'form_display_name',
        id: 'display_name',
        parentId: 'main',
        text: '',
    },
    {
        tag: 'button',
        class: 'display_btn_to_do',
        id: 'display_btn_to_do',
        parentId: 'display_name',
        text: 'To do',
    },
    {
        tag: 'button',
        class: 'display_btn_doing',
        id: 'display_btn_doing',
        parentId: 'display_btn_to_do',
        text: 'Doing',
    },
    {
        tag: 'button',
        class: 'display_btn_done',
        id: 'display_btn_done',
        parentId: 'display_btn_doing',
        text: 'Done',
    },
    {
        tag: 'div',
        class: 'display_descriptive',
        id: 'display_descriptive',
        parentId: 'display_btn_done',
        text: '',
    },
    {
        tag: 'div',
        class: 'display_remaining_days',
        id: 'display_remaining_days',
        parentId: 'display_descriptive',
        text: 'Remaining days: ',
    },
];