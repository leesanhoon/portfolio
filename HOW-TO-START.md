# HOW TO START

Muc tieu: day la file duy nhat ban can mo khi copy starter-pack sang repo moi.

## 1. Copy gi sang repo moi
Copy nguyen bo thu muc `.codex/starter-pack/` vao root repo moi, theo cach sau:

- copy `D:\MyProject\backend-api-dotnet9\.codex\starter-pack\AGENTS.md`
- copy thu muc `D:\MyProject\backend-api-dotnet9\.codex\starter-pack\.codex\`

Sau khi copy, repo moi phai co:
- `AGENTS.md`
- `.codex/agents/`
- `.codex/prompt/`
- `.codex/memory/`
- `.codex/templates/`

## 2. Sua ngay 3 file
Chi can sua 3 file nay truoc khi dung:

### `AGENTS.md`
- giu orchestration workflow
- giu reference den `.codex/prompt/subagent-runtime-bridge.md`
- neu can, doi mo ta cho dung stack moi

### `.codex/memory/project-context.md`
Dien:
- stack cong nghe
- architecture/pattern chinh
- build/test commands
- coding conventions quan trong

### `.codex/prompt/examples.md`
Thay example mac dinh bang 2-3 task that su cua repo moi.

## 3. Neu muon an toan, check them 2 file
Nen doc nhanh them:
- `.codex/prompt/subagent-runtime-bridge.md`
- `.codex/starter-pack/copy-checklist.md`

Can nho:
- `code_mapper`, `backend_engineer`, `database_engineer`, ... la role logical
- neu runtime Codex spawn duoc subagents thi dung
- neu khong spawn duoc thi main agent tu emulate role do

## 4. Prompt dau tien nen dung
Paste prompt nay trong repo moi:

```text
Do not implement yet.
Doc `AGENTS.md`, `.codex/prompt/init.md`, `.codex/prompt/subagent-runtime-bridge.md`, `.codex/memory/project-context.md`, `.codex/memory/orchestration-memory.md`.
Ap dung orchestration mac dinh cua repo, map code truoc, lap plan, chia sub-task cho agents phu hop, va chi tra ve:
- Relevant files and code paths
- Existing patterns to reuse
- Implementation plan
- Sub-agent task breakdown
- Risks
- Validation steps
Task: [mo ta task dau tien]
```

## 5. Prompt hang ngay sau khi bootstrap
Khi repo da on, dung prompt ngan nay:

```text
Doc `AGENTS.md` va cac file `.codex/prompt` + `.codex/memory` lien quan truoc. Ap dung orchestration mac dinh cua repo cho task nay: map -> plan -> sub-agents/role fallback -> summary -> implement -> validate -> update memory. Task: [mo ta task]
```

## 6. Prompt resume sau compact

```text
Resume task theo orchestration mac dinh cua repo: doc `AGENTS.md`, `.codex/prompt/init.md`, `.codex/prompt/subagent-runtime-bridge.md`, `.codex/memory/project-context.md`, `.codex/memory/orchestration-memory.md`, sau do tiep tuc task nay voi day du flow map -> plan -> sub-agents/role fallback -> summary -> implement -> validate -> update memory. Task: [mo ta task]
```

## 7. Neu ban muon nhanh nhat
Chi can nho:
- copy `AGENTS.md`
- copy `.codex/`
- sua `project-context.md`
- paste prompt planning-only o muc 4

## 8. File nen mo tiep theo neu can
- `D:\MyProject\backend-api-dotnet9\.codex\starter-pack\bootstrap-new-repo.md`
- `D:\MyProject\backend-api-dotnet9\.codex\starter-pack\copy-checklist.md`
- `D:\MyProject\backend-api-dotnet9\.codex\starter-pack\README.md`
