export const defaultSort = (status) => {
    const defaultButton = document.querySelector(`#${status}-filter-button`);

    defaultButton.disabled = true;
}