const appGrid = document.querySelector("#appGrid");
const toolCount = document.querySelector("#toolCount");
const year = document.querySelector("#year");

toolCount.textContent = `${apps.length} Tools Online`;
year.textContent = new Date().getFullYear();

appGrid.innerHTML = apps
  .map(
    (app) => `
      <a class="tool-card" href="${app.url}" aria-label="開啟 ${app.name}">
        <span class="tool-icon" aria-hidden="true">${app.icon}</span>
        <span class="tool-copy">
          <strong>${app.name}</strong>
          <span>${app.description}</span>
        </span>
        <span class="tool-arrow" aria-hidden="true">↗</span>
      </a>
    `,
  )
  .join("");
