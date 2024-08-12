const faqListEl = document.querySelector('.faq__list');

faqListEl.addEventListener('click', e => {
    const btn = e.target.closest('.faq__question-toggle-btn');

    if (!btn) return;

    const listItemEl = btn.closest('.faq__list-item');
    listItemEl.classList.toggle('faq__list-item--collapse');
});
