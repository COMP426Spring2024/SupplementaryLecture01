let make_message_div = function (message) {
    let message_div = document.createElement('div');
    let message_h2 = document.createElement('h2');
    message_h2.append(document.createTextNode(message));
    message_div.append(message_h2);
    return message_div;
}


let rig_div = document.getElementById('rig');

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

let greetings = ['Hello', 'Goodbye', 'What\'s Up', 'Word', 'Hey', 'Looking Good'];

// Associate each greeting with a random number
greetings = greetings.map(g => [g, Math.random()])
                     .sort((a, b) => a[1] - b[1])
                     .map(ag => ag[0]);

planets.forEach((p, i) => rig_div.append(make_message_div(`${greetings[i%greetings.length]}, ${p}!`)));
