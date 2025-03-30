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
} from "@tabler/icons-react";

export function FloatingDockAceternity() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconBolt className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/",
        },

        {
            title: "Work-History",
            icon: (
                <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/work",
        },
        {
            title: "Currently",
            icon: (
                <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/currently",
        },
        {
            title: "Blogs",
            icon: (
                <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "/blog",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.linkedin.com/in/moreprajwal/",
        },
        {
            title: "X",
            icon: (
                <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://x.com/prjwl_16",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://www.linkedin.com/in/moreprajwal/",
        },
        {
            title: "LeetCode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
            ),
            href: "https://leetcode.com/u/prjwl16/",
        },
    ];
    return (
        <div className="flex items-center justify-center w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
