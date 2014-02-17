
define('libs/require/text!siteconfig/apps/ugc-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "apps": {\n        "UGC": {\n            "path": "apps/ugc-app",\n            "selector": ".ugc-app",\n            "css": ["ugc/ugc"]\n        }\n    },\n    "pages": [\n        {\n            "name": "UGC Home Page",\n            "appName": "UGC",\n            "path": "apps/ugc/pages/ugc-front",\n            "urls": ["^(yourtake/)$"],\n            "init_modules" :[\n                {\n                    "name":"ugc-featured-content"\n                },\n                {\n                    "name": "ugc-hero",\n                    "options": {\n                        "ads" : "false",\n                        "thumbsSelector": ".ugc-hero-multi-up-thumbs",\n                        "fullScreen": "false",\n                        "track": "false",\n                        "rotate": "true",\n                        "autostart": "true"\n                    }\n\n                },\n                {\n                    "name": "ugc-live-feed"\n                },\n                {\n                    "name": "ugc-my-contributions-links"\n                }\n            ],\n            "css": ["ugc-home-page"]\n        },\n        {\n            "name": "UGC Topics Home Page",\n            "appName": "UGC",\n            "path": "apps/ugc/pages/ugc-front",\n            "urls": ["^(yourtake/topics/)$", "^(yourtake/topics/?.*)$"],\n            "init_modules" :[\n                {\n                    "name": "ugc-live-feed"\n                },\n                {\n                    "name":"ugc-featured-content"\n                },\n                {\n                    "name": "ugc-topics-sortby-dropdown"\n                },\n                {\n                    "name": "ugc-my-contributions-links"\n                }\n            ],\n            "css": ["ugc-topics-page"]\n        },\n        {\n            "name": "UGC Topics Page",\n            "appName": "UGC",\n            "path": "apps/ugc/pages/ugc-front",\n            "urls": ["^(yourtake/topics/.*)$"],\n            "init_modules" :[\n                {\n                    "name": "ugc-live-feed"\n                },\n                {\n                    "name":"ugc-featured-content"\n                },\n                {\n                    "name": "ugc-my-contributions-links"\n                }\n            ],\n            "css": ["ugc-topics-page"]\n        },\n        {\n            "name": "UGC Posts",\n            "appName": "Overlay-with-utility-bar",\n            "css": ["ugc-asset-page"],\n            "preloadedUrl": "/yourtake/",\n            "init_modules": [\n                {\n                    "name": "ugc-report-abuse",\n                    "options": {\n                        "tooltipOptions": {\n                            "customPanelClass": "ugc-asset-page-media-item-report-abuse-tooltip-panel",\n                            "customTextClass": "ugc-asset-page-media-item-report-abuse-tooltip-text",\n                            "position": "left"\n                        }\n                    }\n                },\n                {\n                    "name": "ugc-asset-gallery",\n                    "options": {\n                        "ads": "false",\n                        "fullScreen": "false",\n                        "track": "false"\n                    }\n                },\n                {\n                    "name": "ugc-asset-video",\n                    "options": {\n                        "autostart": "true"\n                    }\n                }\n            ],\n            "urls": ["^(yourtake/asset/posts/[a-zA-Z0-9%\\\\-/\\\\.]*)$"]\n        },\n        {\n            "name": "UGC Profile",\n            "appName": "Users",\n            "path": "apps/ugc/pages/ugc-front",\n            "css": ["ugc-user-profile-page"],\n            "urls": ["^yourtake/profile/[a-zA-Z0-9%\\\\-/\\\\.]*$"],\n            "init_modules" :[\n                {\n                    "name":"ugc-featured-content"\n                }\n            ]\n        },\n        {\n            "name": "UGC FAQ",\n            "appName": "Overlay-with-footer",\n            "urls": ["^(yourtake/faq/)$"],\n            "preloadedUrl": "/yourtake/"\n        }\n    ],\n    "siteModules": {\n        "utility-bar-module-ugc": {\n            "path": "modules/stories/utility-bar-module-ugc",\n            "selector": ".util-bar-module-ugc",\n            "css": "ugc/utility-bar"\n        },\n        "ugc-featured-content": {\n            "path": "modules/fronts/featured-content",\n            "selector": ".ugc-featured-content-module",\n            "css": "modules/ugc-featured-content/ugc-featured-content"\n        },\n        "ugc-headline-grid": {\n            "css": "modules/ugc-headline-grid/ugc-headline-grid"\n        },\n        "ugc-live-feed": {\n            "css": "modules/ugc-live-feed/ugc-live-feed"\n        },\n        "ugc-hero": {\n            "path": "modules/carousel/carousel",\n            "selector": ".ugc-hero",\n            "css": "modules/ugc-hero/ugc-hero"\n        },\n        "ugc-report-abuse": {\n            "path": "modules/ugc/report-abuse",\n            "selector": ".ugc-asset-page"\n        },\n        "ugc-asset-gallery": {\n            "path": "modules/carousel/carousel",\n            "selector": ".ugc-asset-page-gallery"\n        },\n        "ugc-asset-video": {\n            "path": "modules/global/brightcove-video",\n            "selector": ".video"\n        },\n        "ugc-topics-sortby-dropdown": {\n            "path": "ui/dropdown",\n            "selector": ".ugc-topics-filter-sortby-dropdown"\n        },\n        "ugc-my-contributions-links": {\n            "path": "modules/ugc/my-contributions-links",\n            "selector": ".ugc-page-container"\n        }\n    }\n\n}';});
