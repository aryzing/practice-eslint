module.exports = {
    // "ignorePatterns": ["unique.js"],
    "env": {
        "browser": true,
        "jest": true,
    },
    "globals": {
        "MyLocalGlob": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": 1,
        "no-cond-assign": 2,
    },
    "overrides": [
        {
            "files": ["one.js"],
            "rules": {
                "no-cond-assign": 0
            }
        },
        // {
        //     "files": ["unique.js"],
        //     "rules": {
        //         "no-debugger": 0
        //     }
        // }
    ]
};