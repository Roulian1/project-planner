// Form entrance layout

export const entrance = [
    // containers
    {
        tag: 'input',
        class: 'form_name',
        id: 'name',
        parentId: 'navigation',
        type: "text",
    },
    {
        tag: 'textarea',
        class: 'form_descriptive',
        id: 'descriptive',
        parentId: 'navigation',
    },
    {
        tag: 'input',
        class: 'form_due_date',
        id: 'due_date',
        parentId: 'navigation',
        type: "date",
    },
    {
        tag: 'button',
        class: 'form_add_button',
        id: 'add_entrance_button',
        parentId: 'navigation',
        text: 'Add',
        type: "button",
    },
];