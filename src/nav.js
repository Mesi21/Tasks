const navBar = () => {
  const nav = document.createElement('div');
  const logo = document.createElement('h1');
  logo.innerHTML = 'My Daily ToDos';
  nav.setAttribute('id', 'navigation');
  logo.setAttribute('id', 'logo');
  nav.appendChild(logo);
  return nav;
};

export default navBar;