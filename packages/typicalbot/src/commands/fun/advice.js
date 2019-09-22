const fetch = require('node-fetch');
const Command = require('../../structures/Command');

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Get some random advice.',
            usage: 'advice',
        });
    }

    execute(message) {
        fetch('https://api.adviceslip.com/advice')
            .then((res) => res.json())
            .then((json) => message.send(json.slip.advice))
            .catch((err) => message.error('An error occurred making that request.'));
    }
};
