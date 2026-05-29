"use client";

import React, { useState, useEffect } from "react";
import MapGrid from "@/components/pubg/MapGrid";
import { generateValidChallenge, calculateDistance } from "./pubgUtils";

export default function MortarTrainingPage() {
    const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
    const [userDistance, setUserDistance] = useState("");
    const [result, setResult] = useState<{
        actualDistance: number;
        userDistance: number;
        difference: number;
    } | null>(null);

    useEffect(() => {
        generateNewChallenge();
    }, []);

    const generateNewChallenge = () => {
        const { player, target } = generateValidChallenge();
        setPlayerPos(player);
        setTargetPos(target);
        setResult(null);
        setUserDistance("");
    };

    const handleCheck = () => {
        const actualDistance = calculateDistance(playerPos, targetPos);
        const parsedUserDistance = parseFloat(userDistance);

        if (isNaN(parsedUserDistance)) {
            alert("Vui lòng nhập một số hợp lệ!");
            return;
        }

        setResult({
            actualDistance,
            userDistance: parsedUserDistance,
            difference: Math.abs(actualDistance - parsedUserDistance),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex items-center justify-center font-sans">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6">
                {/* Left Side: Map */}
                <div className="flex-1 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200">
                    <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                                PUBG Mortar Training
                            </h1>
                        </div>
                        <div className="flex gap-4 text-xs font-bold uppercase text-gray-600 bg-gray-100 px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block shadow"></span>{" "}
                                Player
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full inline-block shadow"></span>{" "}
                                Target
                            </div>
                        </div>
                    </div>

                    <div className="aspect-square w-full mx-auto border-4 border-gray-800 relative bg-[#dce2d8] rounded-lg overflow-hidden shadow-inner">
                        <MapGrid playerPos={playerPos} targetPos={targetPos} />
                    </div>
                </div>

                {/* Right Side: Controls */}
                <div className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider border-b border-gray-100 pb-3">
                        Firing Solution
                    </h2>

                    <div className="space-y-6 flex-1">
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">
                                Estimated Distance (121m to 700m)
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={userDistance}
                                    onChange={(e) =>
                                        setUserDistance(e.target.value)
                                    }
                                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-lg font-mono outline-none text-gray-900"
                                    autoComplete="off"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                                    m
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handleCheck}
                            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                            Fire Mortar
                        </button>

                        {result && (
                            <div
                                className={
                                    "mt-6 p-5 rounded-xl border-2 transition-all " +
                                    (result.difference <= 10
                                        ? "bg-green-50 border-green-400"
                                        : result.difference <= 30
                                          ? "bg-yellow-50 border-yellow-400"
                                          : "bg-red-50 border-red-400")
                                }
                            >
                                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    {result.difference <= 10
                                        ? "🎯 Bullseye!"
                                        : result.difference <= 30
                                          ? "⚠️ Close Call!"
                                          : "❌ Missed!"}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between border-b border-gray-200/50 pb-1">
                                        <span className="text-gray-600">
                                            Actual Range
                                        </span>
                                        <span className="font-mono font-bold text-gray-900">
                                            {result.actualDistance.toFixed(1)}m
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-200/50 pb-1">
                                        <span className="text-gray-600">
                                            Your Input
                                        </span>
                                        <span className="font-mono font-bold text-gray-900">
                                            {result.userDistance}m
                                        </span>
                                    </div>
                                    <div className="flex justify-between pt-1">
                                        <span className="text-gray-600">
                                            Deviation
                                        </span>
                                        <span
                                            className={
                                                "font-mono font-bold " +
                                                (result.difference <= 10
                                                    ? "text-green-600"
                                                    : result.difference <= 30
                                                      ? "text-yellow-600"
                                                      : "text-red-600")
                                            }
                                        >
                                            {result.difference.toFixed(1)}m
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            onClick={generateNewChallenge}
                            className="w-full mt-8 bg-gray-800 hover:bg-gray-900 active:bg-black text-white font-bold py-3 px-4 rounded-xl transition-all shadow flex items-center justify-center gap-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                ></path>
                            </svg>
                            Next Target
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
