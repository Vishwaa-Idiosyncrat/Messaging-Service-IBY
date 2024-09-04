'use client';
import React from "react";
import { FaRegCommentDots } from 'react-icons/fa'; // Example icon from react-icons

const EmptyState = () => {
    return (
        <div
            className="
                px-4
                py-10
                sm:px-6
                lg:px-8
                h-full
                flex
                justify-center
                items-center
                bg-gray-900
                text-white
                relative
                overflow-hidden
                before:content-['']
                before:absolute
                before:inset-0
                before:bg-gradient-to-r
                before:from-indigo-500
                before:to-blue-500
                before:opacity-30
                before:blur-3xl
                before:transition-all
                before:duration-500
                hover:before:opacity-50
                "
        >
            <div className="text-center items-center flex flex-col relative z-10">
                <FaRegCommentDots className="text-6xl mb-4 animate-pulse" />
                <p className="text-sm text-gray-300">
                    Start a new conversation or select an existing one from the list.
                </p>
            </div>
        </div>
    );
}

export default EmptyState;
