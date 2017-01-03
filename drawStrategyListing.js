// defined in constants.js
strategies.forEach(function(strategy, index){
  var container = document.querySelector('#strategySelection')

  // draw the strategy input with the function to be called as the value
  var entry = document.createElement('input');
  entry.setAttribute('type', 'radio');
  entry.name = 'strategyOption'
  entry.value = strategy.function;
  entry.id = strategy.function;
  if(index === 0){
    entry.checked = true;
  }
  entry.onclick = solve;


  // draw the label for the radio button
  var entryLabel = document.createElement('label');
  entryLabel.htmlFor = strategy.function;
  entryLabel.innerHTML = strategy.name;

  // append the button
  container.appendChild(entry);
  container.appendChild(entryLabel);
  container.appendChild(document.createElement('br'));
})
