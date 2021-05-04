const createFakeButton = () => {
  const div = document.createElement('div');
  div.setAttribute('data-show-tooltips', 'true');

  const childDiv = document.createElement('div');
  childDiv.setAttribute('role', 'button');
  childDiv.setAttribute('class', 'uArJ5e Y5FYJe cjq2Db IOMpW JLaIpc FQL5Ue t7bxgb M9Bg4d');
  childDiv.setAttribute('aria-label', 'Tirar screenshot');
  childDiv.setAttribute('aria-disabled', 'false');
  childDiv.setAttribute('data-tooltip', 'Tirar screenshot');
  childDiv.setAttribute('data-tooltip-vertical-offset', '-12');
  childDiv.setAttribute('data-tooltip-horizontal-offset', '0');

  const childChildDiv = document.createElement('div');
  childChildDiv.className = 'PDXc1b MbhUzd';

  const span = document.createElement('span');
  span.className = 'XuQwKc';

  const childSpan = document.createElement('span');
  childSpan.className = 'GmuOkf';

  const childChildSpan = document.createElement('span');
  childChildSpan.className = 'NtU4hc';
  childChildSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="Hdh4hc cIGbvc NMm5M"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>';

  childSpan.appendChild(childChildSpan);
  span.appendChild(childSpan);
  childDiv.appendChild(childChildDiv);
  childDiv.appendChild(span);

  div.appendChild(childDiv);

  return div;
}

const run = participants => {
  let observer = new MutationObserver(mutations => {
    mutations.forEach(record => {
      const { target } = record;
      if (target.getAttribute('jscontroller') === 'JvBPyb' &&
        target.getAttribute('class').indexOf('MSqqjf') !== -1) {
        setTimeout(() => {
          const items = target.firstChild;
          const button = createFakeButton();
          button.onclick = () => {
            const parent = button.parentNode.parentNode.parentNode;
            const video = parent.querySelector('video');
            if (video) {
              const canvas = document.createElement('canvas');
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              const ctx = canvas.getContext('2d');

              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

              const user = parent.querySelector('[jscontroller="GQnsGd"]');
              const a = document.createElement('a');
              a.href = canvas.toDataURL('image/jpeg');
              a.download = `${user?.innerHTML}.jpeg` || 'img.jpeg';
              a.click();
            }
          }

          items.appendChild(button);
        }, 200);
      }
    });
  });

  observer.observe(participants, {
    subtree: true,
    attributeFilter: ['class'],
  });
}


/*

    EXTENSION

*/
let body = document.body;

const bodyObserver = new MutationObserver(mutations => {
  const options = mutations.filter(record =>
    !!record.target.querySelector('[jscontroller="MJfjyf"]')
  );

  if (options.length === 1) {
    run(options[0].target.querySelector('[jscontroller="MJfjyf"]'));
    bodyObserver.disconnect();
  }
});

bodyObserver.observe(body, { childList: true, subtree: true });