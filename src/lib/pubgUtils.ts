export function generateTarget() {
    const x = Math.random() * 10;
    const y = Math.random() * 10;
    return { x, y };
}

export function calculateDistance(
    p1: { x: number; y: number },
    p2: { x: number; y: number }
) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy) * 100;
}

export function generateValidChallenge() {
    let p1, p2, dist;

    do {
        p1 = generateTarget();
        p2 = generateTarget();
        dist = calculateDistance(p1, p2);
    } while (dist < 121 || dist > 700);

    return { player: p1, target: p2 };
}
