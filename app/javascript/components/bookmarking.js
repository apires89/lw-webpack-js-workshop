import Rails from 'rails-ujs';

const toggleIconsdeveloper = function() {
  const icons = document.querySelectorAll('.dev .dev-bookmark i')

  let toggleIcon = function(icon) {
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
  }


        icons.forEach((icon) => {
        const developer = icon.closest('.dev')
        const developerId = developer.id.split('-')[1]
        console.log(developerId)
        icon.addEventListener('click', () => {

        if (icon.classList.contains('far')) {
          fetch('/bookmarked_developers', {
            method: 'post',
            body: JSON.stringify({developer_id: developerId}),
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': Rails.csrfToken()
            },
            credentials: 'same-origin'
          }).then(() => toggleIcon(icon)
          );

        } else if (icon.classList.contains('fas')) {
          fetch(`/bookmarked_developers/${developerId}`, {
            method: 'delete',
            body: JSON.stringify({developer_id: developerId}),
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': Rails.csrfToken()
            },
            credentials: 'same-origin'
          }).then(() => {
            if (response.ok) {
              toggleIcon(icon)
            } else {
              throw new Error('Something went wrong');
            }
          });
        }
    })
  })
};


export { toggleIconsdeveloper };

