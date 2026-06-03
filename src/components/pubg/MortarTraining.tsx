import { useCallback, useState } from "react";
import { ArrowLeft } from "lucide-react";
import MapGrid from "@/components/pubg/MapGrid";
import { calculateDistance, generateValidChallenge } from "@/lib/pubgUtils";

export default function MortarTraining() {
    const [challenge, setChallenge] = useState(() => generateValidChallenge());
    const [userDistance, setUserDistance] = useState("");
    const [result, setResult] = useState<{
        actualDistance: number;
        userDistance: number;
        difference: number;
    } | null>(null);

    const generateNewChallenge = useCallback(() => {
        setChallenge(generateValidChallenge());
        setResult(null);
        setUserDistance("");
    }, []);

    const handleCheck = () => {
        const actualDistance = calculateDistance(
            challenge.player,
            challenge.target
        );
        const parsedUserDistance = parseFloat(userDistance);

        if (Number.isNaN(parsedUserDistance)) {
            alert("Please enter a valid number.");
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
                <div className="flex-1 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200">
                    <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg px-3 py-2 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back Home
                        </a>
                        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                            PUBG Mortar Training
                        </h1>
                        <div className="flex gap-4 text-xs font-bold uppercase text-gray-600 bg-gray-100 px-4 py-2 rounded-xl">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-blue-500 rounded-full inline-block shadow"></span>
                                Player
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full inline-block shadow"></span>
                                Target
                            </div>
                        </div>
                    </div>

                    <div className="aspect-square w-full mx-auto border-4 border-gray-800 relative bg-[#dce2d8] rounded-lg overflow-hidden shadow-inner">
                        <MapGrid
                            playerPos={challenge.player}
                            targetPos={challenge.target}
                        />
                    </div>
                </div>

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
                            type="button"
                            onClick={handleCheck}
                            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow hover:shadow-md"
                        >
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
                                <h3 className="font-bold text-gray-800 mb-3">
                                    {result.difference <= 10
                                        ? "Bullseye"
                                        : result.difference <= 30
                                          ? "Close Call"
                                          : "Missed"}
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
                                        <span className="font-mono font-bold text-gray-900">
                                            {result.difference.toFixed(1)}m
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={generateNewChallenge}
                            className="w-full mt-8 bg-gray-800 hover:bg-gray-900 active:bg-black text-white font-bold py-3 px-4 rounded-xl transition-all shadow"
                        >
                            Next Target
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
