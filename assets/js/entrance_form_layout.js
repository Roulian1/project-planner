// Form entrance layout

export const entrance = [
    // containers
    {
        tag: 'input',
        class: 'form_name',
        id: 'name',
        parentId: 'add-button',
        type: "text",
    },
    {
        tag: 'textarea',
        class: 'form_descriptive',
        id: 'descriptive',
        parentId: 'name',
    },
    {
        tag: 'input',
        class: 'form_due_date',
        id: 'due_date',
        parentId: 'descriptive',
        type: "date",
    },
    {
        tag: 'input',
        class: 'form_add_button',
        id: 'add_add_button',
        parentId: 'due_date',
        text: 'Add',
        type: "button",
    },
];