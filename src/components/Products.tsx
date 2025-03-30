"use client";
import React from "react";
import {Paragraph} from "./Paragraph";
import {IconCircleCheckFilled} from "@tabler/icons-react";

export const Products = () => {
    return (
        <div className={""}>
            <Paragraph className={"mb-8"}>Well, I have been working on a these technologies for a while now.</Paragraph>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <div className="flex space-x-1 items-start">
                    <IconCircleCheckFilled className="flex-none h-3 w-4 mt-1 text-neutral-300"/>
                    <Paragraph className="text-sm md:text-sm lg:text-sm">
                        I have been experimenting with RPC framework with Java vert.x.
                    </Paragraph>
                </div>
                <div className="flex space-x-1 items-start">
                    <IconCircleCheckFilled className="flex-none h-3 w-4 mt-1 text-neutral-300"/>
                    <Paragraph className="text-sm md:text-sm lg:text-sm">
                        Tried the Kafka and RabitMQ to learn how queue system works.
                    </Paragraph>
                </div>
                <div className="flex space-x-1 items-start">
                    <IconCircleCheckFilled className="flex-none h-3 w-4 mt-1 text-neutral-300"/>
                    <Paragraph className="text-sm md:text-sm lg:text-sm">
                        Reading about analytic database and how they work.
                    </Paragraph>
                </div>
                <div className="flex space-x-1 items-start">
                    <IconCircleCheckFilled className="flex-none h-3 w-4 mt-1 text-neutral-300"/>
                    <Paragraph className="text-sm md:text-sm lg:text-sm">
                        Keeping an eye on the AI and how it is changing the world.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};
