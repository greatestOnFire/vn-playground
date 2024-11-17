// module.exports = {
//     presets: [
//         [
//             "@babel/preset-env",
//             {
//                 useBuiltIns: "usage",
//                 corejs: 3,
//                 targets: {
//                     node: "current",
//                 }
//             },
//         ],
//     ],
// };

module.exports = {
    env: {
        test: {
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: {
                            node: "current",
                        },
                    },
                ],
            ],
        },
    },
}