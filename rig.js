let RandomGreetingWidget = function (recipient) {
    let greeting = RandomGreetingWidget.advanceGreeting();

    let message = `${greeting}, ${recipient}!`;
    let div = document.createElement('div');
    let message_h2 = document.createElement('h2');
    message_h2.append(document.createTextNode(message));
    div.append(message_h2);

    this.getDiv = () => div;
    this.getGreeting = () => greeting;
    this.getRecipient = () => recipient;
    this.setRecipient = (r) => {
        recipient = r;
    };

    div.addEventListener('click', () => {
        greeting = RandomGreetingWidget.advanceGreeting();
        message_h2.innerHTML = `${greeting}, ${recipient}!`;
    });
}

RandomGreetingWidget.greetings = ['Hello', 'Goodbye', 'What\'s Up', 'Word', 'Hey', 'Looking Good']
                                 .map(g => [g, Math.random()])
                                 .sort((a, b) => a[1] - b[1])
                                 .map(ag => ag[0]);

RandomGreetingWidget.next_index = 0;
RandomGreetingWidget.advanceGreeting = function () {
    let g = RandomGreetingWidget.greetings[RandomGreetingWidget.next_index];
    RandomGreetingWidget.next_index += 1;
    RandomGreetingWidget.next_index %= RandomGreetingWidget.greetings.length;
    return g;
}


let rig_div = document.getElementById('rig');

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];



planets.forEach((p) => {
    let rgw = new RandomGreetingWidget(p);
    rig_div.append(rgw.getDiv());
});
