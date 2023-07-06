export default async function decorate(block) {
  const indexResponse = await fetch('./resume.json');

  if (!indexResponse.ok) {
    return;
  }

  const index = await indexResponse.json();

  const container = document.createElement('div');

  index.Experience.data.forEach((element) => {
    const experience = document.createElement('div');

    let experienceText = '';
    element.Experience.split('- ').forEach((experienceEntry) => {
      if (experienceEntry.trim() !== '') {
        experienceText = experienceText.concat(`<li>${experienceEntry}</li>`);
      }
    });

    experience.innerHTML = `
        <div class="position">${element.Job}</div>
        <div class="company">${element.Company}</div>
        <div class="period">${element.Period}</div>
        <div class="experience"><ul>${experienceText}<ul></div>
      `;

    container.append(experience);
  });

  block.append(container);
}
