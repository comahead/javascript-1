
define('libs/require/text!siteconfig/pages/users-pages-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "apps": {\n        "Users": {\n            "path": "base-app",\n            "selector": ".something"\n        }\n    },\n    "pages": [\n        {\n            "name": "Profile Page",\n            "appName": "Users",\n            "urls": [\n                "^(profile/[0-9]+/)$"\n            ],\n            "css": ["users"]\n        }\n    ]\n}';});
