const faqListEl = document.querySelector('.faq__list');

faqListEl.addEventListener('click', e => {
    e.preventDefault();

    console.log(e.target);

    const btn = e.target.closest('.faq__question-btn');

    if (!btn) return;

    const listItemEl = btn.closest('.faq__list-item');
    listItemEl.classList.toggle('faq__list-item--collapse');
});
