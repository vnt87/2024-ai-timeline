document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const events = document.querySelectorAll('.event');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get the filter type from data-filter attribute
      const filterType = button.dataset.filter;
      
      // Filter events
      events.forEach(event => {
        if (filterType === 'show-all') {
          event.style.display = 'block';
        } else {
          const hasTag = event.querySelector(`.tag.${filterType}`);
          event.style.display = hasTag ? 'block' : 'none';
        }
      });
    });
  });

  // Initialize with all events visible
  document.querySelector('.toggle-button.show-all').click();
});
