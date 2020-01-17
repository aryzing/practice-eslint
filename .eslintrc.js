module.exports = {
    "ignorePatterns": ["one.js"],
    // "env": {
    //     "browser": true,
    //     "jest": true,
    // },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "MyGlobalGlob": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "root": true,
    "rules": {
        "no-console": 2,
        "no-undef": 2
    },
    "overrides": [
        {
            "files": ["unique.js"],
            "rules": {
                "no-console": 0
            }
        },
        {
            "files": ["**"],
            "rules": {
                "no-debugger": 2
            }
        }
    ]
};