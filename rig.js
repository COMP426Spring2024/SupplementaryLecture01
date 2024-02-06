let RandomGreetingWidget = function (recipient) {
    this.recipient = recipient;
    this.greeting = RandomGreetingWidget.advanceGreeting();
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

RandomGreetingWidget.prototype.make_message_div =  function () {
    let message = `${this.greeting}, ${this.recipient}!`;
    let message_div = document.createElement('div');
    let message_h2 = document.createElement('h2');
    message_h2.append(document.createTextNode(message));
    message_div.append(message_h2);
    return message_div;
}


let rig_div = document.getElementById('rig');

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];



planets.forEach((p) => {
    let rgw = new RandomGreetingWidget(p);
    rig_div.append(rgw.make_message_div());
});
