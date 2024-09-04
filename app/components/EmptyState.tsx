'use client';
import React from "react";
import { FaRegCommentDots } from 'react-icons/fa'; 

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
                bg-gray-100
                text-gray-900
                relative
                overflow-hidden
                before:content-['']
                before:absolute
                before:inset-0
                before:bg-gradient-to-r
                before:from-gray-200
                before:to-gray-300
                before:opacity-60
                before:blur-3xl
                before:transition-all
                before:duration-500
                hover:before:opacity-70
                "
        >
            <div className="text-center items-center flex flex-col relative z-10">
                <FaRegCommentDots className="text-6xl mb-4 animate-pulse text-gray-600" />
                <p className="text-sm text-gray-600">
                    Start a new conversation or select an existing one from the list.
                </p>
            </div>
        </div>
    );
}

export default EmptyState;
