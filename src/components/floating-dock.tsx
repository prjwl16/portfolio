"use client";
import React from "react";
import {FloatingDock} from "@/components/ui/floating-dock";
import {
    IconArticle,
    IconBolt,
    IconBrandGithub,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBriefcase2,
    IconBulb,
    IconDownload,
} from "@tabler/icons-react";
import {Navlink} from "@/types/navlink";


export function FloatingDockAceternity() {
    const links: Navlink[] = [
        {
            label: "Home",
            icon: (
                <IconBolt className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/",
        },

        {
            label: "Work-History",
            icon: (
                <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/work",
        },
        {
            label: "Currently",
            icon: (
                <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/currently",
        },
        {
            label: "Blogs",
            icon: (
                <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/blog",
        },
        {
            label: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://github.com/prjwl16/",
            target: "_blank",
        },
        {
            label: "X",
            icon: (
                <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://x.com/prjwl_16",
            target: "_blank",
        },
        {
            label: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.linkedin.com/in/moreprajwal/",
            target: "_blank",
        },
        {
            label: "LeetCode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://leetcode.com/u/prjwl16/",
            target: "_blank",
        },
        {
            label: "Resume",
            icon: (
                <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=sharing",
            target: "_blank",
        },

    ];

    return (
        <FloatingDock
            mobileClassName="fixed bottom-2 right-2 z-50 transform -translate-x-1/2"
            desktopClassName={"fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 mb-4"}
            items={links}
        />
    );
}
