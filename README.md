<p align="center">
    <h1 align="center">TypicalBot</h1>
</p>
<p align="center">
    <i>A stable, lightning fast, easy to use, <a href="https://discordapp.com">Discord</a> bot built using <a href="https://discord.js.org">Discord.js</a> and <a href="https://nodejs.org">Node.js</a>.<br>Try out TypicalBot using our hosted version at <a href="https://typicalbot.com/invite">typicalbot.com/invite</a>.</i>
</p>
<p align="center">
    <a href="https://discord.gg/typicalbot"><img src="https://discordapp.com/api/guilds/163038706117115906/embed.png?style=shield" alt="Discord"></a>
</p>

TypicalBot is an ironically named multipurpose Discord bot that is far from typical, developed in [discord.js](https://github.com/discordjs/discord.js).

[![Discord](https://discordapp.com/api/guilds/163038706117115906/embed.png?style=shield)](https://discord.gg/typicalbot)
[![Documentation](./docs/badge.svg)](https://typicalbot.com)

## Introduction

TypicalBot is an ironically named multipurpose Discord bot that is far from typical, developed in [discord.js](https://github.com/discordjs/discord.js). 

## Table of Contents

- [Ecosystem](#ecosystem)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Maintainers](#maintainers)
- [Contributors](#contributors)
- [Show Your Support](#show-your-support)
- [License](#license)

## Ecosystem

| Project | Description |
|---------|-------------|
| [typicalbot-cluster-manager](https://github.com/typicalbot/typicalbot-cluster-manager) | Inter-process communication manager |
| [typicalbot-api](https://github.com/typicalbot/typicalbot-api) | Internal API |

## Getting Started

This section provides a quick-start guide.

### Prerequisites

- [Node.js](https://nodejs.org/en/): Node.js 10.0.0 or newer is required.
- [RethinkDB](https://rethinkdb.com/): RethinkDB is required. 
- [PM2](http://pm2.keymetrics.io/): PM2 is required.
- [TypicalBot Cluster Manager](https://github.com/typicalbot/typicalbot-cluster-manager): TypicalBot Cluster Manager is required. 

**Windows Only**
- [Windows Build Tools](https://github.com/felixrieseberg/windows-build-tools): Python 2.7 and VisualStudio is required to compile dependencies. 
- [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html): OpenSSL is required for bignum, use version 1.0.X (Do not use version 1.1.X or the Light version).
- [GTK+](http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/): GTK 2 is required for canvas, use version 2.X.X (Do not use version 3.X.X) 

### Installation

1. Make sure all prerequisites are installed, ie. `npm install`
2. Fork the TypicalBot repository: https://github.com/typicalbot/typicalbot/fork
3. Clone your forked repository, ie. `git clone git@github.com/<YOUR-USERNAME>/typicalbot.git`
4. Start RethinkDB database
5. Start TypicalBot Cluster Manager
6. Run `npm run build:database`
7. Run `npm run build:instance`
8. Profit!

## Team

| Name | Role |
|--|--|
| [Bryan Pikaard](https://github.com/HyperCoder2975) | Maintainer, Core Contributor |
| [Nicholas Sylke](https://github.com/nsylke) | Maintainer, Core Contributor |
| [Braxton Mahr](https://github.com/SirPacker) | Core Contributor |
| [Tyler Richards](https://github.com/tjrgg) | Core Contributor |
| [Tobias Feld](https://github.com/TobiasFeld22)| Web Contributor |
| [Gigakek Vermin](https://github.com/AKSKL) | Docs Contributor |

## Show Your Support

If you like what we do, consider supporting us on [Patreon](https://patreon.com/typicalbot) or donate to us via [PayPal](https://paypal.me/typicalbot).

## License

TypicalBot is an open source software licensed under the [Apache 2.0 license](LICENSE).
