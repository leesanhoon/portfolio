import React from "react";

interface MapGridProps {
    playerPos: { x: number; y: number };
    targetPos: { x: number; y: number };
}

export default function MapGrid({ playerPos, targetPos }: MapGridProps) {
    // Lưới 10x10 ô vuông
    const gridSize = 10;
    const gridLines = Array.from({ length: gridSize + 1 });

    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Vẽ các đường lưới dọc và ngang */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="border-[0.5px] border-gray-300/50"
                    />
                ))}
            </div>

            {/* Hiển thị tọa độ lưới (Tùy chọn, để dễ nhìn hơn) */}
            <div className="absolute inset-0 pointer-events-none">
                {gridLines.map((_, i) => (
                    <React.Fragment key={i}>
                        <div
                            className="absolute top-0 bottom-0 border-l border-gray-400"
                            style={{ left: (i / gridSize) * 100 + "%" }}
                        />
                        <div
                            className="absolute left-0 right-0 border-t border-gray-400"
                            style={{ top: (i / gridSize) * 100 + "%" }}
                        />
                    </React.Fragment>
                ))}
            </div>

            {/* Player marker */}
            <div
                className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"
                style={{
                    left: (playerPos.x / gridSize) * 100 + "%",
                    top: (playerPos.y / gridSize) * 100 + "%",
                }}
            >
                <span className="text-[8px] text-white font-bold">P</span>
            </div>

            {/* Target marker */}
            <div
                className="absolute w-4 h-4 bg-red-500 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 animate-pulse"
                style={{
                    left: (targetPos.x / gridSize) * 100 + "%",
                    top: (targetPos.y / gridSize) * 100 + "%",
                }}
            >
                <span className="text-[8px] text-white font-bold">T</span>
            </div>

            {/* Đường nối tham khảo (đường chim bay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <line
                    x1={(playerPos.x / gridSize) * 100 + "%"}
                    y1={(playerPos.y / gridSize) * 100 + "%"}
                    x2={(targetPos.x / gridSize) * 100 + "%"}
                    y2={(targetPos.y / gridSize) * 100 + "%"}
                    stroke="rgba(0,0,0,0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                />
            </svg>
        </div>
    );
}
