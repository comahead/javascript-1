
define('libs/require/text!siteconfig/apps/interactives-siteconfig.json',[],function () { return '{\n    "apps": [\n        {\n            "name": "Interactives",\n            "path": "apps/interactives",\n            "pages": [\n                {\n                    "name": "Interactive",\n                    "buildfile": {\n                        "path": "buildfiles/interactives"\n                    },\n                    "path": "apps/overlay/pages/interactive-overlay",\n                    "urls": ["^(interactive/.*)$"]\n                }\n            ]\n        }\n    ]\n}';});