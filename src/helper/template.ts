import type { GetData } from './getData';
import type { UiConfig } from '../api/index';

export default function template(data: GetData, uiConfig: UiConfig): string {
  var card = `
        <svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <style>
            @font-face {
                font-family: 'IBM Plex Sans';
                font-style: normal;
                font-weight: 300 400 500 600 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdA.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }

            * {
                font-family: 'IBM Plex Sans', sans-serif !important;
            }

            .leftdiv {
                animation: fadeH 0.7s ease-in-out forwards;
            }

            .text {
                fill: #${uiConfig.text_color};
                font-size: 14px;
            }

            .singleitem {
                opacity: 0;
                animation: fade 0.3s ease-in-out forwards;
            }

            .followers {
                fill: #${uiConfig.text_color};
                font-size: 12px;
            }

            .namepl {
                fill: #${uiConfig.text_color};
                font-size: 17px;
                font-weight: 600;
                alignment-baseline: middle;
                text-anchor: middle;
            }

            .atpl {
                fill: #${uiConfig.text_color};
                font-size: 12px;
                font-weight: 500;
                alignment-baseline: middle;
                text-anchor: middle;
            }

            .icon {
                fill: #${uiConfig.icon_color};
                display: block;
            }


            @keyframes fade {
                from {
                    opacity: .5;
                }

                to {
                    opacity: 1;
                }
            }

            @keyframes fadeH {
                from {
                    opacity: 0;
                    transform: translate(-90px, 10px);
                }

                to {
                    opacity: 1;
                    transform: translate(10px, 10px);
                }
            }
        </style>
        <rect x="0.5" y="0.5" rx="16" height="99%" width="494" fill="#${uiConfig.card_color}" stroke="#${uiConfig.border_color}" stroke-opacity="1" />

        <g transform="translate(0, 40)">
            <g class="leftdiv">
            <defs>
                <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
                    <image x="0%" y="0%" width="512" height="512"
                        xlink:href="data:image/png;base64,${data.pic}">
                    </image>
                </pattern>
            </defs>
            <circle cx="86" cy="25" r="40" stroke="#${uiConfig.card_color}" stroke-width="0" fill="url(#image)" />
            <text x="86" y="80" class="namepl">${data.name}</text>
            <text x="86" y="100" class="atpl">@${data.username}</text>
            </g>

            <g transform="translate(230, 0)">
                <g class="singleitem" style="animation-delay: 560ms" transform="translate(25, 0)">

                    <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                        <path fill-rule="evenodd"
                            d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z" />
                    </svg>

                    <text class="text" x="25" y="12.5">Total Contributions:</text>
                    <text class="text" style="font-weight: 700" x="175" y="12.5">${data.total_contributions}</text>
                </g>
            </g>

            <svg>
                <g transform="translate(230, 25)">
                    <g class="singleitem" style="animation-delay: 210ms" transform="translate(25, 0)">

                        <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                            <path fill-rule="evenodd"
                                d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z" />
                        </svg>

                        <text class="text" x="25" y="12.5">Public Repos:</text>
                        <text class="text" style="font-weight: 700" x="175" y="12.5">${data.public_repos}</text>
                    </g>
                </g>

                <g transform="translate(230, 50)">
                    <g class="singleitem" style="animation-delay: 350ms" transform="translate(25, 0)">

                        <svg class="icon" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path fill-rule="evenodd"
                                d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                        </svg>

                        <text class="text" x="25" y="12.5">Pull Requests:</text>
                        <text class="text" style="font-weight: 700" x="175" y="12.5">${data.total_pull_requests}</text>
                    </g>
                </g>

                <g transform="translate(230, 75)">
                    <g class="singleitem" style="animation-delay: 460ms" transform="translate(25, 0)">

                        <svg class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
                            <path fill-rule="evenodd"
                                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        </svg>

                        <text class="text" x="25" y="12.5">Repo Contributions:</text>
                        <text class="text" style="font-weight: 700" x="175" y="12.5">${data.total_repos_contributed}</text>
                    </g>
                </g>

                <g transform="translate(230, 100)">
                    <g class="singleitem" style="animation-delay: 660ms" transform="translate(25, 0)">

                        <svg class="icon" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path fill-rule="evenodd"
                                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg>

                        <text class="text" x="25" y="12.5">Collaborations:</text>
                        <text class="text" style="font-weight: 700" x="175" y="12.5">${data.total_repos_collaborations}</text>
                    </g>
                </g>

            </svg>
        </g>
    </svg>`;
  return card;
}
