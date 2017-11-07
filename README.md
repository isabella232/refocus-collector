[![Coverage Status](https://coveralls.io/repos/github/salesforce/refocus-collector/badge.svg?branch=master)](https://coveralls.io/github/salesforce/refocus-collector?branch=master)

# refocus-collector

### Installation

Prerequisite: NPM and Node.js

* Install via Git Clone
    * ```git clone https://github.com/salesforce/refocus-collector.git```
    * ```cd refocus-collector```
    * ```npm install```
    * ```npm link```
    * try command ```refocus-collector```  or ```refocus-collector --help```

  Usage: ```refocus-collector [command] [options]```


### Commands

    start --collectorName --refocusUrl --accessToken  Start collector for name, refocus url and API token
    stop  --name                                      Stop given collector
    status  --name                                    Show status of collector
    deregister  --name                                Deregister given collector
    help [cmd]                                        Display help for [cmd]

  Options:

    -n, --name     specify the name of the collector
    -h, --help     output usage information
    -V, --version  output the version number

  Examples:

    $ refocus-collector --help
    $ refocus-collector start --collectorName=PRD_Collector_12345 --refocusUrl=https://refocus.foo.com --accessToken=eygduyguygijfdhkfjhkfdhg
    $ refocus-collector stop --name=PRD_Collector_12345
    $ refocus-collector status --name=PRD_Collector_12345
    $ refocus-collector deregister --name=PRD_Collector_12345
