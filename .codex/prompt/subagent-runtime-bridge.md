# Subagent Runtime Bridge

Muc dich: noi giua 2 lop:
- lop orchestration logic do repo dinh nghia (`code_mapper`, `backend_engineer`, `database_engineer`, ...)
- lop runtime subagent thuc te ma Codex ho tro

## 1. Hai khai niem can tach ro

### A. Role logical
Day la vai tro tu duy trong repo, dung de chia viec.
Vi du:
- `code_mapper`
- `backend_engineer`
- `database_engineer`
- `security_reviewer`
- `test_validator`
- `docs_writer`

### B. Runtime-supported agent
Day la agent/runtime mode ma Codex thuc su ho tro trong phien lam viec hien tai.
Runtime support phu thuoc vao tool, session, va kha nang spawn cua Codex.

## 2. Nguyen tac mapping

Main agent phai map tu role logical -> cach thuc thi runtime.

Thu tu uu tien:
1. Neu runtime ho tro subagent spawn: spawn subagent cho role do.
2. Neu runtime khong co dung ten role: spawn bang agent type gan nhat ve chuc nang.
3. Neu runtime khong spawn duoc: main agent tu thuc hien role do theo che do phu hop.
4. Neu task nho: co the gom nhieu role logical vao cung main agent.

## 3. Mapping de xuat

- `code_mapper`: uu tien read-only mapping subagent; fallback la main agent tu inspect.
- `backend_engineer`: uu tien backend/code subagent; fallback la main agent tu xu ly backend.
- `database_engineer`: uu tien data/schema subagent; fallback la main agent tu inspect entity/migration.
- `security_reviewer`: uu tien security/review subagent; fallback la main agent tu review risk.
- `test_validator`: uu tien test/review subagent; fallback la main agent tu de xuat/chay validation.
- `docs_writer`: uu tien docs/writer subagent; fallback la main agent tu cap nhat doc.

## 4. Rule thuc thi

Cac ten trong `.codex/agents/*.md` la role logical cua repo, khong phai luc nao cung la runtime agent type co san.
Neu runtime ho tro spawn, main agent map va spawn agent phu hop.
Neu runtime khong ho tro hoac khong co dung role name, main agent emulate role do va giu nguyen handoff/report format.

## 5. One-line operational rule

```text
Treat `.codex/agents/*.md` as logical role definitions, not guaranteed runtime agent types; spawn matching subagents when supported, otherwise emulate those roles in the main agent and keep the same handoff/report format.
```
