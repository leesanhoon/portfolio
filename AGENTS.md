# Repo Orchestration Bridge

Ap dung cho toan bo repo nay.

## Default behavior

Voi moi task non-trivial, agent phai:
1. Doc cac file orchestration truoc khi implement:
   - `.codex/prompt/init.md`
   - `.codex/prompt/subagent-runtime-bridge.md`
   - `.codex/memory/project-context.md`
   - `.codex/memory/orchestration-memory.md`
   - `.codex/templates/task-routing.md`
2. Dien giai cac ten nhu `code_mapper`, `backend_engineer`, `database_engineer`, `security_reviewer`, `test_validator`, `docs_writer` theo `.codex/prompt/subagent-runtime-bridge.md`.
3. Khao sat code truoc khi code.
4. Lap plan ngan truoc khi sua code.
5. Uu tien orchestration 1 main agent + nhom specialist roles khi task co ambiguity/risk.
6. Chi bat dau code sau khi da co evidence mapping.
7. Chon thay doi nho nhat hop ly.
8. Validate bang test/build/check phu hop nhat.
9. Sau khi xong, neu co pattern tai su dung duoc, cap nhat `.codex/memory/orchestration-memory.md`.

## Repo stack summary

- Frontend: Next.js 16 App Router + React 19 + TypeScript
- Styling: Tailwind CSS 4
- Backend: Next.js Route Handlers trong `src/app/api/`
- Linting: ESLint 9 (`npm run lint`)
- Build: `npm run build`

Khi dien giai task trong repo nay, uu tien hieu dung day la full-stack Next.js app, khong phai backend .NET hay monolith MVC truyen thong.

## Default 6-agent routing

- `code_mapper`
- `backend_engineer`
- `database_engineer`
- `security_reviewer`
- `test_validator`
- `docs_writer`

Tat ca cac ten tren phai duoc hieu la role logical truoc, khong mac dinh la runtime agent type co san.
