import { DocsThemeConfig, Link } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
    logo: <span>PreTeXt Documentation</span>,
    project: {
        link: "https://github.com/siefkenj/pretext-book",
    },
    head: <React.Fragment></React.Fragment>,
    sidebar: {
        defaultMenuCollapseLevel: 2,
        autoCollapse: true,
    },
    footer: {
        content: (
            <React.Fragment>
                PreTeXt documentation © 2024&nbsp;
                <Link href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
                    CC-BY-SA International 4.0
                </Link>
            </React.Fragment>
        ),
    },
    // ... other theme options
};

export default config;
